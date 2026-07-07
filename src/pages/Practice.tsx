import { useState, useEffect, useCallback } from 'react'
import { useSearchParams, useNavigate } from 'react-router-dom'
import { ChevronLeft, ChevronRight, RotateCcw } from 'lucide-react'
import { QuestionCard } from '@/components/QuestionCard'
import { db } from '@/db'
import { shuffle } from '@/lib/utils'
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

  const [questions, setQuestions] = useState<Question[]>([])
  const [index, setIndex] = useState(0)
  const [selected, setSelected] = useState<string[]>([])
  const [submitted, setSubmitted] = useState(false)
  const [startTime, setStartTime] = useState(Date.now())

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
      setQuestions(doShuffle ? shuffle(q) : q)
      setIndex(0)
      setSelected([])
      setSubmitted(false)
      setStartTime(Date.now())
    }
    load()
  }, [category, doShuffle, singleId])

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

  return (
    <div className="mx-auto max-w-2xl px-4 py-4 space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between text-sm text-muted-foreground">
        <button onClick={() => navigate(-1)} className="flex items-center gap-1 hover:text-foreground">
          <ChevronLeft className="h-4 w-4" />
          {category ? decodeURIComponent(category).split('.').pop() : singleId ? '单题练习' : '全部题目'}
        </button>
        <span>{index + 1} / {questions.length}</span>
      </div>

      <QuestionCard
        question={current}
        selected={selected}
        onSelect={handleSelect}
        submitted={submitted}
        index={index}
        total={questions.length}
        tip={getTip(current.id)}
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
  )
}
