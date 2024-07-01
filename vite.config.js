import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/KeyngKoin/',
  plugins: [react()],
  server: {
    open: false,
    http: true,
    ssr: false,
  },
})
