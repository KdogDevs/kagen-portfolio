import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  plugins: [
    react({
      // Enable React Fast Refresh for better dev experience
      fastRefresh: true,
      // Use automatic JSX runtime
      jsxRuntime: 'automatic',
    })
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
  build: {
    // Enable minification for better performance
    minify: 'terser',
    // Optimize chunk size
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          motion: ['framer-motion'],
          ui: ['@heroicons/react', '@radix-ui/react-icons'],
        },
      },
    },
    // Target modern browsers for better performance
    target: 'esnext',
    // Enable source maps for debugging
    sourcemap: false,
  },
  server: {
    // Enable hot module replacement
    hmr: true,
    // Optimize dev server
    host: true,
  },
  optimizeDeps: {
    // Include commonly used dependencies
    include: [
      'react',
      'react-dom',
      'framer-motion',
      '@heroicons/react/24/outline',
      '@radix-ui/react-icons',
    ],
  },
});
