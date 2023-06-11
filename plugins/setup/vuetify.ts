import { createVuetify } from 'vuetify'
import { aliases, fa } from 'vuetify/iconsets/fa'
import { mdi } from 'vuetify/iconsets/mdi'
import { ThemeType } from '~/types/theme'

export const vuetify = createVuetify({
  ssr: true,
  theme: {
    defaultTheme: process.server ? ThemeType.dark : getDefaultTheme(),
    themes: {
      [ThemeType.light]: {
        colors: { secondary: '#0085ff' }
      },
      [ThemeType.dark]: {
        colors: { secondary: '#0085ff' }
      }
    }
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
