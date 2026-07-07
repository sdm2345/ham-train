import { NavLink } from 'react-router-dom'
import { Home, BookOpen, ClipboardList, AlertCircle, BookMarked, BarChart2 } from 'lucide-react'
import { cn } from '@/lib/utils'
import { FontSizeToggle } from './FontSizeToggle'

const tabs = [
  { to: '/', label: '首页', Icon: Home },
  { to: '/practice', label: '练习', Icon: BookOpen },
  { to: '/exam', label: '考试', Icon: ClipboardList },
  { to: '/errors', label: '错题本', Icon: AlertCircle },
  { to: '/review', label: '复习', Icon: BookMarked },
  { to: '/stats', label: '统计', Icon: BarChart2 },
]

export function NavBar() {
  return (
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
        <div className="px-2 py-1.5">
          <FontSizeToggle />
        </div>
      </div>
    </nav>
  )
}
