'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { LayoutDashboard, FileText, Server, Settings } from 'lucide-react'

const navItems = [
  {
    href: '/servers',
    label: 'Servers',
    icon: Server,
  },
  {
    href: '/reports',
    label: 'Reports',
    icon: FileText,
  },
  {
    href: '/',
    label: 'Dashboard',
    icon: LayoutDashboard,
  },
  {
    href: '/settings',
    label: 'Settings',
    icon: Settings,
  },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="w-64 border-r border-border bg-card flex flex-col h-full">
      <div className="p-4 sm:p-6 border-b border-border">
        <h1 className="text-lg font-bold text-foreground">ServerMgmt</h1>
      </div>

      <nav className="flex-1 px-2 sm:px-4 space-y-1 py-2 sm:py-4 overflow-y-auto">
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = pathname === item.href

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-2.5 rounded-lg transition-colors font-medium ${
                isActive
                  ? 'bg-primary text-primary-foreground'
                  : 'text-foreground hover:bg-muted'
              }`}
            >
              <Icon className="h-5 w-5 flex-shrink-0" />
              <span>{item.label}</span>
            </Link>
          )
        })}
      </nav>

      <div className="p-4 border-t border-border text-xs text-muted-foreground">
        <p>© 2024 Mireluș ❤</p>
      </div>
    </aside>
  )
}
