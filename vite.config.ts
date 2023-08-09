import { fileURLToPath, URL } from 'node:url'
import VueRouter from 'unplugin-vue-router/vite'
import Layouts from 'vite-plugin-vue-layouts'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import Unfonts from 'unplugin-fonts/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Layouts({
      layoutsDirs: 'src/layouts',
      defaultLayout: 'default'
    }),
    VueRouter({
      routesFolder: ['src/views', 'src/modules/foo/pages', 'src/modules/bar/pages'],
      dts: './typed-router.d.ts',
      extensions: ['.vue']
    }),
    Components({
      dirs: ['src/components'],
      dts: true
    }),
    Unfonts({
      google: {
        families: [
          {
            name: 'Ubuntu Mono',
            styles: 'wght@400;500;600;700'
          }
        ]
      }
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@proxy': fileURLToPath(new URL('./src/proxy', import.meta.url))
    }
  }
})
