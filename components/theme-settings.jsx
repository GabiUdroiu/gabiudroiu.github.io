'use client'

import { useAppTheme } from '@/hooks/use-app-theme'
import { THEMES } from '@/lib/themes'
import { Check } from 'lucide-react'

export function ThemeSettings() {
  const { theme, changeTheme } = useAppTheme()

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-2xl font-semibold mb-2">Choose Your Theme</h3>
        <p className="text-muted-foreground">
          Select a color theme that matches your style
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {Object.entries(THEMES).map(([key, themeData]) => (
          <button
            key={key}
            onClick={() => changeTheme(key)}
            className={`relative p-6 rounded-xl border-2 transition-all text-left hover:shadow-md ${
              theme === key
                ? 'border-primary bg-primary/5'
                : 'border-border hover:border-border/80 bg-card'
            }`}
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <p className="font-bold text-lg">{themeData.name}</p>
                <p className="text-xs text-muted-foreground mt-1">
                  {themeData.description}
                </p>
              </div>
              {theme === key && (
                <Check className="h-5 w-5 text-primary flex-shrink-0 ml-2" />
              )}
            </div>

            <div className="flex gap-2">
              {[themeData.colors.primary, themeData.colors.secondary, themeData.colors.accent].map(
                (color, i) => (
                  <div
                    key={i}
                    className="h-8 flex-1 rounded-lg border border-border shadow-sm"
                    style={{ backgroundColor: color }}
                  />
                )
              )}
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}
