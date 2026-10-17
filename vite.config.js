
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/morent-car-rental/',
  plugins: [tailwindcss()],
})
