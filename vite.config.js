import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/

export default defineConfig({
  plugins: [
    react(),
  ],
  server: { 
    proxy: {
      '/api': {
        target: 'http://26.114.63.238:1101',
        changeOrigin: true,
        secure: false,
      }
    },
    host: true,
    port: 5173 
  }
})
