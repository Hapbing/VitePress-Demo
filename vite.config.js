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
    ViteCSSModules(),

  ],
  build: {
    target: ["chrome87", "edge88", "es2020", "firefox78", "safari14"]
  },

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
