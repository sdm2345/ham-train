#!/usr/bin/env python3
"""
Generate mnemonic tip Markdown files for each ham radio exam question.
Reads A-tagged.json, skips already-generated tips, calls Anthropic API in batches.
"""
import json
import os
import sys
import time
import threading
from pathlib import Path
from collections import defaultdict
from concurrent.futures import ThreadPoolExecutor, as_completed

import subprocess
import requests

# ── Config ────────────────────────────────────────────────────────────────────
BASE_URL = "http://localhost:6655/anthropic/"
MODEL    = os.environ.get("ANTHROPIC_SMALL_FAST_MODEL", "anthropic--claude-4.5-haiku")
TIPS_DIR   = Path(__file__).parent.parent / "src" / "tips"
DATA_FILE  = Path(__file__).parent.parent / "public" / "data" / "A-tagged.json"

def _get_hai_key() -> str:
    """Read current API key from hai proxy log (persisted in Keychain, stable across restarts)."""
    log = Path.home() / ".config/hai/hai-service.log"
    if not log.exists():
        raise RuntimeError(f"hai log not found: {log}")
    result = subprocess.run(
        ["grep", "apiKey=", str(log)],
        capture_output=True, text=True
    )
    lines = result.stdout.strip().splitlines()
    if not lines:
        raise RuntimeError("No apiKey entry found in hai log")
    # last line, extract apiKey=<value>
    for part in lines[-1].split():
        if part.startswith("apiKey="):
            return part.split("=", 1)[1]
    raise RuntimeError("Could not parse apiKey from log line")

AUTH_TOKEN = _get_hai_key()
TIPS_DIR   = Path(__file__).parent.parent / "src" / "tips"
DATA_FILE  = Path(__file__).parent.parent / "public" / "data" / "A-tagged.json"
BATCH_SIZE = 12        # questions per API call
MAX_WORKERS = 8        # parallel API calls
RETRY      = 3

TIPS_DIR.mkdir(exist_ok=True)

# ── Load questions ─────────────────────────────────────────────────────────────
with open(DATA_FILE, encoding="utf-8") as f:
    all_questions = json.load(f)

existing = {p.stem for p in TIPS_DIR.glob("*.md")}
todo = [q for q in all_questions if q["id"] not in existing]

if not todo:
    print("All tips already generated.")
    sys.exit(0)

print(f"Total: {len(all_questions)} | Have: {len(existing)} | To generate: {len(todo)}")

# ── Group into batches by tag ──────────────────────────────────────────────────
by_tag: dict[str, list] = defaultdict(list)
for q in todo:
    by_tag[q["tag"]].append(q)

batches: list[list] = []
for qs in by_tag.values():
    for i in range(0, len(qs), BATCH_SIZE):
        batches.append(qs[i:i + BATCH_SIZE])

print(f"Batches: {len(batches)} (max {BATCH_SIZE} questions each)")

# ── API helper ────────────────────────────────────────────────────────────────
def call_api(prompt: str) -> str:
    headers = {
        "Authorization": f"Bearer {AUTH_TOKEN}",
        "anthropic-version": "2023-06-01",
        "content-type": "application/json",
    }
    body = {
        "model": MODEL,
        "max_tokens": 4096,
        "messages": [{"role": "user", "content": prompt}],
    }
    for attempt in range(RETRY):
        try:
            resp = requests.post(
                BASE_URL.rstrip("/") + "/v1/messages",
                headers=headers,
                json=body,
                timeout=60,
            )
            resp.raise_for_status()
            return resp.json()["content"][0]["text"]
        except Exception as e:
            if attempt == RETRY - 1:
                raise
            time.sleep(2 ** attempt)


def build_prompt(questions: list) -> str:
    tag = questions[0]["tag"]
    lines = []
    for q in questions:
        opts = "\n".join(f"  {k}. {v}" for k, v in
                         {o["key"]: o["text"] for o in q["options"]}.items())
        ans = "、".join(q["answer_keys"])
        lines.append(f"**{q['id']}** [{('多选' if q['type']=='multiple' else '单选')}] 答案:{ans}\n{q['question']}\n{opts}")
    q_block = "\n\n---\n\n".join(lines)

    return f"""你是业余无线电A证备考助手，为以下{len(questions)}道题生成速记提示（Markdown格式）。

分类标签: {tag}

**输出格式**（严格遵守）：
每道题用以下分隔符包裹，ID必须完全一致：

<<<A-xxx>>>
（速记内容）
<<<END>>>

速记内容规则：
1. 第一行用 blockquote(>) 写核心速记，15-40字，简洁有力
2. 有规律/对比/数值时用Markdown表格（2-4列）
3. 助记技巧用**加粗**标关键词
4. Q码/缩语：拆解字母含义
5. 法规：给出层级/机构关系
6. 电路/数值：给出公式/典型值
7. 同tag相似题可互相对比
8. 每条80-200字

**题目列表**：
{q_block}

请为每道题输出 <<<A-xxx>>> ... <<<END>>> 格式的速记。"""


def parse_response(text: str, questions: list) -> dict[str, str]:
    """Extract tip content for each question ID from the response."""
    results = {}
    for q in questions:
        qid = q["id"]
        marker = f"<<<{qid}>>>"
        start = text.find(marker)
        if start == -1:
            continue
        content_start = start + len(marker)
        end = text.find("<<<END>>>", content_start)
        if end == -1:
            end = text.find("<<<", content_start)  # next marker
        if end == -1:
            content = text[content_start:].strip()
        else:
            content = text[content_start:end].strip()
        if content:
            results[qid] = content
    return results


# ── Progress tracking ─────────────────────────────────────────────────────────
lock = threading.Lock()
done_count = 0
written_count = 0
failed_ids: list[str] = []


def process_batch(batch: list) -> dict[str, str]:
    prompt = build_prompt(batch)
    text = call_api(prompt)
    return parse_response(text, batch)


def run_batch(batch: list):
    global done_count, written_count
    ids = [q["id"] for q in batch]
    try:
        tips = process_batch(batch)
        for qid, content in tips.items():
            out = TIPS_DIR / f"{qid}.md"
            out.write_text(content, encoding="utf-8")
        with lock:
            written_count += len(tips)
            done_count += 1
            missed = set(ids) - set(tips.keys())
            if missed:
                failed_ids.extend(missed)
            pct = done_count / len(batches) * 100
            print(f"[{done_count:3d}/{len(batches)}] {pct:5.1f}%  +{len(tips)} tips"
                  + (f"  MISS:{sorted(missed)}" if missed else ""))
    except Exception as e:
        with lock:
            done_count += 1
            failed_ids.extend(ids)
            print(f"[{done_count:3d}/{len(batches)}] ERROR batch {ids[0]}..{ids[-1]}: {e}")


# ── Run ───────────────────────────────────────────────────────────────────────
print(f"Starting with {MAX_WORKERS} parallel workers, model={MODEL}\n")
t0 = time.time()

with ThreadPoolExecutor(max_workers=MAX_WORKERS) as ex:
    futures = [ex.submit(run_batch, b) for b in batches]
    for f in as_completed(futures):
        f.result()  # re-raise exceptions

elapsed = time.time() - t0
total_written = len(list(TIPS_DIR.glob("*.md")))
print(f"\nDone in {elapsed:.1f}s")
print(f"Tips in src/tips/: {total_written} / {len(all_questions)}")

if failed_ids:
    print(f"Failed ({len(failed_ids)}): {sorted(failed_ids, key=lambda x: int(x.split('-')[1]))}")
    sys.exit(1)
