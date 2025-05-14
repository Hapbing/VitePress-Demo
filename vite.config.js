import { fileURLToPath, URL } from 'node:url'
import ViteCSSModules from 'vite-plugin-css-modules';
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  base: './',
  plugins: [
    vue(),
    vueDevTools(),
    ViteCSSModules()
  ],
  css: {
    preprocessorOptions: {
      css: {

      }
    }
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})
