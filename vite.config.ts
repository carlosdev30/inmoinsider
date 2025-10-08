import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    // Optimizaciones para Cloudflare Pages
    target: 'es2015',
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'lucide': ['lucide-react'],
        },
      },
    },
    // Optimizar assets
    assetsInlineLimit: 4096,
    cssCodeSplit: true,
    sourcemap: false,
    chunkSizeWarningLimit: 1000,
  },
  // Optimizar servidor de preview
  preview: {
    port: 8788,
    strictPort: false,
  },
});
