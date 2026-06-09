'use client'

import { useEffect, useState } from 'react'
import { THEMES, LAYOUT_PRESETS } from '@/lib/themes'

function rgbToHsl(rgb) {
  const match = rgb.match(/\d+/g)
  if (!match || match.length < 3) return '0 0% 50%'

  let [r, g, b] = match.map(Number)
  r /= 255
  g /= 255
  b /= 255

  const max = Math.max(r, g, b)
  const min = Math.min(r, g, b)
  let h, s, l = (max + min) / 2

  if (max === min) {
    h = s = 0
  } else {
    const d = max - min
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min)

    switch (max) {
      case r:
        h = ((g - b) / d + (g < b ? 6 : 0)) / 6
        break
      case g:
        h = ((b - r) / d + 2) / 6
        break
      case b:
        h = ((r - g) / d + 4) / 6
        break
      default:
        h = 0
    }
  }

  h = Math.round(h * 360)
  s = Math.round(s * 100)
  l = Math.round(l * 100)

  return `${h} ${s}% ${l}%`
}

export function useAppTheme() {
  const [theme, setTheme] = useState('default')
  const [layout, setLayout] = useState('default')
  const [mounted, setMounted] = useState(false)

  // Load from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('app-theme') || 'default'
    const savedLayout = localStorage.getItem('app-layout') || 'default'

    setTheme(savedTheme)
    setLayout(savedLayout)
    applyTheme(savedTheme)
    setMounted(true)
  }, [])

  const applyTheme = (themeKey) => {
    const selectedTheme = THEMES[themeKey]
    if (!selectedTheme) return

    const root = document.documentElement

    // Convert RGB to HSL and apply
    const primaryHsl = rgbToHsl(selectedTheme.colors.primary)
    const secondaryHsl = rgbToHsl(selectedTheme.colors.secondary)
    const accentHsl = rgbToHsl(selectedTheme.colors.accent)

    root.style.setProperty('--primary', primaryHsl)
    root.style.setProperty('--secondary', secondaryHsl)
    root.style.setProperty('--accent', accentHsl)
  }

  const changeTheme = (themeKey) => {
    if (THEMES[themeKey]) {
      setTheme(themeKey)
      localStorage.setItem('app-theme', themeKey)
      applyTheme(themeKey)
    }
  }

  const changeLayout = (layoutKey) => {
    if (LAYOUT_PRESETS[layoutKey]) {
      setLayout(layoutKey)
      localStorage.setItem('app-layout', layoutKey)
    }
  }

  return {
    theme,
    layout,
    changeTheme,
    changeLayout,
    mounted,
    currentTheme: THEMES[theme],
    currentLayout: LAYOUT_PRESETS[layout],
  }
}
