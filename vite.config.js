import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'public',
    base: '/personalsite/', // Adjust this to match your GitLab Pages URL structure
    rollupOptions: {
      input: '/src/main.jsx', // Adjust the path as needed
    },
  },
})

