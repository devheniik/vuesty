import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import eslintPlugin from 'vite-plugin-eslint'
import dts from 'vite-plugin-dts'
import path from 'path'

export default defineConfig({

  build: {
    lib: {
      entry:
        [

        path.resolve(__dirname, 'src/components/index.js')
      ,
        path.resolve(__dirname, 'src/assets/themes/main/main.css')
      ]
      ,
      name: 'CLib',
      fileName: format => `сl-lib.${format}.js`,

    },
    // lib: {
    //   entry: path.resolve(__dirname, 'src/components/index.js')
    // },
    rollupOptions: {
      external: ['vue'],
      output: {
        // Provide global variables to use in the UMD build
        // Add external deps here
        globals: {
          vue: 'Vue',
        },
      }
    },
  },

  plugins: [vue(), eslintPlugin(), dts()],
})
