import { createI18n } from "vue-i18n";
import { AppLocale, MessageSchema } from "~/types/locale";

import en from "@/locales/en.json";
import ru from "@/locales/ru.json";

export default defineNuxtPlugin((nuxtApp) => {
  const i18n = createI18n<[MessageSchema], AppLocale>({
    legacy: false,
    locale: process.server ? "en" : getDefaultLocale(),
    fallbackLocale: AppLocale.en,
    messages: {
      en: en,
      ru: ru,
    },
  });
  nuxtApp.vueApp.use(i18n);
  return { provide: i18n } as any;
});
