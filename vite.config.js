import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    sourcemap: false, // Desactiva completamente los sourcemaps
  },
  esbuild: {
    sourcemap: false, // Para procesos internos de Vite
  },
  server: {
    host: true, // Permite que Railway escuche desde cualquier IP
    port:  4173, // Usa el puerto asignado por Railway
  },
})
