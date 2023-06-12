import { createI18n } from 'vue-i18n'
import { AppLocale, MessageSchema } from '~/types/locale'

import en from '@/locales/en'
import ru from '@/locales/ru'

export const i18n = createI18n<[MessageSchema], AppLocale>({
  legacy: false,
  locale: AppLocale.en,
  fallbackLocale: AppLocale.en,
  messages: {
    en,
    ru
  }
})
