# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

# ham-train

业余无线电 A 证刷题训练应用。

## 项目信息

- **本地开发**：`pnpm dev` → `http://localhost:5174/ham-train/`
- **部署**：`pnpm deploy` → 推送 dist 到 gh-pages 分支
- **线上地址**：`https://pages.github.tools.sap/I538105/ham-train/`
- **GitHub**：`https://github.tools.sap/I538105/ham-train`

## 技术栈

- Vite 8 + React 19 + TypeScript（严格模式）
- React Router v7（SPA，basename `/ham-train/`）
- Tailwind CSS v4（`@tailwindcss/vite` 插件，`@theme inline` 映射 CSS 变量）
- Dexie.js v4 + dexie-react-hooks（IndexedDB）
- Zustand v5（考试会话状态）
- lucide-react 图标

## 目录结构

```
src/
  pages/       Home  Practice  Exam  ErrorBook
  components/  NavBar  CategoryCard  QuestionCard
  db/          index.ts（Dexie schema）  seed.ts（首次加载 bulkAdd）
  hooks/       useStudyStats.ts（live query 统计）
  store/       session.ts（Zustand 考试会话）
  types/       question.ts  study.ts
  lib/         utils.ts（cn / shuffle / formatTime）
public/
  data/A-tagged.json   # 683题，含 tag + category 字段
scripts/
  merge-tags.mjs       # 合并 A.json + questions_tagged.csv → A-tagged.json
  deploy-ghpages.mjs   # 手动部署脚本
```

## 数据库 Schema

```
questions:  &id, tag, category
records:    ++id, questionId, timestamp, isCorrect, [questionId+isCorrect]
```

- `isCorrect` 存为 `0 | 1`（IndexableType 不支持 boolean，需用数字）
- 查询正确题用 `.equals(1)`，错题用 `.equals(0)`

## 类别体系（9 大类）

| key | 显示名 | 题数 |
|-----|--------|------|
| `0.法规管理` | 法规管理 | 149 |
| `F.频率管理` | 频率管理 | 99 |
| `1.操作实践` | 操作实践 | 127 |
| `2.发射技术` | 发射技术 | 55 |
| `3.无线电传播` | 无线电传播 | 18 |
| `4.天线技术` | 天线技术 | 68 |
| `5.接收技术` | 接收技术 | 69 |
| `6.电路基础` | 电路基础 | 75 |
| `7.安全` | 安全 | 23 |

## 架构要点

**状态管理分层**：
- **Zustand** (`store/session.ts`) 仅用于考试模式——持有题目列表、答案 map、标记 flags、计时器边界。考试结束（`finish()` 或超时）后由 `Exam.tsx` 一次性 `bulkAdd` 写入 Dexie。
- **Practice 模式**全用本地 React state，每题提交后立即写一条 `StudyRecord`。

**考试出题规则**：32 道随机单选 + 8 道随机多选，合并后再次 shuffle，固定 40 题 40 分钟，答对 32 题（80 分）及格。

**路由参数**：Practice 页通过 `?category=X&shuffle=1` URL 参数过滤题目，无参数时加载全部题目。

**`seedIfEmpty` 幂等性**：模块级 promise 变量保证同一会话只 fetch 一次，`App.tsx` useEffect 触发。若 IndexedDB 已有数据则立即返回。

**`merge-tags.mjs` 依赖**：需要兄弟目录 `../ham-exam-web/public/questions/A.json` 和 `../ham-exam-web/A/questions_tagged.csv` 才能运行，这两个文件不在本仓库内。

## 已知注意事项

- **React StrictMode 已移除**：Dexie v4 live query 与 StrictMode 双重挂载冲突（`Cannot read properties of null (reading 'trans')`），main.tsx 不使用 StrictMode
- **Tailwind v4 主题**：颜色变量必须在 `@theme inline {}` 中声明，仅用 `@layer base` 不会生成 `bg-card` 等工具类
- **CSV 行尾**：`questions_tagged.csv` 使用 CRLF，merge 脚本必须对 tag/category 字段 `.trim()` 去除 `\r`
- **Vite base 路径**：`import.meta.env.BASE_URL` 用于 fetch seed 数据，所有静态资源路径需加此前缀
- **github.tools.sap Actions**：企业级禁用，用 `pnpm deploy` 手动部署替代

## 常用命令

```bash
pnpm dev          # 本地开发
pnpm build        # 生产构建
pnpm deploy       # 构建并推送 gh-pages
node scripts/merge-tags.mjs  # 重新生成 A-tagged.json（数据更新时）
```
