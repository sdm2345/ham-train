import { useState, useEffect, useRef } from 'react'
import { Flag, ChevronLeft, ChevronRight, Clock } from 'lucide-react'
import { QuestionCard } from '@/components/QuestionCard'
import { useSessionStore } from '@/store/session'
import { db } from '@/db'
import { shuffle, formatTime } from '@/lib/utils'
import type { StudyRecord } from '@/types/study'

const EXAM_TOTAL = 40
const EXAM_MINUTES = 40

export function Exam() {
  const { exam, startExam, answer, toggleFlag, jump, next, prev, finish, reset } =
    useSessionStore()
  const [timeLeft, setTimeLeft] = useState(0)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  useEffect(() => {
    if (!exam) return
    const tick = () => {
      const left = Math.max(0, Math.floor((exam.endTime - Date.now()) / 1000))
      setTimeLeft(left)
      if (left === 0 && !exam.finished) finish()
    }
    tick()
    intervalRef.current = setInterval(tick, 1000)
    return () => { if (intervalRef.current) clearInterval(intervalRef.current) }
  }, [exam, finish])

  // Start exam
  async function handleStart() {
    const all = await db.questions.toArray()
    const singles = shuffle(all.filter((q) => q.type === 'single')).slice(0, 32)
    const multiples = shuffle(all.filter((q) => q.type === 'multiple')).slice(0, 8)
    startExam([...shuffle([...singles, ...multiples])], EXAM_MINUTES)
  }

  // Submit exam and persist records
  async function handleFinish() {
    if (!exam) return
    finish()
    const records: StudyRecord[] = exam.questions.map((q) => {
      const sel = exam.answers[q.id] ?? []
      const correct =
        q.answer_keys.length === sel.length &&
        q.answer_keys.every((k) => sel.includes(k))
      return {
        questionId: q.id,
        timestamp: Date.now(),
        isCorrect: (correct ? 1 : 0) as 0 | 1,
        mode: 'exam',
        selectedAnswers: sel,
      }
    })
    await db.records.bulkAdd(records)
  }

  // Score for results screen
  const score = exam?.finished
    ? exam.questions.filter((q) => {
        const sel = exam.answers[q.id] ?? []
        return (
          q.answer_keys.length === sel.length &&
          q.answer_keys.every((k) => sel.includes(k))
        )
      }).length
    : 0

  if (!exam) {
    return (
      <div className="mx-auto max-w-lg px-4 py-12 text-center space-y-6">
        <h1 className="text-2xl font-bold">模拟考试</h1>
        <div className="rounded-xl border bg-card p-6 text-sm text-muted-foreground space-y-2 text-left">
          <p>• 共 {EXAM_TOTAL} 题（32 单选 + 8 多选）</p>
          <p>• 限时 {EXAM_MINUTES} 分钟</p>
          <p>• 满分 100 分，80 分及格</p>
          <p>• 答题期间可标记疑难题，提交后查看结果</p>
        </div>
        <button
          onClick={handleStart}
          className="w-full rounded-xl bg-primary py-4 font-bold text-primary-foreground hover:bg-primary/90"
        >
          开始考试
        </button>
      </div>
    )
  }

  if (exam.finished) {
    const pct = Math.round((score / exam.questions.length) * 100)
    const pass = score >= 32
    return (
      <div className="mx-auto max-w-lg px-4 py-8 space-y-6">
        <div className={`rounded-xl border p-6 text-center ${pass ? 'border-green-500 bg-green-50 dark:bg-green-950/30' : 'border-red-500 bg-red-50 dark:bg-red-950/30'}`}>
          <div className="text-4xl font-bold mb-2">{pct} 分</div>
          <div className={`text-lg font-semibold ${pass ? 'text-green-600' : 'text-red-600'}`}>
            {pass ? '恭喜通过！' : '未通过，继续加油'}
          </div>
          <div className="mt-2 text-sm text-muted-foreground">
            答对 {score} / {exam.questions.length} 题
          </div>
        </div>

        {/* Review wrong answers */}
        <div className="space-y-4">
          <h2 className="font-semibold text-sm text-muted-foreground">错题回顾</h2>
          {exam.questions.map((q, i) => {
            const sel = exam.answers[q.id] ?? []
            const correct =
              q.answer_keys.length === sel.length && q.answer_keys.every((k) => sel.includes(k))
            if (correct) return null
            return (
              <QuestionCard
                key={q.id}
                question={q}
                selected={sel}
                onSelect={() => {}}
                submitted
                showAnswer
                index={i}
                total={exam.questions.length}
              />
            )
          })}
        </div>

        <button
          onClick={reset}
          className="w-full rounded-xl border py-3 text-sm hover:bg-muted"
        >
          再来一次
        </button>
      </div>
    )
  }

  const current = exam.questions[exam.currentIndex]
  const answered = Object.keys(exam.answers).length
  const flagged = exam.flags[current.id]

  return (
    <div className="mx-auto max-w-lg px-4 py-4 space-y-4">
      {/* Timer + progress */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-sm font-medium">
          <Clock className={`h-4 w-4 ${timeLeft < 300 ? 'text-red-500' : 'text-muted-foreground'}`} />
          <span className={timeLeft < 300 ? 'text-red-500 font-bold' : 'text-muted-foreground'}>
            {formatTime(timeLeft)}
          </span>
        </div>
        <span className="text-sm text-muted-foreground">已答 {answered}/{exam.questions.length}</span>
        <button
          onClick={() => toggleFlag(current.id)}
          className={`flex items-center gap-1 text-sm ${flagged ? 'text-yellow-500' : 'text-muted-foreground hover:text-foreground'}`}
        >
          <Flag className="h-4 w-4" />
          {flagged ? '已标记' : '标记'}
        </button>
      </div>

      {/* Question grid overview */}
      <div className="flex flex-wrap gap-1">
        {exam.questions.map((q, i) => (
          <button
            key={q.id}
            onClick={() => jump(i)}
            className={`h-6 w-6 rounded text-xs font-medium transition-colors ${
              i === exam.currentIndex
                ? 'bg-primary text-primary-foreground'
                : exam.flags[q.id]
                  ? 'bg-yellow-400 text-yellow-950'
                  : exam.answers[q.id]
                    ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100'
                    : 'bg-muted text-muted-foreground'
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>

      <QuestionCard
        question={current}
        selected={exam.answers[current.id] ?? []}
        onSelect={(key) => {
          const prev = exam.answers[current.id] ?? []
          if (current.type === 'single') {
            answer(current.id, [key])
          } else {
            answer(
              current.id,
              prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key],
            )
          }
        }}
        submitted={false}
        index={exam.currentIndex}
        total={exam.questions.length}
      />

      <div className="flex gap-3">
        <button
          onClick={prev}
          disabled={exam.currentIndex === 0}
          className="flex-1 rounded-lg border py-3 text-sm disabled:opacity-40 hover:bg-muted"
        >
          <ChevronLeft className="inline h-4 w-4" /> 上一题
        </button>
        {exam.currentIndex < exam.questions.length - 1 ? (
          <button
            onClick={next}
            className="flex-1 rounded-lg bg-primary py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90"
          >
            下一题 <ChevronRight className="inline h-4 w-4" />
          </button>
        ) : (
          <button
            onClick={handleFinish}
            className="flex-1 rounded-lg bg-green-600 py-3 text-sm font-bold text-white hover:bg-green-700"
          >
            提交考试
          </button>
        )}
      </div>
    </div>
  )
}
