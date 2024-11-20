import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/descubre',
    name: 'Discover',
    component: Home,
    beforeEnter: (to, from, next) => {
      next({ path: '/', hash: '#descubre' })
    }
  },
  {
    path: '/sobre-nosotros',
    name: 'About',
    component: Home,
    beforeEnter: (to, from, next) => {
      next({ path: '/', hash: '#sobre-nosotros' })
    }
  },

  {
    path: '/contactanos',
    name: 'Contact',
    component: Home,
    beforeEnter: (to, from, next) => {
      next({ path: '/', hash: '#contactanos' })
    }
  },
  {
    path: '/registro',
    name: 'Register',
    component: () => import('../views/Register.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
        top: 80
      }
    }
    return { top: 0 }
  }
})

export default router