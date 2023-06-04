import { createI18n } from 'vue-i18n'
import en from '@/locales/en.json'
import ru from '@/locales/ru.json'
import { AppLocale } from '@/types/locale'
import { getDefaultLocale } from '@/utils/locale'

type MessageSchema = typeof en

const i18n = createI18n<[MessageSchema], AppLocale>({
  legacy: false,
  locale: getDefaultLocale(),
  fallbackLocale: AppLocale.en,
  messages: {
    en: en,
    ru: ru
  }
  // something vue-i18n options here ...
})

export default i18n
