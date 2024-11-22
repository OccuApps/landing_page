import { defineConfig } from 'vite'
import vue from "@vitejs/plugin-vue"
import path from "path"

export default defineConfig({
  base: './',
  plugins: [vue()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    port: 8000,
    host: '127.0.0.1'
  }
})