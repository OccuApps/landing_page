import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
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
  ],
  scrollBehavior(to, from, savedPosition) {
    // Prevent automatic scrolling on route change
    return false;
  }
});

export default router;