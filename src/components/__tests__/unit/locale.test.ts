import { AppLocale } from '@/types/locale'
import {
  getBrowserLocale,
  getDefaultLocale,
  getLocalLocale,
  setDefaultLocale
} from '@/utils/locale'
import { expect, test } from 'vitest'
import { LocalStorageKey } from '@/utils/localStorage'

test('Get valid locale from browser', () => {
  expect(Object.values(AppLocale).includes(getBrowserLocale())).toBeTruthy()
})

test('Local locale is null when no set', () => {
  localStorage.clear()
  expect(getLocalLocale()).toBeNull()
})

test('Local locale is valid locale when set', () => {
  localStorage.clear()
  localStorage.setItem(LocalStorageKey.locale, AppLocale.en)
  expect(getLocalLocale()).toBe(AppLocale.en)
})

test('Set default locale', () => {
  localStorage.clear()
  setDefaultLocale(AppLocale.en)
  expect(localStorage.getItem(LocalStorageKey.locale)).toBe(AppLocale.en)
})

test('Set default locale', () => {
  localStorage.clear()
  setDefaultLocale(AppLocale.en)
  expect(localStorage.getItem(LocalStorageKey.locale)).toBe(AppLocale.en)
})

test('Get valid locale when local not set', () => {
  localStorage.clear()
  expect(Object.values(AppLocale).includes(getDefaultLocale())).toBeTruthy()
})

test('Get valid locale when local is set', () => {
  localStorage.clear()
  localStorage.setItem(LocalStorageKey.locale, AppLocale.ru)
  expect(getDefaultLocale()).toBe(AppLocale.ru)
})
