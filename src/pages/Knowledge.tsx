import { useState } from 'react'
import { Zap, Scale, ChevronDown, ChevronUp, Star } from 'lucide-react'
import { cn } from '@/lib/utils'

// ─── Spectrum data ─────────────────────────────────────────────────────────────
const SPECTRUM = [
  { label: 'VLF\n3-30kHz', abbr: 'VLF', band: '万米波', amateur: '', hot: false },
  { label: 'LF\n30-300kHz', abbr: 'LF', band: '千米波', amateur: '135.7-137.8 kHz ★', hot: true },
  { label: 'MF\n300k-3MHz', abbr: 'MF', band: '百米波', amateur: '1.8-2 MHz ★', hot: true },
  { label: 'HF\n3-30MHz', abbr: 'HF', band: '十米波', amateur: '3.5/7/10/14/18/21/24/28 MHz', hot: true },
  { label: 'VHF\n30-300MHz', abbr: 'VHF', band: '米波', amateur: '50-54 / 144-148 MHz ★', hot: true },
  { label: 'UHF\n300M-3GHz', abbr: 'UHF', band: '分米波', amateur: '430-440 MHz ★★', hot: true },
  { label: 'SHF\n3-30GHz', abbr: 'SHF', band: '厘米波', amateur: '2.3G / 5.65G / 10G', hot: false },
  { label: 'EHF\n>30GHz', abbr: 'EHF', band: '毫米波', amateur: '24G / 47G / 241G', hot: false },
]

// ─── Amateur band table ────────────────────────────────────────────────────────
const BANDS = [
  { name: '160米', freq: '1.8-2 MHz', power: 'A类25W', abc: 'A', note: '主要业务', hot: false },
  { name: '80米', freq: '3.5-3.9 MHz', power: 'A类25W', abc: 'A', note: '主要业务', hot: false },
  { name: '40米★', freq: '7.0-7.2 MHz', power: 'A类25W', abc: 'A', note: '主要业务(ITU三区)', hot: true },
  { name: '30米', freq: '10.1-10.15 MHz', power: 'A类25W', abc: 'A', note: '次要业务', hot: false },
  { name: '20米★★', freq: '14.0-14.35 MHz', power: 'A类25W', abc: 'A', note: '主要业务', hot: true },
  { name: '17米', freq: '18.068-18.168 MHz', power: 'A类25W', abc: 'A', note: '主要业务', hot: false },
  { name: '15米', freq: '21.0-21.45 MHz', power: 'A类25W', abc: 'A', note: '主要业务', hot: false },
  { name: '12米', freq: '24.89-24.99 MHz', power: 'A类25W', abc: 'A', note: '主要业务', hot: false },
  { name: '10米', freq: '28-29.7 MHz', power: 'A类25W', abc: 'A', note: '主要业务', hot: false },
  { name: '6米★', freq: '50-54 MHz', power: 'A类25W', abc: 'A', note: '主要业务', hot: true },
  { name: '2米★★', freq: '144-148 MHz', power: 'A类25W', abc: 'A', note: '主要业务', hot: true },
  { name: '70厘米★★', freq: '430-440 MHz', power: 'A/B/C类10W', abc: 'ABC', note: '次要业务', hot: true },
  { name: '23厘米', freq: '1240-1300 MHz', power: '10W', abc: 'ABC', note: '次要业务', hot: false },
  { name: '13厘米', freq: '2300-2450 MHz', power: '10W', abc: 'ABC', note: '次要业务', hot: false },
]

// ─── Law highlights ────────────────────────────────────────────────────────────
const LAW_GROUPS = [
  {
    title: '许可证 & 执照',
    hot: true,
    points: [
      { text: 'A类：仅限 430MHz以下频段，最大发射功率 25W（短波）/ 10W（VHF/UHF）', hot: true },
      { text: 'B/C类：可使用 430-440MHz，最大 10W', hot: true },
      { text: '操作证书由中国无线电运动协会（CRSA）颁发', hot: false },
      { text: '无线电台执照由工业和信息化部（工信部）颁发', hot: true },
      { text: '执照有效期：3年（定期审验）', hot: true },
    ],
  },
  {
    title: '法规层级',
    hot: true,
    points: [
      { text: '法律：《无线电管理条例》（国务院＋中央军委联合发布，行政法规）★★', hot: true },
      { text: '部门规章：《业余无线电台管理办法》（工信部）', hot: true },
      { text: '业余电台不得用于商业通信，不得传递与业余业务无关内容', hot: false },
      { text: '设置业余中继台需单独申请执照', hot: true },
    ],
  },
  {
    title: '频率使用原则',
    hot: true,
    points: [
      { text: '主要业务 > 次要业务：次要业务不得干扰主要业务', hot: true },
      { text: '划分→分配→指配（三级体系）★★', hot: true },
      { text: '禁止发射无意义信号、音乐、广播节目', hot: false },
      { text: 'IARU信标频率：禁止在±500Hz范围内发射', hot: true },
    ],
  },
  {
    title: '中继台规定',
    hot: false,
    points: [
      { text: '144MHz中继收发频差：600kHz', hot: true },
      { text: '430MHz中继收发频差：5MHz', hot: true },
      { text: '中继台必须具备自动关机保护功能', hot: false },
    ],
  },
  {
    title: '边带规则★',
    hot: true,
    points: [
      { text: '10.1MHz以下 → LSB（下边带）', hot: true },
      { text: '10.1MHz以上（含10.1）→ USB（上边带）', hot: true },
      { text: 'VHF/UHF SSB → USB', hot: false },
    ],
  },
]

// ─── Component helpers ─────────────────────────────────────────────────────────
function SectionHeader({ title, hot, collapsed, onToggle }: { title: string; hot: boolean; collapsed: boolean; onToggle: () => void }) {
  return (
    <button
      onClick={onToggle}
      className="w-full flex items-center justify-between py-2 text-left"
    >
      <span className="flex items-center gap-1.5 font-semibold text-sm">
        {hot && <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />}
        {title}
      </span>
      {collapsed ? <ChevronDown className="h-4 w-4 text-muted-foreground" /> : <ChevronUp className="h-4 w-4 text-muted-foreground" />}
    </button>
  )
}

// ─── Spectrum bar chart ────────────────────────────────────────────────────────
function SpectrumChart() {
  const colors = ['#6366f1', '#8b5cf6', '#a855f7', '#ec4899', '#f43f5e', '#f97316', '#84cc16', '#14b8a6']
  return (
    <div>
      <div className="text-xs font-semibold mb-2 text-muted-foreground">无线电频谱概览（对数刻度）</div>
      <div className="flex rounded-xl overflow-hidden border border-border h-10">
        {SPECTRUM.map((s, i) => (
          <div
            key={s.abbr}
            className={cn('flex-1 flex items-center justify-center text-[10px] font-bold text-white transition-all cursor-default', s.hot && 'ring-2 ring-inset ring-white/50')}
            style={{ backgroundColor: colors[i] }}
            title={`${s.abbr}\n${s.amateur}`}
          >
            {s.abbr}
          </div>
        ))}
      </div>
      <div className="flex mt-1">
        {SPECTRUM.map((s) => (
          <div key={s.abbr} className="flex-1 text-center text-[9px] text-muted-foreground leading-tight truncate px-0.5">
            {s.band}
          </div>
        ))}
      </div>
    </div>
  )
}

// ─── Frequency knowledge ──────────────────────────────────────────────────────
function FrequencyKnowledge() {
  const [openBands, setOpenBands] = useState(true)
  const [openSpec, setOpenSpec] = useState(true)

  return (
    <div className="space-y-4">
      {/* Spectrum bar */}
      <div className="rounded-xl border bg-card p-4">
        <SpectrumChart />
      </div>

      {/* Spectrum detail list */}
      <div className="rounded-xl border bg-card divide-y">
        <SectionHeader title="各频段业余分配" hot={true} collapsed={!openSpec} onToggle={() => setOpenSpec(v => !v)} />
        {openSpec && (
          <div className="pt-1 pb-2">
            {SPECTRUM.map((s) => (
              <div key={s.abbr} className={cn('flex gap-2 items-start px-3 py-1.5 text-xs', s.hot && 'bg-amber-50 dark:bg-amber-950/20')}>
                <span className={cn('w-10 shrink-0 font-bold', s.hot ? 'text-amber-600 dark:text-amber-400' : 'text-muted-foreground')}>{s.abbr}</span>
                <span className="text-muted-foreground w-16 shrink-0">{s.band}</span>
                <span className={cn('flex-1', s.hot && 'font-medium')}>{s.amateur || <span className="text-muted-foreground/50">-</span>}</span>
                {s.hot && <Star className="h-3 w-3 shrink-0 fill-amber-400 text-amber-400 mt-0.5" />}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Band table */}
      <div className="rounded-xl border bg-card divide-y">
        <SectionHeader title="业余波段速查表" hot={true} collapsed={!openBands} onToggle={() => setOpenBands(v => !v)} />
        {openBands && (
          <div className="overflow-x-auto">
            <table className="w-full text-xs">
              <thead>
                <tr className="bg-muted/50 text-muted-foreground">
                  <th className="px-3 py-2 text-left font-medium">波段</th>
                  <th className="px-2 py-2 text-left font-medium">频率</th>
                  <th className="px-2 py-2 text-left font-medium">最大功率</th>
                  <th className="px-2 py-2 text-left font-medium">地位</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {BANDS.map((b) => (
                  <tr key={b.name} className={cn('transition-colors', b.hot ? 'bg-amber-50 dark:bg-amber-950/20' : '')}>
                    <td className={cn('px-3 py-2 font-semibold', b.hot ? 'text-amber-700 dark:text-amber-300' : '')}>{b.name}</td>
                    <td className="px-2 py-2 font-mono text-[11px]">{b.freq}</td>
                    <td className="px-2 py-2">{b.power}</td>
                    <td className={cn('px-2 py-2', b.note.includes('次要') ? 'text-muted-foreground' : 'text-green-700 dark:text-green-400')}>{b.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Memory tips */}
      <div className="rounded-xl border border-blue-200 bg-blue-50 dark:border-blue-800 dark:bg-blue-950/30 p-4 text-xs space-y-2">
        <div className="font-semibold text-blue-700 dark:text-blue-400 mb-2">🧠 频率记忆口诀</div>
        <p><strong>ABC三类区别</strong>：A类限短波（25W），B/C类可用430MHz（10W）</p>
        <p><strong>波段名称</strong>：频率越低 → 波长越长（160米=1.8MHz）</p>
        <p><strong>主次业务</strong>：主要业务可受到保护；次要业务不可干扰主要业务</p>
        <p><strong>专用段记忆</strong>：135.7kHz / 1.8MHz / 50MHz / 144MHz / 430MHz 是高频考点 ★★</p>
      </div>
    </div>
  )
}

// ─── Law knowledge ────────────────────────────────────────────────────────────
function LawKnowledge() {
  const [openGroups, setOpenGroups] = useState<Record<string, boolean>>(
    Object.fromEntries(LAW_GROUPS.map((g, i) => [i, g.hot]))
  )
  const toggle = (i: number) => setOpenGroups(v => ({ ...v, [i]: !v[i] }))

  return (
    <div className="space-y-3">
      {LAW_GROUPS.map((g, i) => (
        <div key={i} className={cn('rounded-xl border bg-card divide-y', g.hot && 'border-amber-200 dark:border-amber-800')}>
          <div className="px-4">
            <SectionHeader title={g.title} hot={g.hot} collapsed={!openGroups[i]} onToggle={() => toggle(i)} />
          </div>
          {openGroups[i] && (
            <ul className="py-2 divide-y divide-border/50">
              {g.points.map((p, j) => (
                <li key={j} className={cn('flex items-start gap-2 px-4 py-2 text-xs', p.hot && 'bg-red-50 dark:bg-red-950/20')}>
                  {p.hot
                    ? <span className="mt-0.5 shrink-0 text-red-500 font-bold">★</span>
                    : <span className="mt-0.5 shrink-0 text-muted-foreground/40">·</span>
                  }
                  <span className={p.hot ? 'font-medium' : ''}>{p.text}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}

      <div className="rounded-xl border border-blue-200 bg-blue-50 dark:border-blue-800 dark:bg-blue-950/30 p-4 text-xs space-y-1.5">
        <div className="font-semibold text-blue-700 dark:text-blue-400 mb-2">🧠 法规记忆要点</div>
        <p>★★ 三级体系：<strong>划分→分配→指配</strong>（从频谱到具体台站）</p>
        <p>★★ <strong>条例=军民联合</strong>（国务院+中央军委），不是法律也不是部门规章</p>
        <p>★ <strong>边带口诀</strong>：10.1以下LSB，10.1以上USB</p>
        <p>★ 中继频差：144MHz=600kHz，430MHz=5MHz</p>
      </div>
    </div>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────
const TABS = [
  { key: 'freq', label: '频率管理', Icon: Zap },
  { key: 'law', label: '法规管理', Icon: Scale },
]

export default function Knowledge() {
  const [tab, setTab] = useState('freq')

  return (
    <div className="mx-auto max-w-2xl px-4 pt-4 pb-4">
      <h1 className="text-lg font-bold mb-4">知识库</h1>

      {/* Tab bar */}
      <div className="flex rounded-xl bg-muted p-1 gap-1 mb-4">
        {TABS.map(({ key, label, Icon }) => (
          <button
            key={key}
            onClick={() => setTab(key)}
            className={cn(
              'flex-1 flex items-center justify-center gap-1.5 rounded-lg py-2 text-sm font-medium transition-all',
              tab === key
                ? 'bg-background text-foreground shadow-sm'
                : 'text-muted-foreground hover:text-foreground',
            )}
          >
            <Icon className="h-4 w-4" />
            {label}
          </button>
        ))}
      </div>

      {tab === 'freq' && <FrequencyKnowledge />}
      {tab === 'law' && <LawKnowledge />}
    </div>
  )
}
