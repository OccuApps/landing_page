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
    component: Home
  },
  {
    path: '/sobre-nosotros',
    name: 'About',
    component: Home
  },
  {
    path: '/contacto',
    name: 'Contact',
    component: Home
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          top: 0,
          behavior: 'smooth'
        })
      }, 100)
    })
  }
})

export default router