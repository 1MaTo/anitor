import { config } from '@vue/test-utils'
import { i18n } from '~/plugins/setup/i18n'
import { vuetify } from '~/plugins/setup/vuetify'

import UiSearchField from '~/components/ui/SearchField.vue'

config.global.plugins = [vuetify, i18n]
config.global.components = { 'ui-search-field': UiSearchField }
