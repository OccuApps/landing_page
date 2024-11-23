import { createRouter, createWebHistory } from 'vue-router'
import path from 'path'
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
    if (savedPosition) {
      return savedPosition;
    }

    if (to.path === from.path) {
      return false;
    }

    return { 
      top: 0,
      behavior: 'smooth'
    }
  }
});

// Navigation guard for section scrolling
router.beforeEach((to, from, next) => {
  if (to.path !== '/' && to.path !== from.path) {
    to.meta.scrollToSection = to.path.substring(1);
  }
  next();
});

router.afterEach((to) => {
  if (to.meta.scrollToSection) {
    const element = document.getElementById(to.meta.scrollToSection);
    if (element) {
      const navHeight = 80;
      window.scrollTo({
        top: element.offsetTop - navHeight,
        behavior: 'smooth'
      });
    }
  }
});



export default router;