import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'public',
    rollupOptions: {
      input: 'main.js', // Adjust the path as needed
    },
  }
})

