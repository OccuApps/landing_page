import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './style.css'

const app = createApp(App)

// Error handling
app.config.errorHandler = (err) => {
  console.error('Global error:', err)
}

// Router setup
app.use(router)

// Mount application
const mountPoint = document.getElementById('app')
if (mountPoint) {
  app.mount('#app')
} else {
  console.error('Failed to find #app element')
}