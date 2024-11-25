import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

// production check
const isProduction = process.env.NODE_ENV === 'production';

export default defineConfig({
  // Use different base routes for production and development
  base: isProduction 
    ? process.env.VITE_APP_PROD_BASE_ROUTE || '/landing_page'
    : process.env.VITE_APP_BASE_ROUTE || '/',
  plugins: [vue()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    port: 8000,
    host: "127.0.0.1",
  },
  build: {
    // Optimize chunk size
    chunkSizeWarningLimit: 2000,
    // Optimize asset handling
    assetsInlineLimit: 4096,
    rollupOptions: {
      output: {
        // Optimize asset file names for better caching
        assetFileNames: 'assets/[name].[hash][extname]',
        chunkFileNames: 'assets/[name].[hash].js',
        // Optimize code splitting
        manualChunks: undefined
      }
    }
  },
  // Optimize asset caching
  experimental: {
    renderBuiltUrl(filename, { hostType }) {
      if (hostType === 'js') {
        return { runtime: `window.__publicPath + ${JSON.stringify(filename)}` }
      }
      return filename
    }
  }
});