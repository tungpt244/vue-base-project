import './assets/index.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { setupI18n } from './i18n'

import App from './app.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(setupI18n())

app.mount('#app')
