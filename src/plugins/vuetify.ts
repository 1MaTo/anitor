import '@fortawesome/fontawesome-free/css/all.css'
import { createVueI18nAdapter } from 'vuetify/locale/adapters/vue-i18n'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import { aliases, fa } from 'vuetify/iconsets/fa'
import { getDefaultTheme } from '@/utils/theme'
import i18n from '@/plugins/i18n'
import { useI18n } from 'vue-i18n'

const defaultTheme = getDefaultTheme()

const vuetify = createVuetify({
  theme: { defaultTheme: defaultTheme },
  locale: {
    adapter: createVueI18nAdapter({ i18n: i18n as any, useI18n })
  },
  icons: {
    defaultSet: 'fa',
    aliases,
    sets: {
      fa
    }
  }
})

export default vuetify
