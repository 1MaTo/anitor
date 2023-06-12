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
