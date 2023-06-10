import vuetify from "vite-plugin-vuetify";
import { APP_NAME } from "./utils/app";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: { head: { title: APP_NAME } },
  vite: {
    plugins: [vuetify()],
    define: {
      __VUE_I18N_FULL_INSTALL__: true,
      __VUE_I18N_LEGACY_API__: false,
      __INTLIFY_PROD_DEVTOOLS__: false,
    },
  },
  css: [
    "vuetify/lib/styles/main.css",
    "@mdi/font/css/materialdesignicons.css",
    "@fortawesome/fontawesome-free/css/all.css",
  ],
  devtools: { enabled: true },
  build: {
    transpile: ["vuetify"],
  },
});
