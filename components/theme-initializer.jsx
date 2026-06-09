'use client'

import { useEffect } from 'react'
import { THEMES } from '@/lib/themes'

export function ThemeInitializer() {
  useEffect(() => {
    // Load saved theme from localStorage
    const savedTheme = localStorage.getItem('app-theme') || 'default'
    const selectedTheme = THEMES[savedTheme]

    if (selectedTheme) {
      const root = document.documentElement

      // Apply theme colors as CSS variables
      root.style.setProperty(
        '--theme-primary',
        selectedTheme.colors.primary
      )
      root.style.setProperty(
        '--theme-secondary',
        selectedTheme.colors.secondary
      )
      root.style.setProperty(
        '--theme-accent',
        selectedTheme.colors.accent
      )
    }
  }, [])

  return null
}
