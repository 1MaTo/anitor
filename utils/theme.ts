import { LocalStorageKey } from './localStorage'
import { ThemeType } from '@/types/theme'

export const getDefaultTheme = () => {
  const userTheme = localStorage.getItem(LocalStorageKey.theme)

  if (!userTheme) return getPreferedTheme()

  return userTheme === ThemeType.dark ? ThemeType.dark : ThemeType.light
}

export const getPreferedTheme = () => {
  const isDark = window.matchMedia('(prefers-color-scheme: dark)')
  return isDark ? ThemeType.dark : ThemeType.light
}

export const setDefaultTheme = (newTheme: ThemeType) => {
  localStorage.setItem(LocalStorageKey.theme, newTheme)
}

export const getLocalTheme = () => {
  return localStorage.getItem(LocalStorageKey.theme)
}
