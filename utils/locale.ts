import { LocalStorageKey } from './localStorage'
import { AppLocale } from '@/types/locale'

export const getBrowserLocale = () => {
  const locale =
    navigator.language ||
    (navigator as any).browserLanguage ||
    (navigator.languages || [AppLocale.en])[0]

  if (/^ru\b/i.test(locale)) {
    return AppLocale.ru
  }

  if (/^en\b/i.test(locale)) {
    return AppLocale.en
  }

  return AppLocale.en
}

export const getLocalLocale = () => {
  const locale = localStorage.getItem(LocalStorageKey.locale)
  return Object.values(AppLocale).includes(locale as any) ? (locale as AppLocale) : null
}

export const setDefaultLocale = (newLocale: AppLocale) => {
  localStorage.setItem(LocalStorageKey.locale, newLocale)
}

export const getDefaultLocale = () => {
  const localLocale = getLocalLocale()
  if (localLocale) return localLocale

  return getBrowserLocale()
}
