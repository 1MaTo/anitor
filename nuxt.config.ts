import vuetify from 'vite-plugin-vuetify'
import { AppLocale } from './types/locale'
import { APP_DEPLOYMENT_ORIGIN, APP_DESCRIPTION, APP_NAME } from './utils/app'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  routeRules: {
    // Add cors headers on API routes
    '/api/**': {
      cors: true,
      headers: {
        'Access-Control-Allow-Origin':
          process.env.NODE_ENV === 'production' ? APP_DEPLOYMENT_ORIGIN : '*'
      }
    }
  },
  plugins: [{ src: '~/plugins/03.vercel.ts', mode: 'client' }],
  modules: ['@pinia/nuxt'],
  runtimeConfig: {
    malClientId: process.env.MAL_CLIENT_ID
  },
  app: {
    head: {
      title: APP_NAME,
      htmlAttrs: { lang: AppLocale.en },
      link: [
        { rel: 'icon', href: '/favicon.ico' }, // <-- this and,
        { rel: 'canonical', href: APP_DEPLOYMENT_ORIGIN } // <-- this. Please reverse the order to be sure.
      ],
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
          name: 'og:description',
          content: APP_DESCRIPTION
        },
        {
          name: 'og:url',
          content: APP_DEPLOYMENT_ORIGIN
        },
        {
          name: 'og:image',
          content: '/og_image.svg'
        },
        {
          name: 'twitter:card',
          content: 'summary'
        },
        {
          name: 'twitter:title',
          content: APP_NAME
        },
        {
          name: 'twitter:description',
          content: APP_DESCRIPTION
        },
        {
          name: 'twitter:image',
          content: '/og_image.svg'
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
