import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "fylo-landing-page/",
  resolve: {
    alias: {
      src: "/src",
      pages: "/src/pages",
      home: "/src/pages/home",
      layouts: "/src/layouts",
      utils: "/src/utils",
      assets: "/src/assets",
      sass: "/src/sass"
    }
  }
})
