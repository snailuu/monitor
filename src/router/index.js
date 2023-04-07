import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/log',
      name: 'log',
      component: () => import('../views/LogView.vue')
    },
    {
      path: '/video',
      name: 'video',
      component: () => import('../views/VideoView.vue')
    },

    {
      path: '/control',
      name: 'control',
      component: () => import('../views/ControlView.vue')
    }
  ]
})

export default router
