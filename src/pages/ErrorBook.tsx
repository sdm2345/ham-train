import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useLiveQuery } from 'dexie-react-hooks'
import { BookOpen } from 'lucide-react'
import { db } from '@/db'
import { cn } from '@/lib/utils'
import { CATEGORIES } from '@/types/question'

type Tab = 'recent' | 'frequent' | 'byCategory'

export function ErrorBook() {
  const [tab, setTab] = useState<Tab>('recent')
  const navigate = useNavigate()

  const recentErrors = useLiveQuery(async () => {
    const records = await db.records
      .where('isCorrect')
      .equals(0)
      .reverse()
      .sortBy('timestamp')
    const seen = new Set<string>()
    const unique = records.filter((r) => {
      if (seen.has(r.questionId)) return false
      seen.add(r.questionId)
      return true
    })
    const ids = unique.slice(0, 50).map((r) => r.questionId)
    return db.questions.where('id').anyOf(ids).toArray()
  }, [])

  const frequentErrors = useLiveQuery(async () => {
    const records = await db.records.where('isCorrect').equals(0).toArray()
    const countMap: Record<string, number> = {}
    for (const r of records) {
      countMap[r.questionId] = (countMap[r.questionId] ?? 0) + 1
    }
    const sorted = Object.entries(countMap)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 50)
    const ids = sorted.map(([id]) => id)
    const questions = await db.questions.where('id').anyOf(ids).toArray()
    return sorted.map(([id, count]) => ({
      question: questions.find((q) => q.id === id)!,
      count,
    })).filter((x) => x.question)
  }, [])

  const categoryErrors = useLiveQuery(async () => {
    const records = await db.records.where('isCorrect').equals(0).toArray()
    const ids = [...new Set(records.map((r) => r.questionId))]
    const questions = await db.questions.where('id').anyOf(ids).toArray()
    const map: Record<string, number> = {}
    for (const q of questions) map[q.category] = (map[q.category] ?? 0) + 1
    return map
  }, [])

  const tabs: { key: Tab; label: string }[] = [
    { key: 'recent', label: '最近错题' },
    { key: 'frequent', label: '高频错题' },
    { key: 'byCategory', label: '按类别' },
  ]

  return (
    <div className="mx-auto max-w-lg px-4 py-4 space-y-4">
      <h1 className="text-lg font-bold">错题本</h1>

      {/* Tab bar */}
      <div className="flex border-b">
        {tabs.map(({ key, label }) => (
          <button
            key={key}
            onClick={() => setTab(key)}
            className={cn(
              'flex-1 py-2 text-sm font-medium transition-colors',
              tab === key
                ? 'border-b-2 border-primary text-primary'
                : 'text-muted-foreground hover:text-foreground',
            )}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Recent errors */}
      {tab === 'recent' && (
        <div className="space-y-2">
          {!recentErrors?.length && (
            <p className="py-8 text-center text-muted-foreground text-sm">暂无错题记录</p>
          )}
          {recentErrors?.map((q) => (
            <button
              key={q.id}
              onClick={() => navigate(`/practice?id=${q.id}`)}
              className="w-full text-left rounded-lg border bg-card p-3 hover:shadow-sm transition-all"
            >
              <div className="text-xs text-muted-foreground mb-1">{q.category.split('.').pop()} · {q.tag}</div>
              <div className="text-sm line-clamp-2">{q.question}</div>
              <div className="mt-1 text-xs text-primary">正确答案：{q.answer_keys.join('、')}</div>
            </button>
          ))}
        </div>
      )}

      {/* High frequency errors */}
      {tab === 'frequent' && (
        <div className="space-y-2">
          {!frequentErrors?.length && (
            <p className="py-8 text-center text-muted-foreground text-sm">暂无错题记录</p>
          )}
          {frequentErrors?.map(({ question: q, count }) => (
            <button
              key={q.id}
              onClick={() => navigate(`/practice?id=${q.id}`)}
              className="w-full text-left rounded-lg border bg-card p-3 hover:shadow-sm transition-all"
            >
              <div className="flex items-start justify-between gap-2">
                <div className="flex-1">
                  <div className="text-xs text-muted-foreground mb-1">{q.category.split('.').pop()} · {q.tag}</div>
                  <div className="text-sm line-clamp-2">{q.question}</div>
                </div>
                <span className="shrink-0 rounded-full bg-red-100 px-2 py-0.5 text-xs font-bold text-red-600 dark:bg-red-950 dark:text-red-400">
                  ×{count}
                </span>
              </div>
            </button>
          ))}
        </div>
      )}

      {/* By category */}
      {tab === 'byCategory' && (
        <div className="space-y-2">
          {CATEGORIES.map((cat) => {
            const count = categoryErrors?.[cat.key] ?? 0
            return (
              <button
                key={cat.key}
                disabled={count === 0}
                onClick={() => navigate(`/practice?category=${encodeURIComponent(cat.key)}&errorsOnly=1`)}
                className={cn(
                  'flex w-full items-center gap-3 rounded-lg border bg-card p-3 transition-all',
                  count > 0 ? 'hover:shadow-sm active:scale-95' : 'opacity-40 cursor-default',
                )}
              >
                <span className={cn('h-3 w-3 shrink-0 rounded-full', cat.color)} />
                <span className="flex-1 text-sm font-medium text-left">{cat.name}</span>
                {count > 0 ? (
                  <span className="rounded-full bg-red-100 px-2 py-0.5 text-xs font-bold text-red-600 dark:bg-red-950 dark:text-red-400">
                    {count} 题
                  </span>
                ) : (
                  <span className="text-xs text-muted-foreground flex items-center gap-1">
                    <BookOpen className="h-3 w-3" /> 全对
                  </span>
                )}
              </button>
            )
          })}
        </div>
      )}
    </div>
  )
}
