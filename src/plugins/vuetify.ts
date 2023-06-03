import '@fortawesome/fontawesome-free/css/all.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import { aliases, fa } from 'vuetify/iconsets/fa'
import { getDefaultTheme } from '@/utils/theme'

const defaultTheme = getDefaultTheme()

const vuetify = createVuetify({
  theme: { defaultTheme: defaultTheme },
  icons: {
    defaultSet: 'fa',
    aliases,
    sets: {
      fa
    }
  }
})

export default vuetify
