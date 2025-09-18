import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    chunkSizeWarningLimit: 1600, // increase bundle size limit to avoid warnings
    outDir: "dist",             // default build output directory
    sourcemap: false            // you can set true if you want debugging
  },
  server: {
    port: 5173,   // dev server port (optional, default 5173)
    open: true,   // auto open browser when running `npm run dev`
  },
})

