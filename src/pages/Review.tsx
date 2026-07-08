import { useState, useEffect, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { BookMarked, RotateCcw, ChevronLeft } from 'lucide-react'
import { QuestionCard } from '@/components/QuestionCard'
import { TipPanel } from '@/components/TipPanel'
import { db } from '@/db'
import { upsertSRSCard, isDue } from '@/lib/srs'
import { getTip } from '@/lib/tips'
import type { Question } from '@/types/question'
import type { SRSCard } from '@/types/srs'
import { BOX_LABELS } from '@/types/srs'
import { shuffle } from '@/lib/utils'

interface SessionStats {
  correct: number
  wrong: number
}

export function Review() {
  const navigate = useNavigate()

  const [queue, setQueue] = useState<SRSCard[]>([])
  const [queueIndex, setQueueIndex] = useState(0)
  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null)
  const [selected, setSelected] = useState<string[]>([])
  const [submitted, setSubmitted] = useState(false)
  const [wrongSet, setWrongSet] = useState<Set<string>>(new Set())
  const [sessionStats, setSessionStats] = useState<SessionStats>({ correct: 0, wrong: 0 })
  const [loading, setLoading] = useState(true)
  const [nextDueTime, setNextDueTime] = useState<number | null>(null)
  const [done, setDone] = useState(false)

  useEffect(() => {
    async function load() {
      setLoading(true)
      const allCards = await db.srs_cards.toArray()
      const dueCards = allCards.filter(isDue)

      if (dueCards.length === 0) {
        // Check if any future cards exist
        const futureCards = allCards.filter((c) => c.nextReview > Date.now())
        if (futureCards.length > 0) {
          const earliest = Math.min(...futureCards.map((c) => c.nextReview))
          setNextDueTime(earliest)
        }
        setQueue([])
        setLoading(false)
        return
      }

      const shuffled = shuffle(dueCards)
      const questionIds = shuffled.map((c) => c.questionId)
      const questions = await db.questions.where('id').anyOf(questionIds).toArray()
      const questionMap = new Map(questions.map((q) => [q.id, q]))

      // Filter to cards whose questions exist in db
      const validCards = shuffled.filter((c) => questionMap.has(c.questionId))
      setQueue(validCards)
      setQueueIndex(0)

      if (validCards.length > 0) {
        setCurrentQuestion(questionMap.get(validCards[0].questionId) ?? null)
      }

      setLoading(false)
    }
    load()
  }, [])

  // Fetch question when queueIndex changes
  useEffect(() => {
    if (queue.length === 0) return
    if (queueIndex >= queue.length) {
      setDone(true)
      return
    }
    const card = queue[queueIndex]
    db.questions.get(card.questionId).then((q) => {
      setCurrentQuestion(q ?? null)
    })
  }, [queue, queueIndex])

  const handleSelect = useCallback(
    (key: string) => {
      if (!currentQuestion || submitted) return
      if (currentQuestion.type === 'single') {
        setSelected([key])
      } else {
        setSelected((prev) =>
          prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key],
        )
      }
    },
    [currentQuestion, submitted],
  )

  const handleSubmit = useCallback(async () => {
    if (!currentQuestion || selected.length === 0 || submitted) return
    setSubmitted(true)

    const card = queue[queueIndex]
    const correct =
      currentQuestion.answer_keys.length === selected.length &&
      currentQuestion.answer_keys.every((k) => selected.includes(k))

    await upsertSRSCard(card.questionId, correct)

    if (correct) {
      setSessionStats((prev) => ({ ...prev, correct: prev.correct + 1 }))
    } else {
      setSessionStats((prev) => ({ ...prev, wrong: prev.wrong + 1 }))
      // Requeue once if not already in wrongSet
      if (!wrongSet.has(card.questionId)) {
        setWrongSet((prev) => new Set(prev).add(card.questionId))
        setQueue((prev) => [...prev, card])
      }
    }
  }, [currentQuestion, selected, submitted, queue, queueIndex, wrongSet])

  const handleNext = () => {
    setSelected([])
    setSubmitted(false)
    setQueueIndex((i) => i + 1)
  }

  const handleRestart = async () => {
    const allCards = await db.srs_cards.toArray()
    const dueCards = allCards.filter(isDue)
    if (dueCards.length === 0) {
      setDone(true)
      return
    }
    const shuffled = shuffle(dueCards)
    const questionIds = shuffled.map((c) => c.questionId)
    const questions = await db.questions.where('id').anyOf(questionIds).toArray()
    const questionMap = new Map(questions.map((q) => [q.id, q]))
    const validCards = shuffled.filter((c) => questionMap.has(c.questionId))
    setQueue(validCards)
    setQueueIndex(0)
    setSelected([])
    setSubmitted(false)
    setWrongSet(new Set())
    setSessionStats({ correct: 0, wrong: 0 })
    setDone(false)
    if (validCards.length > 0) {
      setCurrentQuestion(questionMap.get(validCards[0].questionId) ?? null)
    }
  }

  if (loading) {
    return (
      <div className="flex h-full items-center justify-center p-8 text-muted-foreground">
        加载中…
      </div>
    )
  }

  // Empty state
  if (queue.length === 0) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-12 text-center space-y-4">
        <BookMarked className="mx-auto h-12 w-12 text-muted-foreground/50" />
        <p className="text-xl font-bold">
          {nextDueTime ? '今日无需复习' : '暂无复习题目，先去练习几题吧'}
        </p>
        {nextDueTime && (
          <p className="text-sm text-muted-foreground">
            下次复习时间：{new Date(nextDueTime).toLocaleString('zh-CN')}
          </p>
        )}
        <button
          onClick={() => navigate('/practice')}
          className="rounded-lg bg-primary px-4 py-2 text-sm text-primary-foreground hover:bg-primary/90"
        >
          去练习
        </button>
      </div>
    )
  }

  // Completion screen
  if (done || queueIndex >= queue.length) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-12 text-center space-y-4">
        <BookMarked className="mx-auto h-12 w-12 text-primary" />
        <p className="text-2xl font-bold">复习完成！</p>
        <div className="flex justify-center gap-8 text-sm">
          <div className="flex flex-col items-center gap-1">
            <span className="text-2xl font-bold text-green-600">{sessionStats.correct}</span>
            <span className="text-muted-foreground">答对</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <span className="text-2xl font-bold text-red-500">{sessionStats.wrong}</span>
            <span className="text-muted-foreground">答错</span>
          </div>
        </div>
        <div className="flex gap-3 justify-center">
          <button
            onClick={handleRestart}
            className="flex items-center gap-2 rounded-lg border px-4 py-2 text-sm hover:bg-muted"
          >
            <RotateCcw className="h-4 w-4" /> 再复习一遍
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

  const card = queue[queueIndex]
  const tip = currentQuestion ? getTip(currentQuestion.id) : null
  const showTip = submitted && !!tip

  return (
    <div className="mx-auto max-w-5xl px-4 py-4 space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between text-sm text-muted-foreground">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-1 hover:text-foreground"
        >
          <ChevronLeft className="h-4 w-4" />
          复习
        </button>
        <span>{queueIndex + 1} / {queue.length}</span>
      </div>

      {/* Progress bar */}
      <div className="h-1.5 w-full rounded-full bg-muted overflow-hidden">
        <div
          className="h-full rounded-full bg-primary transition-all"
          style={{ width: `${(queueIndex / queue.length) * 100}%` }}
        />
      </div>

      {/* Box badge */}
      <div className="flex items-center gap-2">
        <span className="inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-xs text-muted-foreground">
          <BookMarked className="h-3 w-3" />
          {BOX_LABELS[card.box]}
        </span>
      </div>

      {/* Main content: question left, tip slides in from right on lg */}
      <div className="flex gap-6 items-start">
        <div className="flex flex-col gap-4 min-w-0 flex-1">
          {currentQuestion && (
            <QuestionCard
              question={currentQuestion}
              selected={selected}
              onSelect={handleSelect}
              submitted={submitted}
              index={queueIndex}
              total={queue.length}
            />
          )}

          {/* Action button */}
          <div className="flex gap-3">
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
                下一题
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
    </div>
  )
}
