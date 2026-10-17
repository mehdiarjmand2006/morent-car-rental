
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'node:path'

export default defineConfig({
  base: '/morent-car-rental/',
  plugins: [tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        detail: resolve(__dirname, 'Detail-Car-Rent.html'),
        category: resolve(__dirname, 'Category-Car-Rent.html'),
      },
    },
  },
})
