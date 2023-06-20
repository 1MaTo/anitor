import vuetify from 'vite-plugin-vuetify'
import { APP_NAME, APP_DESCRIPTION } from './utils/app'
import { AppLocale } from './types/locale'

/* import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'url'
import VueI18nVitePlugin from '@intlify/unplugin-vue-i18n/vite' */

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@pinia/nuxt'],
  runtimeConfig: {
    malClientId: process.env.MAL_CLIENT_ID
  },
  app: {
    head: {
      title: APP_NAME,
      htmlAttrs: { lang: AppLocale.en },
      meta: [
        {
          name: 'description',
          content: APP_DESCRIPTION
        },
        {
          name: 'og:title',
          content: APP_NAME
        },
        {
          name: 'og:image',
          content: '/nyaa-logo.png'
        },
        {
          name: 'twitter:card',
          content: 'app'
        }
      ]
    }
  },
  pinia: {
    autoImports: [
      // automatically imports `defineStore`
      'defineStore', // import { defineStore } from 'pinia'
      ['defineStore', 'definePiniaStore'] // import { defineStore as definePiniaStore } from 'pinia'
    ]
  },
  vite: {
    plugins: [
      vuetify()
      /* VueI18nVitePlugin({
        include: [resolve(dirname(fileURLToPath(import.meta.url)), './locales/*.json')]
      }) */
    ],
    define: {
      __VUE_I18N_FULL_INSTALL__: true,
      __VUE_I18N_LEGACY_API__: false,
      __INTLIFY_PROD_DEVTOOLS__: false
    }
  },
  css: [
    'vuetify/lib/styles/main.css',
    '@mdi/font/css/materialdesignicons.css',
    '@fortawesome/fontawesome-free/css/all.css'
  ],
  devtools: { enabled: true },
  build: {
    transpile: ['vuetify']
  }
})
