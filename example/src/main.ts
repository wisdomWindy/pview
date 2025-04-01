import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import pview from 'pview'
import '@pview/theme-chalk/index.scss'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(pview)
app.use(router)

app.mount('#app')
