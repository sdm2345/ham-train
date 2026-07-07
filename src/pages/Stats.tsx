import { useState, useEffect, useCallback, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { db } from '@/db'
import { CATEGORIES } from '@/types/question'
import type { Question } from '@/types/question'
import type { StudyRecord } from '@/types/study'
import { cn } from '@/lib/utils'

// ── layout constants ──────────────────────────────────────────────────────────
const CELL    = 4                                   // px per cell
const CGAP    = 1                                   // gap between cells
const MAX_ATT = 8                                   // max attempts shown
const ROW_H   = 8                                   // px per question row
const HEADER_H= 12                                  // column header height
const CELLS_W = MAX_ATT * (CELL + CGAP) - CGAP     // 39px: 8 cells + 7 gaps
const BAR_W   = 14                                  // accuracy bar width
const BAR_H   = 3
const STRIP_W = CELLS_W + 2 + BAR_W                // 55px: cells + gap + bar
const COL_GAP = 5                                   // gap between columns
const COL_W   = STRIP_W + COL_GAP                  // 60px per column slot

interface Attempt {
  isCorrect: 0 | 1
  timestamp: number
  timeSpent?: number
}
interface QStat {
  question: Question
  attempts: Attempt[]
  accuracy: number
}
interface Tip {
  x: number
  y: number
  lines: string[]
}

function fmtDate(ts: number) {
  const d = new Date(ts)
  return `${d.getMonth() + 1}/${d.getDate()}`
}
function fmtTime(ms?: number) {
  if (ms == null) return '-'
  return ms < 1000 ? `${ms}ms` : `${(ms / 1000).toFixed(1)}s`
}

// ── multi-column heatmap SVG ──────────────────────────────────────────────────
interface HeatmapProps {
  stats: QStat[]
  width: number
  onNavigate: (id: string) => void
  onTip: (t: Tip | null) => void
}

function HeatmapSVG({ stats, width, onNavigate, onTip }: HeatmapProps) {
  const cols = Math.max(1, Math.floor(width / COL_W))
  const qpc  = Math.ceil(stats.length / cols)   // questions per column
  const svgW = cols * COL_W - COL_GAP           // trim trailing gap
  const svgH = HEADER_H + qpc * ROW_H

  return (
    <svg
      width={svgW}
      height={svgH}
      viewBox={`0 0 ${svgW} ${svgH}`}
      style={{ display: 'block' }}
    >
      {/* header label on first column only */}
      <text x={0} y={9} fontSize={6} fill="var(--color-muted-foreground,#9ca3af)">
        最近{MAX_ATT}次
      </text>

      {stats.map((stat, idx) => {
        const col  = Math.floor(idx / qpc)
        const row  = idx % qpc
        const ox   = col * COL_W          // column origin x
        const oy   = HEADER_H + row * ROW_H
        const cy   = oy + (ROW_H - CELL) / 2

        return (
          <g
            key={stat.question.id}
            style={{ cursor: 'pointer' }}
            onClick={() => onNavigate(stat.question.id)}
            onMouseEnter={(e) => {
              const acc = stat.attempts.length > 0
                ? `正确率 ${Math.round(stat.accuracy * 100)}%`
                : '未作答'
              onTip({ x: e.clientX, y: e.clientY, lines: [stat.question.id, acc] })
            }}
            onMouseLeave={() => onTip(null)}
          >
            {/* invisible hit area */}
            <rect x={ox} y={oy} width={STRIP_W} height={ROW_H} fill="transparent" />

            {/* attempt cells */}
            {Array.from({ length: MAX_ATT }, (_, ci) => {
              const att  = stat.attempts[ci]
              const cx   = ox + ci * (CELL + CGAP)
              const fill = att == null
                ? 'var(--cell-empty,#e2e8f0)'
                : att.isCorrect === 1 ? '#22c55e' : '#ef4444'
              return (
                <rect
                  key={ci}
                  x={cx} y={cy}
                  width={CELL} height={CELL}
                  rx={0.5} fill={fill}
                  onMouseEnter={(e) => {
                    e.stopPropagation()
                    if (!att) return
                    onTip({
                      x: e.clientX,
                      y: e.clientY,
                      lines: [
                        stat.question.id,
                        `第${ci + 1}次 · ${fmtDate(att.timestamp)} · ${att.isCorrect === 1 ? '✓' : '✗'} · ${fmtTime(att.timeSpent)}`,
                      ],
                    })
                  }}
                />
              )
            })}

            {/* accuracy bar */}
            <rect
              x={ox + CELLS_W + 2} y={oy + (ROW_H - BAR_H) / 2}
              width={BAR_W} height={BAR_H} rx={1}
              fill="var(--cell-empty,#e2e8f0)"
            />
            {stat.accuracy > 0 && (
              <rect
                x={ox + CELLS_W + 2} y={oy + (ROW_H - BAR_H) / 2}
                width={Math.round(BAR_W * stat.accuracy)} height={BAR_H} rx={1}
                fill="#22c55e"
              />
            )}
          </g>
        )
      })}
    </svg>
  )
}

// ── mastery summary bar ───────────────────────────────────────────────────────
function MasterySummary({ stats }: { stats: QStat[] }) {
  const total   = stats.length
  const answered= stats.filter(s => s.attempts.length > 0).length
  const correct = stats.reduce((n, s) => n + (s.attempts.at(-1)?.isCorrect === 1 ? 1 : 0), 0)
  const wrong   = answered - correct
  const acc     = answered > 0 ? Math.round(correct / answered * 100) : 0
  const cp      = total > 0 ? correct / total * 100 : 0
  const wp      = total > 0 ? wrong   / total * 100 : 0

  return (
    <div className="px-4 py-2 bg-card border-b flex items-center gap-3 text-xs flex-wrap">
      <span className="text-muted-foreground">总 <b className="text-foreground">{total}</b></span>
      <span className="text-muted-foreground">已答 <b className="text-foreground">{answered}</b></span>
      <span className="text-muted-foreground">答对 <b style={{ color: '#22c55e' }}>{correct}</b></span>
      <span className="text-muted-foreground">正确率 <b className="text-foreground">{acc}%</b></span>
      <span className="text-muted-foreground">未答 <b className="text-foreground">{total - answered}</b></span>
      <div className="flex-1 min-w-16 h-1.5 rounded-full overflow-hidden flex bg-muted">
        {cp > 0 && <div className="h-full" style={{ width: `${cp}%`, backgroundColor: '#22c55e' }} />}
        {wp > 0 && <div className="h-full" style={{ width: `${wp}%`, backgroundColor: '#f97316' }} />}
      </div>
    </div>
  )
}

// ── main page ─────────────────────────────────────────────────────────────────
export default function Stats() {
  const navigate     = useNavigate()
  const [selectedCat, setSelectedCat] = useState('全部')
  const [statsByCat,  setStatsByCat]  = useState<Map<string, QStat[]>>(new Map())
  const [loading,     setLoading]     = useState(true)
  const [tip,         setTip]         = useState<Tip | null>(null)
  const containerRef  = useRef<HTMLDivElement>(null)
  const [containerW,  setContainerW]  = useState(360)

  // ResizeObserver: measure available width
  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const ro = new ResizeObserver(([entry]) => setContainerW(entry.contentRect.width))
    ro.observe(el)
    setContainerW(el.clientWidth)
    return () => ro.disconnect()
  }, [])

  const loadData = useCallback(async (category: string) => {
    setLoading(true)
    const cats   = category === '全部' ? CATEGORIES.map(c => c.key) : [category]
    const newMap = new Map<string, QStat[]>()

    for (const cat of cats) {
      const questions = await db.questions.where('category').equals(cat).toArray()
      questions.sort((a, b) => a.id.localeCompare(b.id, undefined, { numeric: true }))
      const ids     = questions.map(q => q.id)
      const records: StudyRecord[] = await db.records
        .where('questionId').anyOf(ids).sortBy('timestamp')

      const recMap = new Map<string, StudyRecord[]>()
      for (const r of records) {
        const arr = recMap.get(r.questionId) ?? []
        arr.push(r)
        recMap.set(r.questionId, arr)
      }

      newMap.set(cat, questions.map(q => {
        const all = (recMap.get(q.id) ?? []).map(r => ({
          isCorrect: r.isCorrect,
          timestamp: r.timestamp,
          timeSpent: r.timeSpent,
        }))
        const last8   = all.slice(-MAX_ATT)
        const correct = last8.filter(a => a.isCorrect === 1).length
        return {
          question: q,
          attempts: last8,
          accuracy: last8.length > 0 ? correct / last8.length : 0,
        }
      }))
    }

    setStatsByCat(newMap)
    setLoading(false)
  }, [])

  useEffect(() => { loadData(selectedCat) }, [selectedCat, loadData])

  const handleNavigate = useCallback(
    (id: string) => navigate(`/practice?id=${encodeURIComponent(id)}`),
    [navigate],
  )

  const allStats   = [...statsByCat.values()].flat()
  const displayCats= selectedCat === '全部'
    ? CATEGORIES.map(c => c.key)
    : [selectedCat]

  return (
    <div className="flex flex-col h-full bg-background">
      {/* category chips */}
      <div className="sticky top-0 z-10 bg-background border-b">
        <div className="flex gap-1.5 px-3 py-2 overflow-x-auto">
          {['全部', ...CATEGORIES.map(c => c.name)].map((label, idx) => {
            const key      = idx === 0 ? '全部' : CATEGORIES[idx - 1].key
            const isActive = selectedCat === key
            const catStats = key === '全部'
              ? [...statsByCat.values()].flat()
              : (statsByCat.get(key) ?? [])
            const total   = catStats.length
            const correct = catStats.reduce((n, s) => n + (s.attempts.at(-1)?.isCorrect === 1 ? 1 : 0), 0)
            const pct     = total > 0 ? correct / total * 100 : 0

            return (
              <button
                key={key}
                onClick={() => setSelectedCat(key)}
                className={cn(
                  'relative shrink-0 px-2.5 py-1.5 rounded-lg text-xs font-medium transition-colors whitespace-nowrap overflow-hidden text-left min-w-[52px]',
                  isActive
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted text-muted-foreground hover:text-foreground',
                )}
              >
                {/* progress fill — behind text */}
                {pct > 0 && (
                  <span
                    className="absolute inset-y-0 left-0 transition-all"
                    style={{
                      width: `${pct}%`,
                      backgroundColor: isActive ? 'rgba(255,255,255,0.18)' : '#22c55e28',
                    }}
                  />
                )}
                <span className="relative flex flex-col leading-tight">
                  <span>{label}</span>
                  <span className={cn('text-[9px] mt-0.5', isActive ? 'opacity-80' : 'opacity-60')}>
                    {total > 0 ? `${total}题 ${Math.round(pct)}%` : '—'}
                  </span>
                </span>
              </button>
            )
          })}
        </div>
      </div>

      {loading ? (
        <div className="flex-1 flex items-center justify-center text-muted-foreground">加载中…</div>
      ) : (
        <>
          <MasterySummary stats={allStats} />

          {/* fixed tooltip */}
          {tip && (
            <div
              className="fixed z-50 pointer-events-none bg-popover border rounded px-2 py-1 text-xs shadow-lg"
              style={{ left: tip.x + 12, top: tip.y - 8 }}
            >
              {tip.lines.map((l, i) => <div key={i}>{l}</div>)}
            </div>
          )}

          <div className="flex-1 overflow-y-auto pb-8" ref={containerRef}>
            {displayCats.map(catKey => {
              const stats   = statsByCat.get(catKey) ?? []
              const catMeta = CATEGORIES.find(c => c.key === catKey)
              // usable width = container minus px-4 padding on both sides
              const usableW = Math.max(60, containerW - 32)
              const cols    = Math.max(1, Math.floor(usableW / COL_W))

              return (
                <div key={catKey} className="mb-3">
                  {selectedCat === '全部' && (
                    <div className="flex items-center gap-2 px-4 pt-2 pb-1">
                      <span className={cn('w-2 h-2 rounded-full shrink-0', catMeta?.color ?? 'bg-muted')} />
                      <span className="text-xs font-semibold">{catMeta?.name}</span>
                      <span className="text-xs text-muted-foreground">({stats.length} 题)</span>
                      <span className="text-xs text-muted-foreground">· {cols} 列</span>
                    </div>
                  )}
                  <div className="px-4">
                    <HeatmapSVG
                      stats={stats}
                      width={usableW}
                      onNavigate={handleNavigate}
                      onTip={setTip}
                    />
                  </div>
                </div>
              )
            })}
          </div>
        </>
      )}
    </div>
  )
}
