import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

// Get base route based on environment
const baseRoute = import.meta.env.MODE === 'production' 
  ? import.meta.env.VITE_APP_PROD_BASE_ROUTE 
  : import.meta.env.VITE_APP_BASE_ROUTE || '/'

// Define routes
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
  },
  // Add a catch-all route for 404
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: Home // WIP create a specific 404 component
  }
]

const router = createRouter({
  history: createWebHistory(baseRoute),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return false;
  }
});

export default router;