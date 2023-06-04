import { createPinia } from 'pinia'
import { createApp } from 'vue'

import App from './App.vue'
import i18n from './plugins/i18n'
import router from './plugins/router'
import vuetify from './plugins/vuetify'

const app = createApp(App)

app.use(i18n)
app.use(vuetify)
app.use(router)
app.use(createPinia())

app.mount('#app')
