import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/', // nom du dépôt GitHub
  plugins: [react()],
  server: {
    host: '0.0.0.0', 
    port: 5173,   
    open: false     
  },
})
