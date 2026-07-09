import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Home, BookOpen, ClipboardList, AlertCircle, BookMarked, BarChart2, BookText, Settings, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { FontSizeToggle } from './FontSizeToggle'

const tabs = [
  { to: '/', label: '首页', Icon: Home },
  { to: '/practice', label: '练习', Icon: BookOpen },
  { to: '/exam', label: '考试', Icon: ClipboardList },
  { to: '/errors', label: '错题本', Icon: AlertCircle },
  { to: '/review', label: '复习', Icon: BookMarked },
  { to: '/stats', label: '统计', Icon: BarChart2 },
  { to: '/knowledge', label: '知识', Icon: BookText },
]

export function NavBar() {
  const [open, setOpen] = useState(false)

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
            onClick={() => setOpen(true)}
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
              <span className="font-semibold text-base">显示设置</span>
              <button onClick={() => setOpen(false)} className="text-muted-foreground hover:text-foreground">
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">字体大小</span>
              <FontSizeToggle />
            </div>
          </div>
        </div>
      )}
    </>
  )
}
