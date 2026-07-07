import { create } from 'zustand'

export type FontSize = 'sm' | 'md' | 'lg'

const STORAGE_KEY = 'ham-train:font-size'
const SIZES: FontSize[] = ['sm', 'md', 'lg']

function applyFontSize(size: FontSize) {
  document.documentElement.setAttribute('data-font', size)
}

const saved = (localStorage.getItem(STORAGE_KEY) as FontSize | null) ?? 'md'
applyFontSize(saved)

interface SettingsStore {
  fontSize: FontSize
  setFontSize: (size: FontSize) => void
  cycleFontSize: () => void
}

export const useSettingsStore = create<SettingsStore>((set, get) => ({
  fontSize: saved,
  setFontSize: (size) => {
    applyFontSize(size)
    localStorage.setItem(STORAGE_KEY, size)
    set({ fontSize: size })
  },
  cycleFontSize: () => {
    const cur = get().fontSize
    const next = SIZES[(SIZES.indexOf(cur) + 1) % SIZES.length]
    get().setFontSize(next)
  },
}))
