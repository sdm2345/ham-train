import { useState, useEffect, useCallback, useRef } from 'react'
import { useSearchParams, useNavigate } from 'react-router-dom'
import { ChevronLeft, ChevronRight, RotateCcw, Hash } from 'lucide-react'
import { QuestionCard } from '@/components/QuestionCard'
import { TipPanel } from '@/components/TipPanel'
import { db } from '@/db'
import { shuffle, seededShuffle, buildOrigToDisplay, remapTipLabels } from '@/lib/utils'
import { getTip } from '@/lib/tips'
import type { Question } from '@/types/question'
import type { StudyRecord } from '@/types/study'
import { upsertSRSCard } from '@/lib/srs'

export function Practice() {
  const [params] = useSearchParams()
  const navigate = useNavigate()
  const category = params.get('category') ?? undefined
  const doShuffle = params.get('shuffle') === '1'
  const singleId = params.get('id') ?? undefined
  const untriedOnly = params.get('untried') === '1'

  const [questions, setQuestions] = useState<Question[]>([])
  const [index, setIndex] = useState(0)
  const [selected, setSelected] = useState<string[]>([])
  const [submitted, setSubmitted] = useState(false)
  const [startTime, setStartTime] = useState(Date.now())
  const [allPracticed, setAllPracticed] = useState(false)
  const [jumpOpen, setJumpOpen] = useState(false)
  const [jumpInput, setJumpInput] = useState('')
  const [jumpError, setJumpError] = useState('')
  const jumpInputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    async function load() {
      let q: Question[]
      if (singleId) {
        const found = await db.questions.get(singleId)
        q = found ? [found] : []
      } else if (category) {
        q = await db.questions.where('category').equals(category).toArray()
      } else {
        q = await db.questions.toArray()
      }

      if (untriedOnly && !singleId) {
        const practicedIds = new Set(
          (await db.records.orderBy('questionId').uniqueKeys()) as string[]
        )
        q = q.filter((item) => !practicedIds.has(item.id))
        if (q.length === 0) {
          setAllPracticed(true)
          setQuestions([])
          return
        }
      }

      setAllPracticed(false)
      setQuestions(doShuffle ? shuffle(q) : q)
      setIndex(0)
      setSelected([])
      setSubmitted(false)
      setStartTime(Date.now())
    }
    load()
  }, [category, doShuffle, singleId, untriedOnly])

  const current = questions[index]

  const handleSelect = useCallback((key: string) => {
    if (!current) return
    if (current.type === 'single') {
      setSelected([key])
    } else {
      setSelected((prev) =>
        prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key],
      )
    }
  }, [current])

  const handleSubmit = useCallback(async () => {
    if (!current || selected.length === 0) return
    setSubmitted(true)

    const correct =
      current.answer_keys.length === selected.length &&
      current.answer_keys.every((k) => selected.includes(k))

    const record: StudyRecord = {
      questionId: current.id,
      timestamp: Date.now(),
      isCorrect: correct ? 1 : 0,
      mode: 'practice',
      selectedAnswers: selected,
      timeSpent: Date.now() - startTime,
    }
    await db.records.add(record)
    await upsertSRSCard(current.id, correct)
  }, [current, selected, startTime])

  const handleNext = () => {
    setIndex((i) => i + 1)
    setSelected([])
    setSubmitted(false)
    setStartTime(Date.now())
  }

  const handlePrev = () => {
    setIndex((i) => i - 1)
    setSelected([])
    setSubmitted(false)
    setStartTime(Date.now())
  }

  const openJump = () => {
    setJumpInput('')
    setJumpError('')
    setJumpOpen(true)
    setTimeout(() => jumpInputRef.current?.focus(), 50)
  }

  const handleJump = () => {
    const val = jumpInput.trim()
    // support both "A-12" and "12"
    const byId = questions.findIndex((q) => q.id.toLowerCase() === val.toLowerCase())
    if (byId !== -1) {
      setIndex(byId)
      setSelected([])
      setSubmitted(false)
      setStartTime(Date.now())
      setJumpOpen(false)
      return
    }
    const num = parseInt(val)
    if (!isNaN(num) && num >= 1 && num <= questions.length) {
      setIndex(num - 1)
      setSelected([])
      setSubmitted(false)
      setStartTime(Date.now())
      setJumpOpen(false)
      return
    }
    setJumpError(`找不到题目「${val}」，请输入序号（1–${questions.length}）或题号如 A-12`)
  }

  const handleUntriedToggle = (checked: boolean) => {
    const next = new URLSearchParams(params)
    if (checked) next.set('untried', '1')
    else next.delete('untried')
    navigate(`/practice?${next.toString()}`, { replace: true })
  }

  if (allPracticed) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-12 text-center space-y-4">
        <p className="text-2xl font-bold">🎉 全部练习过了！</p>
        <p className="text-muted-foreground">
          {category ? decodeURIComponent(category).split('.').pop() : '全部题目'}已全部做过，取消筛选继续练习。
        </p>
        <div className="flex gap-3 justify-center">
          <button
            onClick={() => handleUntriedToggle(false)}
            className="rounded-lg border px-4 py-2 text-sm hover:bg-muted"
          >
            显示全部题目
          </button>
          <button
            onClick={() => navigate('/')}
            className="rounded-lg bg-primary px-4 py-2 text-sm text-primary-foreground hover:bg-primary/90"
          >
            返回首页
          </button>
        </div>
      </div>
    )
  }

  if (questions.length === 0) {
    return (
      <div className="flex h-full items-center justify-center p-8 text-muted-foreground">
        加载中…
      </div>
    )
  }

  if (index >= questions.length) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-12 text-center space-y-4">
        <p className="text-2xl font-bold">本轮练习完成！</p>
        <p className="text-muted-foreground">共 {questions.length} 题</p>
        <div className="flex gap-3 justify-center">
          <button
            onClick={() => { setIndex(0); setSelected([]); setSubmitted(false) }}
            className="flex items-center gap-2 rounded-lg border px-4 py-2 text-sm hover:bg-muted"
          >
            <RotateCcw className="h-4 w-4" /> 重新开始
          </button>
          <button
            onClick={() => navigate('/')}
            className="rounded-lg bg-primary px-4 py-2 text-sm text-primary-foreground hover:bg-primary/90"
          >
            返回首页
          </button>
        </div>
      </div>
    )
  }

  const rawTip = getTip(current.id)
  const dateStr = new Date().toISOString().slice(0, 10)
  const displayOptions = seededShuffle(current.options, `${dateStr}:${current.id}`)
  const origToDisplay = buildOrigToDisplay(displayOptions)
  const tip = rawTip ? remapTipLabels(rawTip, origToDisplay) : null
  const showTip = submitted && !!tip

  return (
    <div className="mx-auto max-w-5xl px-4 py-4 space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between text-sm text-muted-foreground">
        <button onClick={() => navigate(-1)} className="flex items-center gap-1 hover:text-foreground">
          <ChevronLeft className="h-4 w-4" />
          {category ? decodeURIComponent(category).split('.').pop() : singleId ? '单题练习' : '全部题目'}
        </button>
        <span>{index + 1} / {questions.length}</span>
      </div>

      {/* Untried filter */}
      {!singleId && (
        <label className="flex items-center gap-2 text-sm text-muted-foreground cursor-pointer select-none w-fit">
          <input
            type="checkbox"
            checked={untriedOnly}
            onChange={(e) => handleUntriedToggle(e.target.checked)}
            className="h-4 w-4 rounded border-muted-foreground/40 accent-primary"
          />
          只做未练习
        </label>
      )}

      {/* Main content: question left, tip slides in from right on lg */}
      <div className="flex gap-6 items-start">
        <div className="flex flex-col gap-4 min-w-0 flex-1">
          <QuestionCard
            question={current}
            selected={selected}
            onSelect={handleSelect}
            submitted={submitted}
            index={index}
            total={questions.length}
          />

          {/* Action buttons */}
          <div className="flex gap-3">
            <button
              onClick={handlePrev}
              disabled={index === 0}
              className="flex-1 rounded-lg border py-3 text-sm disabled:opacity-40 hover:bg-muted"
            >
              <ChevronLeft className="inline h-4 w-4" /> 上一题
            </button>

            <button
              onClick={openJump}
              className="rounded-lg border px-4 py-3 text-sm hover:bg-muted"
              title="跳转到指定题目"
            >
              <Hash className="h-4 w-4" />
            </button>

            {!submitted ? (
              <button
                onClick={handleSubmit}
                disabled={selected.length === 0}
                className="flex-1 rounded-lg bg-primary py-3 text-sm font-medium text-primary-foreground disabled:opacity-40 hover:bg-primary/90"
              >
                提交答案
              </button>
            ) : (
              <button
                onClick={handleNext}
                className="flex-1 rounded-lg bg-primary py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90"
              >
                下一题 <ChevronRight className="inline h-4 w-4" />
              </button>
            )}
          </div>
        </div>

        {/* Tip panel: slides in from right, hidden on mobile */}
        <div
          className="hidden lg:block overflow-hidden shrink-0 sticky top-4"
          style={{
            width: showTip ? '380px' : '0',
            opacity: showTip ? 1 : 0,
            transition: 'width 0.3s ease, opacity 0.3s ease',
          }}
        >
          {tip && <TipPanel tip={tip} />}
        </div>
      </div>

      {/* Tip panel below on mobile */}
      {showTip && tip && (
        <div className="lg:hidden">
          <TipPanel tip={tip} />
        </div>
      )}

      {/* Jump dialog */}
      {jumpOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
          onClick={() => setJumpOpen(false)}
        >
          <div
            className="bg-card rounded-xl border shadow-lg p-5 w-72 space-y-3"
            onClick={(e) => e.stopPropagation()}
          >
            <p className="text-sm font-medium">跳转到题目</p>
            <input
              ref={jumpInputRef}
              type="text"
              value={jumpInput}
              onChange={(e) => { setJumpInput(e.target.value); setJumpError('') }}
              onKeyDown={(e) => e.key === 'Enter' && handleJump()}
              placeholder={`序号 1–${questions.length} 或题号如 A-12`}
              className="w-full rounded-lg border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary"
            />
            {jumpError && <p className="text-xs text-red-500">{jumpError}</p>}
            <div className="flex gap-2 justify-end">
              <button
                onClick={() => setJumpOpen(false)}
                className="rounded-lg border px-3 py-1.5 text-sm hover:bg-muted"
              >
                取消
              </button>
              <button
                onClick={handleJump}
                className="rounded-lg bg-primary px-3 py-1.5 text-sm text-primary-foreground hover:bg-primary/90"
              >
                跳转
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
