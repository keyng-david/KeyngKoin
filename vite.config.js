import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/KeyngKoin/',
  plugins: [react()],
  build: {
    rollupOptions: {
      input: 'index.html',
    },
  },
  server: {
    open: false,
    http: true,
    ssr: false,
    historyApiFallback: true, // Add this line
  },
});