import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

function hashCode(str: string): number {
  let h = 0
  for (const ch of str) {
    h = (Math.imul(31, h) + ch.charCodeAt(0)) | 0
  }
  return h >>> 0
}

// Deterministic Fisher-Yates using mulberry32 PRNG seeded by string
export function seededShuffle<T>(arr: T[], seedStr: string): T[] {
  let s = hashCode(seedStr)
  const rand = () => {
    s += 0x6d2b79f5
    let t = Math.imul(s ^ (s >>> 15), s | 1)
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61)
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

export function formatTime(seconds: number): string {
  const m = Math.floor(seconds / 60)
  const s = seconds % 60
  return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`
}

/**
 * Build origKey→displayLabel map for a shuffled option list.
 * e.g. if original key 'C' ended up in slot 0, origToDisplay['C'] = 'A'
 */
export function buildOrigToDisplay(
  shuffledOptions: Array<{ key: string }>,
): Record<string, string> {
  const labels = ['A', 'B', 'C', 'D', 'E']
  const map: Record<string, string> = {}
  shuffledOptions.forEach((opt, i) => { map[opt.key] = labels[i] })
  return map
}

/**
 * Replace answer-label references (A/B/C/D) in a tip markdown string
 * according to the origToDisplay mapping produced by buildOrigToDisplay.
 *
 * Patterns recognised:
 *   （A） (A)  答案A  选项A  A项  A选  **A**  | A |
 */
export function remapTipLabels(tip: string, origToDisplay: Record<string, string>): string {
  if (Object.entries(origToDisplay).every(([k, v]) => k === v)) return tip

  const placeholder = (orig: string) => `\x00${orig}\x00`

  // Pass 1 – replace each recognised pattern with a placeholder so we don't
  // double-replace (e.g. A→C then C→B)
  let result = tip
  for (const orig of ['A', 'B', 'C', 'D', 'E']) {
    if (!origToDisplay[orig] || origToDisplay[orig] === orig) continue
    const ph = placeholder(orig)
    result = result
      .replace(new RegExp(`([（(])${orig}([）)])`, 'g'), `$1${ph}$2`)
      .replace(new RegExp(`(答案|选项)${orig}`, 'g'),     `$1${ph}`)
      .replace(new RegExp(`${orig}(项|选)`, 'g'),         `${ph}$1`)
      .replace(new RegExp(`(\\*\\*|__)${orig}(\\*\\*|__)`, 'g'), `$1${ph}$2`)
      .replace(new RegExp(`(\\|\\s*)${orig}(\\s*[|）)])`, 'g'),  `$1${ph}$2`)
  }

  // Pass 2 – swap placeholders for the new display labels
  for (const orig of ['A', 'B', 'C', 'D', 'E']) {
    if (!origToDisplay[orig]) continue
    result = result.replaceAll(placeholder(orig), origToDisplay[orig])
  }

  return result
}
