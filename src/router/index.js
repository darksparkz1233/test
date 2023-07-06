import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/formMain.vue')
    },
    {
      path: '/registered',
      name: 'registered',
      component: () => import('../views/formSignUp.vue')
    }
  ]
})

export default router
