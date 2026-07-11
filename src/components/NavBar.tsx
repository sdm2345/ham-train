import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Home, BookOpen, ClipboardList, AlertCircle, BarChart2, BookText, Settings, X, Trash2, List } from 'lucide-react'
import { cn } from '@/lib/utils'
import { FontSizeToggle } from './FontSizeToggle'
import { db } from '@/db'
import { markSkipped } from '@/lib/srs'
import type { Question } from '@/types/question'

// 41 questions removed in v20250728 — study records for these are stale
const REMOVED_IDS = [
  'A-59','A-87','A-100','A-128','A-140','A-155','A-166','A-170','A-174','A-178',
  'A-204','A-208','A-212','A-216','A-220','A-224','A-253','A-265','A-269','A-312',
  'A-334','A-347','A-365','A-377','A-386','A-394','A-398','A-423','A-436','A-510',
  'A-536','A-547','A-572','A-576','A-580','A-597','A-619','A-641','A-645','A-675','A-683',
]

async function cleanObsoleteRecords() {
  const recordIds = await db.records
    .where('questionId').anyOf(REMOVED_IDS)
    .primaryKeys()
  const srsIds = await db.srs_cards
    .where('questionId').anyOf(REMOVED_IDS)
    .primaryKeys()
  await db.records.bulkDelete(recordIds as number[])
  await db.srs_cards.bulkDelete(srsIds as number[])
  return { records: recordIds.length, srsCards: srsIds.length }
}

const tabs = [
  { to: '/', label: '首页', Icon: Home },
  { to: '/practice', label: '练习', Icon: BookOpen },
  { to: '/exam', label: '考试', Icon: ClipboardList },
  { to: '/errors', label: '错题本', Icon: AlertCircle },
  { to: '/stats', label: '统计', Icon: BarChart2 },
  { to: '/knowledge', label: '知识', Icon: BookText },
]

export function NavBar() {
  const [open, setOpen] = useState(false)
  const [cleaning, setCleaning] = useState(false)
  const [cleanResult, setCleanResult] = useState<{ records: number; srsCards: number } | null>(null)
  const [skipListOpen, setSkipListOpen] = useState(false)
  const [skipList, setSkipList] = useState<Array<{ questionId: string; question: Question | undefined }>>([])
  const [skipListLoading, setSkipListLoading] = useState(false)

  async function openSkipList() {
    setSkipListOpen(true)
    setSkipListLoading(true)
    try {
      const cards = await db.srs_cards.filter((c) => c.skipped === true).toArray()
      const ids = cards.map((c) => c.questionId)
      const questions = await db.questions.where('id').anyOf(ids).toArray()
      const qMap = new Map(questions.map((q) => [q.id, q]))
      setSkipList(cards.map((c) => ({ questionId: c.questionId, question: qMap.get(c.questionId) })))
    } finally {
      setSkipListLoading(false)
    }
  }

  async function removeFromSkipList(questionId: string) {
    await markSkipped(questionId, false)
    setSkipList((prev) => prev.filter((item) => item.questionId !== questionId))
  }

  async function handleClean() {
    setCleaning(true)
    setCleanResult(null)
    try {
      const result = await cleanObsoleteRecords()
      setCleanResult(result)
    } finally {
      setCleaning(false)
    }
  }

  return (
    <>
      <nav className="fixed bottom-0 left-0 right-0 z-50 border-t bg-background/95 backdrop-blur">
        <div className="mx-auto flex max-w-2xl items-center">
          {tabs.map(({ to, label, Icon }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) =>
                cn(
                  'flex flex-1 flex-col items-center gap-1 py-2 text-xs transition-colors',
                  isActive ? 'text-primary' : 'text-muted-foreground hover:text-foreground',
                )
              }
            >
              <Icon className="h-5 w-5" />
              {label}
            </NavLink>
          ))}
          <button
            onClick={() => { setOpen(true); setCleanResult(null) }}
            className="flex flex-col items-center gap-1 px-2 py-2 text-xs text-muted-foreground hover:text-foreground transition-colors"
            aria-label="设置"
          >
            <Settings className="h-5 w-5" />
            <span>设置</span>
          </button>
        </div>
      </nav>

      {open && (
        <div
          className="fixed inset-0 z-[60] flex items-end justify-center bg-black/40"
          onClick={() => setOpen(false)}
        >
          <div
            className="w-full max-w-md rounded-t-2xl bg-background border-t border-x p-6 pb-10 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-5">
              <span className="font-semibold text-base">设置</span>
              <button onClick={() => setOpen(false)} className="text-muted-foreground hover:text-foreground">
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Font size */}
            <div className="flex items-center justify-between mb-5">
              <span className="text-sm text-muted-foreground">字体大小</span>
              <FontSizeToggle />
            </div>

            {/* Skip list */}
            <div className="border-t mb-5 mt-0" />
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm font-medium">免做清单</div>
                <div className="text-xs text-muted-foreground mt-0.5">查看并管理标记为"免做"的题目</div>
              </div>
              <button
                onClick={openSkipList}
                className="flex items-center gap-1.5 rounded-lg px-3 py-2 text-xs font-medium shrink-0 bg-muted hover:bg-muted/80 transition-colors"
              >
                <List className="h-3.5 w-3.5" />
                查看清单
              </button>
            </div>

            {/* Divider */}
            <div className="border-t mb-5 mt-5" />

            {/* Clean obsolete records */}
            <div className="space-y-2">
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-medium">清理旧版题目记录</div>
                  <div className="text-xs text-muted-foreground mt-0.5">
                    题库 v20250728 删除了 41 道旧题，清理这些题的答题记录和 SRS 复习卡，避免干扰统计数据。
                  </div>
                </div>
                <button
                  onClick={handleClean}
                  disabled={cleaning}
                  className={cn(
                    'flex items-center gap-1.5 rounded-lg px-3 py-2 text-xs font-medium shrink-0 transition-colors',
                    cleaning
                      ? 'bg-muted text-muted-foreground cursor-not-allowed'
                      : 'bg-red-50 text-red-600 hover:bg-red-100 dark:bg-red-950/30 dark:text-red-400 dark:hover:bg-red-950/50',
                  )}
                >
                  <Trash2 className="h-3.5 w-3.5" />
                  {cleaning ? '清理中…' : '清理'}
                </button>
              </div>
              {cleanResult && (
                <div className="rounded-lg bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 px-3 py-2 text-xs text-green-700 dark:text-green-400">
                  {cleanResult.records + cleanResult.srsCards === 0
                    ? '无旧题记录，无需清理。'
                    : `已清理：答题记录 ${cleanResult.records} 条，复习卡 ${cleanResult.srsCards} 张。`}
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Skip list modal */}
      {skipListOpen && (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-black/50"
          onClick={() => setSkipListOpen(false)}
        >
          <div
            className="bg-background rounded-xl border shadow-xl w-full max-w-md mx-4 max-h-[80vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-4 border-b shrink-0">
              <span className="font-semibold text-base">免做清单</span>
              <button onClick={() => setSkipListOpen(false)} className="text-muted-foreground hover:text-foreground">
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="overflow-y-auto flex-1 p-2">
              {skipListLoading ? (
                <div className="py-8 text-center text-sm text-muted-foreground">加载中…</div>
              ) : skipList.length === 0 ? (
                <div className="py-8 text-center text-sm text-muted-foreground">暂无免做题目</div>
              ) : (
                <ul className="space-y-1">
                  {skipList.map(({ questionId, question }) => (
                    <li key={questionId} className="flex items-start gap-2 rounded-lg px-3 py-2 hover:bg-muted">
                      <div className="flex-1 min-w-0">
                        <span className="text-xs text-muted-foreground font-mono">{questionId}</span>
                        <p className="text-sm line-clamp-2 mt-0.5">{question?.question ?? '(题目未找到)'}</p>
                      </div>
                      <button
                        onClick={() => removeFromSkipList(questionId)}
                        className="shrink-0 mt-0.5 rounded-md p-1 text-muted-foreground hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-950/30 transition-colors"
                        title="移出免做清单"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div className="p-3 border-t shrink-0 text-xs text-muted-foreground text-center">
              共 {skipList.length} 道题  ·  点击删除图标可恢复复习
            </div>
          </div>
        </div>
      )}
    </>
  )
}
