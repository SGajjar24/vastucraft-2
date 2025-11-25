import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '');
  return {
    plugins: [
      react(),
      ViteImageOptimizer({
        png: { quality: 80 },
        jpeg: { quality: 75 },
        webp: { quality: 80, lossless: true },
        avif: { quality: 70, lossless: true },
      }),
    ],
    resolve: {
      alias: {
        "@": "/src",
      },
    },
    define: {
      'process.env.API_KEY': JSON.stringify(env.API_KEY),
      'process.env.VITE_WEB3FORMS_ACCESS_KEY': JSON.stringify(env.VITE_WEB3FORMS_ACCESS_KEY),
    },
    server: {
      port: 3000
    },
    build: {
      outDir: 'dist',
      sourcemap: false,
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ['react', 'react-dom', 'react-router-dom'],
            animations: ['framer-motion'], // If we add framer-motion later
          }
        }
      }
    }
  };
});