import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/KeyngKoin/',  // Ensure this matches your GitHub repository name
  plugins: [react()],
  build: {
    rollupOptions: {
      input: '/index.html',  // Ensure the correct input file
    },
  },
  server: {
    open: false,
    http: true,
    ssr: false,
  },
});
