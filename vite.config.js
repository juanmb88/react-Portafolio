import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(() => ({
  plugins: [react()],
  server: {
    port: parseInt(import.meta.env.VITE_PORT) || 3000, // Usamos import.meta.env
    strictPort: true,
  },
  build: {
    outDir: 'dist',
  },
}));