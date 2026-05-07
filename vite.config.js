import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa'
import { visualizer } from 'rollup-plugin-visualizer'
import viteCompression from 'vite-plugin-compression'

export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg', 'apple-touch-icon.png', 'masked-icon.svg'],
      manifest: {
        name: 'PowderFlow Dashboard',
        short_name: 'PowderFlow',
        description: 'Powder Coating Management System',
        theme_color: '#0a0f1d',
        background_color: '#0a0f1d',
        display: 'standalone',
        icons: [
          {
            src: 'vite.svg',
            sizes: '192x192',
            type: 'image/svg+xml'
          },
          {
            src: 'vite.svg',
            sizes: '512x512',
            type: 'image/svg+xml'
          }
        ]
      }
    }),
    // bundle visualizer (runs during build to generate dist/stats.html)
    visualizer({ filename: 'dist/stats.html', open: false }),
    // compress build assets (brotli)
    viteCompression({ brotli: true })
  ],
  server: {
    host: true,   // Agar bisa diakses dari HP via WiFi
    port: 5173,
    allowedHosts: 'all'
  },
  build: {
    target: 'es2022',
    minify: 'esbuild',
    cssCodeSplit: true,
    chunkSizeWarningLimit: 1500,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('recharts')) return 'vendor.recharts'
            if (id.includes('xlsx')) return 'vendor.xlsx'
            if (id.includes('firebase')) return 'vendor.firebase'
            return 'vendor'
          }
        }
      }
    },
    sourcemap: false
  },
  optimizeDeps: {
    esbuildOptions: {
      target: 'es2022'
    }
  }
})
