import { NavLink } from 'react-router-dom'
import { Home, BookOpen, ClipboardList, AlertCircle } from 'lucide-react'
import { cn } from '@/lib/utils'

const tabs = [
  { to: '/', label: '首页', Icon: Home },
  { to: '/practice', label: '练习', Icon: BookOpen },
  { to: '/exam', label: '考试', Icon: ClipboardList },
  { to: '/errors', label: '错题本', Icon: AlertCircle },
]

export function NavBar() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t bg-background/95 backdrop-blur">
      <div className="mx-auto flex max-w-lg">
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
      </div>
    </nav>
  )
}
