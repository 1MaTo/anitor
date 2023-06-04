import { createI18n } from 'vue-i18n'
import en from '@/locales/en.json'
import ru from '@/locales/ru.json'

type MessageSchema = typeof en

const i18n = createI18n<[MessageSchema], 'en' | 'ru'>({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  messages: {
    en: en,
    ru: ru
  }
  // something vue-i18n options here ...
})

export default i18n
