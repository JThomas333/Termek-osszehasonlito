import Vue3Toastify from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(Vue3Toastify, {
    autoclose : 2000,
    position: "top-right",
    theme : 'colored'
})

app.mount('#app')
