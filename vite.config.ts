import { fileURLToPath, URL } from 'node:url'
import VueRouter from 'unplugin-vue-router/vite'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VueRouter({
      routesFolder: ['src/views', 'src/modules/foo/pages', 'src/modules/bar/pages'],
      dts: './typed-router.d.ts',
      extensions: ['vue']
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@proxy': fileURLToPath(new URL('./src/proxy', import.meta.url))
    }
  }
})
