import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/layout/login.vue'
import demo from '../pages/layout/demo.vue'
import hello from '../pages/hello.vue'
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
