import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Sitemap from 'vite-plugin-sitemap'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Sitemap({
      hostname: 'https://webbea.qa',
      // We manage sitemap.xml manually in /public for full hreflang + image sitemap support.
      // This plugin generates a fallback sitemap if /public/sitemap.xml is missing.
      dynamicRoutes: [
        '/',
        '/about',
        '/contact',
        '/work',
        '/packages',
      ],
      // Do NOT auto-generate robots.txt — we manage it manually in /public/robots.txt
      generateRobotsTxt: false,
      // Exclude 404 and error pages from auto-generated sitemap
      exclude: ['/404', '/error'],
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    // Generate source maps only for production debugging (omit in CI/CD if preferred)
    sourcemap: false,
    // Chunk splitting for better caching
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['vue', 'vue-router'],
          head: ['@vueuse/head'],
        },
      },
    },
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3001',
        changeOrigin: true,
        secure: false,
      }
    }
  }
})
