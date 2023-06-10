import { i18n } from './setup/i18n'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(i18n)
  return { provide: i18n } as any
})
