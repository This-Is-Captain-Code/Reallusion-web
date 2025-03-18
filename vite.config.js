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
<<<<<<< Updated upstream
=======
  server: {
    //host: true,
    // hmr: {
    //   clientPort: 443,
    //   host: 'c46ca654-21b8-42d1-a038-a28b400c793f-00-1m4p3q6wegvpy.kirk.replit.dev'
    // },
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
      },
    },
  }
>>>>>>> Stashed changes
})
