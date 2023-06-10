import { createVuetify } from "vuetify";
import { aliases, fa } from "vuetify/iconsets/fa";
import { mdi } from "vuetify/iconsets/mdi";
import { ThemeType } from "~/types/theme";

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    ssr: true,
    theme: {
      defaultTheme: process.server ? ThemeType.dark : getDefaultTheme(),
    },
    /* locale: {
      adapter: createVueI18nAdapter({
        i18n: nuxtApp.vueApp.config.globalProperties.$i18n as any,
        useI18n,
      }),
    }, */
    icons: {
      defaultSet: "fa",
      aliases,
      sets: {
        fa,
        mdi,
      },
    },
  });

  nuxtApp.vueApp.use(vuetify);
});
