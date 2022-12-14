import { createRouter, createWebHistory } from 'vue-router'
import App from '../App.vue'

export default createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: App,
        }
    ],
})
