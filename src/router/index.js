import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/layout/login.vue'
import demo from '../pages/layout/demo.vue'

const routerHistory = createWebHistory()

const router = createRouter({
  history: routerHistory,
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/demo',
      component: demo
    },
    // {
    //   path: '/demo',
    //   component: ()=>{import('')}
    // }
  ]
})

export default router
