import { useState } from 'react'
import { Zap, Scale, ChevronRight, ChevronDown, Star, ArrowLeft } from 'lucide-react'
import { cn } from '@/lib/utils'

// ─── Spectrum data — sorted low→high frequency ────────────────────────────────
const SPECTRUM = [
  { abbr: 'VLF', full: 'Very Low Frequency',      cn: '甚低频', range: '3-30 kHz',     band: '万米波', amateur: '',                                hot: false },
  { abbr: 'LF',  full: 'Low Frequency',            cn: '低频',   range: '30-300 kHz',   band: '千米波', amateur: '135.7-137.8 kHz ★',               hot: true  },
  { abbr: 'MF',  full: 'Medium Frequency',         cn: '中频',   range: '300k-3 MHz',   band: '百米波', amateur: '1.8-2 MHz ★',                     hot: true  },
  { abbr: 'HF',  full: 'High Frequency',           cn: '高频',   range: '3-30 MHz',     band: '十米波', amateur: '3.5/7/10/14/18/21/24/28 MHz',     hot: true  },
  { abbr: 'VHF', full: 'Very High Frequency',      cn: '甚高频', range: '30-300 MHz',   band: '米波',   amateur: '50-54 / 144-148 MHz ★',           hot: true  },
  { abbr: 'UHF', full: 'Ultra High Frequency',     cn: '特高频', range: '300M-3 GHz',   band: '分米波', amateur: '430-440 MHz ★★',                  hot: true  },
  { abbr: 'SHF', full: 'Super High Frequency',     cn: '超高频', range: '3-30 GHz',     band: '厘米波', amateur: '2.3G / 5.65G / 10G',              hot: false },
  { abbr: 'EHF', full: 'Extremely High Frequency', cn: '极高频', range: '30-300 GHz',   band: '毫米波', amateur: '24G / 47G / 241G',                hot: false },
]

// BANDS sorted by ascending frequency (freqHz = lower bound in Hz for sort key)
const BANDS = [
  { name: '160米',     freq: '1.8-2 MHz',           freqHz: 1.8e6,    power: 'A类25W',      note: '主要业务',              hot: false },
  { name: '80米',      freq: '3.5-3.9 MHz',          freqHz: 3.5e6,    power: 'A类25W',      note: '主要业务',              hot: false },
  { name: '40米★',    freq: '7.0-7.2 MHz',           freqHz: 7.0e6,    power: 'A类25W',      note: '主要业务(ITU三区)',      hot: true  },
  { name: '30米',      freq: '10.1-10.15 MHz',        freqHz: 10.1e6,   power: 'A类25W',      note: '次要业务',              hot: false },
  { name: '20米★★',   freq: '14.0-14.35 MHz',         freqHz: 14.0e6,   power: 'A类25W',      note: '专用/主要业务★',        hot: true  },
  { name: '17米',      freq: '18.068-18.168 MHz',      freqHz: 18.068e6, power: 'A类25W',      note: '主要业务',              hot: false },
  { name: '15米',      freq: '21.0-21.45 MHz',         freqHz: 21.0e6,   power: 'A类25W',      note: '专用',                  hot: false },
  { name: '12米',      freq: '24.89-24.99 MHz',        freqHz: 24.89e6,  power: 'A类25W',      note: '主要业务',              hot: false },
  { name: '10米',      freq: '28-29.7 MHz',            freqHz: 28e6,     power: 'A类25W',      note: '专用',                  hot: false },
  { name: '6米★',     freq: '50-54 MHz',              freqHz: 50e6,     power: 'A类25W',      note: '主要业务',              hot: true  },
  { name: '2米★★',    freq: '144-148 MHz',            freqHz: 144e6,    power: 'A/B/C类≤25W', note: '主要业务',              hot: true  },
  { name: '70厘米★★', freq: '430-440 MHz',            freqHz: 430e6,    power: 'A/B/C类≤25W', note: '次要业务',              hot: true  },
  { name: '23厘米',    freq: '1240-1300 MHz',          freqHz: 1240e6,   power: '≤25W',        note: '次要业务',              hot: false },
  { name: '13厘米',    freq: '2300-2450 MHz',          freqHz: 2300e6,   power: '≤25W',        note: '次要业务',              hot: false },
].sort((a, b) => a.freqHz - b.freqHz)

const LAW_GROUPS = [
  {
    title: '许可证 & 执照',
    hot: true,
    points: [
      { text: '操作技术能力验证证书由无线电管理机构颁发（非CRSA）★★', hot: true },
      { text: 'A类操作证：长期有效，无固定有效期，无需审验', hot: true },
      { text: 'A类：30-3000MHz（VHF+UHF），最大发射功率 ≤25W', hot: true },
      { text: 'B类：30MHz以下 <15W，30MHz以上（含VHF/UHF/430MHz）≤25W', hot: true },
      { text: 'C类：HF ≤1000W，VHF/UHF ≤25W', hot: true },
      { text: '无线电台执照由工信部颁发，有效期不超过5年', hot: true },
      { text: '执照到期前30个工作日申请延续（更换执照，非年审）', hot: true },
      { text: '2024年已取消定期审验，改为无委定期上门检查检测', hot: false },
    ],
  },
  {
    title: '法规层级',
    hot: true,
    points: [
      { text: '《无线电管理条例》= 国务院＋中央军委联合发布（行政法规）★★', hot: true },
      { text: '《业余无线电台管理办法》= 工信部部门规章', hot: true },
      { text: '业余电台不得用于商业通信，不得传递无关内容', hot: false },
      { text: '设置业余中继台需单独申请执照', hot: true },
      { text: '最新《业余无线电台管理办法》自2024年3月1日起施行（工信部令第67号）', hot: true },
    ],
  },
  {
    title: '频率使用原则',
    hot: true,
    points: [
      { text: '主要业务 > 次要业务：次要业务不得干扰主要业务', hot: true },
      { text: '划分 → 分配 → 指配（三级体系）★★', hot: true },
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
    title: '边带规则',
    hot: true,
    points: [
      { text: '10.1MHz以下 → LSB（下边带）', hot: true },
      { text: '10.1MHz以上（含10.1）→ USB（上边带）', hot: true },
      { text: 'VHF/UHF SSB → USB', hot: false },
    ],
  },
]

// ─── Spectrum bar ──────────────────────────────────────────────────────────────
const COLORS = ['#6366f1','#8b5cf6','#a855f7','#ec4899','#f43f5e','#f97316','#84cc16','#14b8a6']

function SpectrumBar() {
  return (
    <div className="mb-4">
      <div className="text-xs text-muted-foreground mb-1.5">频谱概览（对数刻度，高亮=业余常用）</div>
      <div className="flex rounded-xl overflow-hidden border h-9">
        {SPECTRUM.map((s, i) => (
          <div
            key={s.abbr}
            className={cn('flex-1 flex items-center justify-center text-[10px] font-bold text-white', s.hot && 'ring-2 ring-inset ring-white/40')}
            style={{ backgroundColor: COLORS[i] }}
            title={`${s.full} (${s.cn}) ${s.range}${s.amateur ? '\n' + s.amateur : ''}`}
          >
            {s.abbr}
          </div>
        ))}
      </div>
      <div className="flex mt-0.5">
        {SPECTRUM.map((s) => (
          <div key={s.abbr} className="flex-1 text-center text-[9px] text-muted-foreground truncate px-0.5">{s.band}</div>
        ))}
      </div>
    </div>
  )
}

// ─── Frequency detail ─────────────────────────────────────────────────────────
function FrequencyDetail() {
  const [showBands, setShowBands] = useState(true)
  const [showSpec, setShowSpec]   = useState(true)

  return (
    <div className="space-y-4">
      <SpectrumBar />

      {/* spectrum rows */}
      <div className="rounded-xl border bg-card divide-y">
        <button className="w-full flex items-center justify-between px-4 py-3" onClick={() => setShowSpec(v => !v)}>
          <span className="flex items-center gap-1.5 text-sm font-semibold">
            <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />各频段业余分配
          </span>
          {showSpec ? <ChevronDown className="h-4 w-4 text-muted-foreground" /> : <ChevronRight className="h-4 w-4 text-muted-foreground" />}
        </button>
        {showSpec && SPECTRUM.map((s) => (
          <div key={s.abbr} className={cn('flex gap-2 items-start px-4 py-2.5 text-xs', s.hot && 'bg-amber-50 dark:bg-amber-950/20')}>
            {/* abbr + full name */}
            <div className="w-24 shrink-0">
              <span className={cn('font-bold', s.hot ? 'text-amber-600 dark:text-amber-400' : 'text-muted-foreground')}>{s.abbr}</span>
              <span className="ml-1 text-muted-foreground">{s.cn}</span>
            </div>
            {/* freq range */}
            <span className="font-mono text-[10px] text-muted-foreground w-24 shrink-0">{s.range}</span>
            {/* amateur freq */}
            <span className={cn('flex-1', s.hot && 'font-medium')}>{s.amateur || <span className="opacity-30">—</span>}</span>
            {s.hot && <Star className="h-3 w-3 shrink-0 fill-amber-400 text-amber-400 mt-0.5" />}
          </div>
        ))}
      </div>

      {/* band table */}
      <div className="rounded-xl border bg-card divide-y">
        <button className="w-full flex items-center justify-between px-4 py-3" onClick={() => setShowBands(v => !v)}>
          <span className="flex items-center gap-1.5 text-sm font-semibold">
            <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />业余波段速查表
            <span className="text-[10px] font-normal text-muted-foreground ml-1">↑ 频率升序</span>
          </span>
          {showBands ? <ChevronDown className="h-4 w-4 text-muted-foreground" /> : <ChevronRight className="h-4 w-4 text-muted-foreground" />}
        </button>
        {showBands && (
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
                  <tr key={b.name} className={b.hot ? 'bg-amber-50 dark:bg-amber-950/20' : ''}>
                    <td className={cn('px-3 py-2 font-semibold', b.hot && 'text-amber-700 dark:text-amber-300')}>{b.name}</td>
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

      <div className="rounded-xl border border-blue-200 bg-blue-50 dark:border-blue-800 dark:bg-blue-950/30 p-4 text-xs space-y-1.5">
        <div className="font-semibold text-blue-700 dark:text-blue-400 mb-2">🧠 记忆口诀</div>
        <p><strong>ABC三类</strong>：A类限短波（25W），B/C类可用430MHz（10W）</p>
        <p><strong>波段名</strong>：频率越低→波长越长（160米≈1.8MHz）</p>
        <p><strong>业务地位</strong>：专用 &gt; 主要业务 &gt; 次要业务（20米波段 14-14.25专用 / 14.25-14.35主要）</p>
        <p><strong>高频考点</strong>：135.7kHz / 1.8MHz / 50MHz / 144MHz / 430MHz ★★</p>
      </div>
    </div>
  )
}

// ─── Law detail ───────────────────────────────────────────────────────────────
function LawDetail() {
  const [open, setOpen] = useState<Record<number, boolean>>(
    Object.fromEntries(LAW_GROUPS.map((g, i) => [i, g.hot]))
  )
  const toggle = (i: number) => setOpen(v => ({ ...v, [i]: !v[i] }))

  return (
    <div className="space-y-3">
      {LAW_GROUPS.map((g, i) => (
        <div key={i} className={cn('rounded-xl border bg-card divide-y', g.hot && 'border-amber-200 dark:border-amber-700')}>
          <button className="w-full flex items-center justify-between px-4 py-3" onClick={() => toggle(i)}>
            <span className="flex items-center gap-1.5 text-sm font-semibold">
              {g.hot && <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />}
              {g.title}
            </span>
            {open[i] ? <ChevronDown className="h-4 w-4 text-muted-foreground" /> : <ChevronRight className="h-4 w-4 text-muted-foreground" />}
          </button>
          {open[i] && (
            <ul className="py-1 divide-y divide-border/40">
              {g.points.map((p, j) => (
                <li key={j} className={cn('flex gap-2 items-start px-4 py-2 text-xs', p.hot && 'bg-red-50 dark:bg-red-950/20')}>
                  <span className={cn('mt-0.5 shrink-0 font-bold', p.hot ? 'text-red-500' : 'text-muted-foreground/30')}>
                    {p.hot ? '★' : '·'}
                  </span>
                  <span className={p.hot ? 'font-medium' : ''}>{p.text}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}

      <div className="rounded-xl border border-blue-200 bg-blue-50 dark:border-blue-800 dark:bg-blue-950/30 p-4 text-xs space-y-1.5">
        <div className="font-semibold text-blue-700 dark:text-blue-400 mb-2">🧠 记忆要点</div>
        <p>★★ <strong>三级体系</strong>：划分→分配→指配</p>
        <p>★★ <strong>条例=军民联合</strong>（国务院+中央军委），非法律非规章</p>
        <p>★ <strong>边带口诀</strong>：10.1以下LSB，10.1以上USB</p>
        <p>★ <strong>中继频差</strong>：144MHz=600kHz，430MHz=5MHz</p>
      </div>
    </div>
  )
}

// ─── Knowledge entries ────────────────────────────────────────────────────────
const ENTRIES = [
  {
    key: 'freq',
    Icon: Zap,
    title: '频率管理',
    desc: '频谱划分、业余波段、功率限制',
    hot: true,
    Detail: FrequencyDetail,
  },
  {
    key: 'law',
    Icon: Scale,
    title: '法规管理',
    desc: '执照、法规层级、操作规范',
    hot: true,
    Detail: LawDetail,
  },
  // Future entries go here
]

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function Knowledge() {
  const [active, setActive] = useState<string | null>(null)
  const entry = ENTRIES.find(e => e.key === active)

  return (
    <div className="mx-auto max-w-2xl px-4 pt-4 pb-4">
      {/* detail view */}
      {entry ? (
        <>
          <button
            onClick={() => setActive(null)}
            className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground mb-4 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            知识库
          </button>
          <div className="flex items-center gap-2 mb-5">
            <entry.Icon className={cn('h-5 w-5', entry.hot ? 'text-amber-500' : 'text-muted-foreground')} />
            <h1 className="text-lg font-bold">{entry.title}</h1>
          </div>
          <entry.Detail />
        </>
      ) : (
        /* list view */
        <>
          <h1 className="text-lg font-bold mb-4">知识库</h1>
          <div className="space-y-2">
            {ENTRIES.map(({ key, Icon, title, desc, hot }) => (
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
                    <span className="font-semibold text-sm">{title}</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-0.5 truncate">{desc}</p>
                </div>
                <ChevronRight className="h-4 w-4 text-muted-foreground shrink-0" />
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  )
}
