import { useSettingsStore, type FontSize } from '@/store/settings'
import { cn } from '@/lib/utils'

const labels: Record<FontSize, string> = { sm: '小', md: '中', lg: '大' }

export function FontSizeToggle() {
  const { fontSize, setFontSize } = useSettingsStore()
  return (
    <div className="flex items-center gap-0.5 rounded-lg border bg-background/80 px-1 py-0.5">
      {(['sm', 'md', 'lg'] as FontSize[]).map((s) => (
        <button
          key={s}
          onClick={() => setFontSize(s)}
          className={cn(
            'w-6 h-6 rounded text-xs font-medium transition-colors',
            fontSize === s
              ? 'bg-primary text-primary-foreground'
              : 'text-muted-foreground hover:text-foreground',
          )}
        >
          {labels[s]}
        </button>
      ))}
    </div>
  )
}
