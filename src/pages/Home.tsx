import { useNavigate } from 'react-router-dom'
import { BookOpen, ClipboardList, Shuffle, AlertCircle } from 'lucide-react'
import { CategoryCard } from '@/components/CategoryCard'
import { useStudyStats } from '@/hooks/useStudyStats'
import { CATEGORIES } from '@/types/question'

export function Home() {
  const navigate = useNavigate()
  const { totalByCategory, correctByCategory, todayCount, errorCount } = useStudyStats()

  const totalAll = totalByCategory
    ? Object.values(totalByCategory).reduce((s, n) => s + n, 0)
    : 0
  const correctAll = correctByCategory
    ? Object.values(correctByCategory).reduce((s, n) => s + n, 0)
    : 0

  return (
    <div className="mx-auto max-w-2xl px-4 py-6 space-y-6">
      {/* Stats header */}
      <div className="rounded-xl border bg-card p-4 shadow-sm">
        <h1 className="text-lg font-bold mb-3">业余无线电 A 证刷题</h1>
        <div className="flex gap-6 text-sm">
          <div>
            <span className="text-2xl font-bold text-primary">{todayCount ?? 0}</span>
            <span className="ml-1 text-muted-foreground">今日答题</span>
          </div>
          <div>
            <span className="text-2xl font-bold text-green-600">{correctAll}</span>
            <span className="ml-1 text-muted-foreground">/ {totalAll} 已掌握</span>
          </div>
        </div>
        {totalAll > 0 && (
          <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-muted">
            <div
              className="h-full rounded-full bg-green-500 transition-all"
              style={{ width: `${Math.round((correctAll / totalAll) * 100)}%` }}
            />
          </div>
        )}
      </div>

      {/* Error count banner */}
      {(errorCount ?? 0) > 0 && (
        <button
          onClick={() => navigate('/practice?errorsOnly=1')}
          className="flex w-full items-center justify-between rounded-xl border border-red-300/50 bg-red-50/60 dark:bg-red-950/20 dark:border-red-800/40 px-4 py-3 shadow-sm hover:bg-red-100/60 dark:hover:bg-red-950/30 transition-all active:scale-95"
        >
          <div className="flex items-center gap-3">
            <AlertCircle className="h-5 w-5 text-red-500" />
            <div className="text-left">
              <p className="text-sm font-semibold text-red-600 dark:text-red-400">错题练习</p>
              <p className="text-xs text-muted-foreground">
                有 <span className="font-bold text-red-500">{errorCount}</span> 道错题待攻克
              </p>
            </div>
          </div>
          <span className="text-xs text-red-500 font-medium">开始 →</span>
        </button>
      )}

      {/* Quick actions */}
      <div className="grid grid-cols-3 gap-3">
        <button
          onClick={() => navigate('/practice')}
          className="flex flex-col items-center gap-2 rounded-xl border bg-card p-4 shadow-sm hover:shadow-md transition-all active:scale-95"
        >
          <BookOpen className="h-6 w-6 text-primary" />
          <span className="text-xs font-medium">顺序练习</span>
        </button>
        <button
          onClick={() => navigate('/practice?shuffle=1')}
          className="flex flex-col items-center gap-2 rounded-xl border bg-card p-4 shadow-sm hover:shadow-md transition-all active:scale-95"
        >
          <Shuffle className="h-6 w-6 text-orange-500" />
          <span className="text-xs font-medium">随机练习</span>
        </button>
        <button
          onClick={() => navigate('/exam')}
          className="flex flex-col items-center gap-2 rounded-xl border bg-card p-4 shadow-sm hover:shadow-md transition-all active:scale-95"
        >
          <ClipboardList className="h-6 w-6 text-purple-500" />
          <span className="text-xs font-medium">模拟考试</span>
        </button>
      </div>

      {/* Category grid */}
      <div>
        <h2 className="text-sm font-semibold text-muted-foreground mb-3">按类别练习</h2>
        <div className="grid grid-cols-2 gap-3">
          {CATEGORIES.map((cat) => (
            <CategoryCard
              key={cat.key}
              name={cat.name}
              color={cat.color}
              total={totalByCategory?.[cat.key] ?? 0}
              correct={correctByCategory?.[cat.key] ?? 0}
              onClick={() => navigate(`/practice?category=${encodeURIComponent(cat.key)}`)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
