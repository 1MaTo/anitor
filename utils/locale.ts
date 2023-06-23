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

export const customRuRluralizationRule = (choice: number, choicesLength: number) => {
  if (choice === 0) {
    return 0
  }

  const teen = choice > 10 && choice < 20
  const endsWithOne = choice % 10 === 1
  if (!teen && endsWithOne) {
    return 1
  }
  if (!teen && choice % 10 >= 2 && choice % 10 <= 4) {
    return 2
  }

  return choicesLength < 4 ? 2 : 3
}
