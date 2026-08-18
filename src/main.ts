import { ViteSSG } from 'vite-ssg'
import { VueQueryPlugin } from '@tanstack/vue-query'
import './style.css'
import App from './App.vue'
import router from './router'

export const createApp = ViteSSG(
    App,
    router.options,
    ({ app }) => {
        app.use(VueQueryPlugin)
    },
)
