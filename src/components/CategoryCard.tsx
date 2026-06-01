import { cn } from '@/lib/utils'

interface Props {
  name: string
  color: string
  total: number
  correct: number
  onClick: () => void
}

export function CategoryCard({ name, color, total, correct, onClick }: Props) {
  const pct = total > 0 ? Math.round((correct / total) * 100) : 0

  return (
    <button
      onClick={onClick}
      className="flex flex-col gap-2 rounded-xl border bg-card p-4 text-left shadow-sm transition-all hover:shadow-md active:scale-95"
    >
      <div className="flex items-center gap-2">
        <span className={cn('h-3 w-3 rounded-full', color)} />
        <span className="text-sm font-semibold">{name}</span>
      </div>
      <div className="text-xs text-muted-foreground">
        {correct}/{total} 题已掌握
      </div>
      <div className="h-1.5 w-full overflow-hidden rounded-full bg-muted">
        <div
          className={cn('h-full rounded-full transition-all', color)}
          style={{ width: `${pct}%` }}
        />
      </div>
      <div className="text-right text-xs font-medium">{pct}%</div>
    </button>
  )
}
