import { createRouter, createWebHistory } from 'vue-router'
import App from '../App.vue'
import TestView from '../TestView.vue'

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'App',
      component: App,
    },
    {
      path: '/test',
      name: 'Test',
      component: TestView,
    },
  ],
})
