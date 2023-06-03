import { ThemeType } from '@/types/theme'
import { LocalStorageKey } from '@/utils/localStorage'
import { getDefaultTheme, getLocalTheme, getPreferedTheme, setDefaultTheme } from '@/utils/theme'
import { expect, test } from 'vitest'

test('Get theme from local storate', () => {
  localStorage.removeItem(LocalStorageKey.theme)
  expect(localStorage.getItem(LocalStorageKey.theme)).toBe(null)

  localStorage.setItem(LocalStorageKey.theme, ThemeType.dark)
  expect(getLocalTheme()).toBe(ThemeType.dark)
})

test('Get theme from media query', () => {
  localStorage.removeItem(LocalStorageKey.theme)
  expect(localStorage.getItem(LocalStorageKey.theme)).toBe(null)

  expect(getPreferedTheme()).toBe(ThemeType.dark)
})

test('Save theme to local storage', () => {
  localStorage.removeItem(LocalStorageKey.theme)
  expect(localStorage.getItem(LocalStorageKey.theme)).toBe(null)

  setDefaultTheme(ThemeType.dark)
  expect(localStorage.getItem(LocalStorageKey.theme)).toBe(ThemeType.dark)
})

test('Get proper theme in any way', () => {
  localStorage.removeItem(LocalStorageKey.theme)
  expect(localStorage.getItem(LocalStorageKey.theme)).toBe(null)

  expect(getDefaultTheme()).toBe(ThemeType.dark)
})
