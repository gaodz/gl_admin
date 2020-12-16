import { createRouter, createWebHistory } from 'vue-router'
import login from '../pages/layout/login.vue'
import home from '../pages/layout/home.vue'
import demo from '../pages/layout/demo.vue'
import hello from '../pages/hello.vue'
const routerHistory = createWebHistory()

const router = createRouter({
  history: routerHistory,
  routes: [
    {
      path: '/',
      component: login
    },
    {
      path: '/home',
      component: home
    },
    {
      path: '/demo',
      component: demo
    },
    {
      path: '/hello',
      component: hello
    },
    // {
    //   path: '/demo',
    //   component: ()=>{import('')}
    // }
  ]
})

export default router
