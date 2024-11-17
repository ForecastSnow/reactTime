import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    rollupOptions: {
      // Aquí puedes agregar opciones de configuración específicas de Rollup si las necesitas
      input: './src/main.jsx', // Cambia esto si tu entrada es diferente
      output: {
        dir: 'dist', // Carpeta de salida para los archivos generados
        format: 'es', // Formato de salida (puedes cambiarlo si necesitas otro tipo)
      },
    },
  },
})
