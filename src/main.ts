import { createPinia } from 'pinia'
import { createApp } from 'vue'

import App from './App.vue'
import router from './plugins/router'
import vuetify from './plugins/vuetify'
import i18n from './plugins/i18n'

const app = createApp(App)

app.use(vuetify)
app.use(router)
app.use(i18n)
app.use(createPinia())

app.mount('#app')
