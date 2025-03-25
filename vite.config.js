import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist' // Default Vite output folder
  },
  server: {
    proxy: {
      '/api': {
        target: 'https://portfolio-backend-omega-jet.vercel.app',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
});