import { createVuetify } from 'vuetify'
import { aliases, fa } from 'vuetify/iconsets/fa'
import { mdi } from 'vuetify/iconsets/mdi'
import { ThemeType } from '~/types/theme'

export const vuetify = createVuetify({
  ssr: true,
  theme: {
    defaultTheme: process.server ? ThemeType.dark : getDefaultTheme()
  },
  icons: {
    defaultSet: 'fa',
    aliases,
    sets: {
      fa,
      mdi
    }
  }
})
