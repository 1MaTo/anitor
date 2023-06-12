import { ThemeType } from '@/types/theme'

export const getPreferedTheme = () => {
  const isDark = window.matchMedia('(prefers-color-scheme: dark)')
  return isDark ? ThemeType.dark : ThemeType.light
}
