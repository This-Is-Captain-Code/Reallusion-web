
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    host: '0.0.0.0',
    allowedHosts: [
      'c46ca654-21b8-42d1-a038-a28b400c793f-00-1m4p3q6wegvpy.kirk.replit.dev',
      'all'
    ]
  }
})
