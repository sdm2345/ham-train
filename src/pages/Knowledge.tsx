import { useState } from 'react'
import { Zap, Scale, Radio, ChevronRight, ArrowLeft, Star } from 'lucide-react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { cn } from '@/lib/utils'
import { getKnowledge } from '@/lib/knowledge'

const ENTRIES = [
  { key: 'freq',   Icon: Zap,   desc: '频谱划分、业余波段、功率限制', hot: true  },
  { key: 'law',    Icon: Scale, desc: '执照、法规层级、操作规范',     hot: true  },
  { key: 'qcode',  Icon: Radio, desc: 'Q简语速查、易混淆对比、CW操作', hot: true  },
]

export default function Knowledge() {
  const [active, setActive] = useState<string | null>(null)

  const entry = active ? getKnowledge(active) : null
  const meta  = ENTRIES.find(e => e.key === active)

  return (
    <div className="mx-auto max-w-2xl px-4 pt-4 pb-4">
      {entry && meta ? (
        <>
          <button
            onClick={() => setActive(null)}
            className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground mb-4 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            知识库
          </button>
          <div className="flex items-center gap-2 mb-5">
            <meta.Icon className={cn('h-5 w-5', meta.hot ? 'text-amber-500' : 'text-muted-foreground')} />
            <h1 className="text-lg font-bold">{entry.title}</h1>
          </div>
          <div className="prose prose-sm dark:prose-invert max-w-none
            [&_table]:w-full [&_table]:text-xs [&_table]:border-collapse
            [&_th]:border [&_th]:border-border [&_th]:bg-muted/60 [&_th]:px-2 [&_th]:py-1.5 [&_th]:text-left [&_th]:font-semibold
            [&_td]:border [&_td]:border-border [&_td]:px-2 [&_td]:py-1.5
            [&_tr:nth-child(even)_td]:bg-muted/30
            [&_h2]:text-base [&_h2]:font-bold [&_h2]:mt-5 [&_h2]:mb-2 [&_h2]:border-b [&_h2]:pb-1
            [&_p]:my-1.5 [&_p]:text-sm
            [&_li]:text-sm [&_ul]:pl-5 [&_ul]:space-y-1
            [&_code]:bg-muted [&_code]:px-1 [&_code]:rounded [&_code]:text-xs
            [&_strong]:font-semibold
          ">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {entry.content}
            </ReactMarkdown>
          </div>
        </>
      ) : (
        <>
          <h1 className="text-lg font-bold mb-4">知识库</h1>
          <div className="space-y-2">
            {ENTRIES.map(({ key, Icon, desc, hot }) => {
              const info = getKnowledge(key)
              return (
                <button
                  key={key}
                  onClick={() => setActive(key)}
                  className="w-full flex items-center gap-4 rounded-xl border bg-card px-4 py-4 text-left transition-colors hover:bg-muted/50 active:bg-muted"
                >
                  <div className={cn('flex h-10 w-10 shrink-0 items-center justify-center rounded-xl', hot ? 'bg-amber-50 dark:bg-amber-950/30' : 'bg-muted')}>
                    <Icon className={cn('h-5 w-5', hot ? 'text-amber-500' : 'text-muted-foreground')} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1.5">
                      {hot && <Star className="h-3 w-3 fill-amber-400 text-amber-400 shrink-0" />}
                      <span className="font-semibold text-sm">{info?.title ?? key}</span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-0.5 truncate">{desc}</p>
                  </div>
                  <ChevronRight className="h-4 w-4 text-muted-foreground shrink-0" />
                </button>
              )
            })}
          </div>
        </>
      )}
    </div>
  )
}
