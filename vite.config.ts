import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import eslintPlugin from 'vite-plugin-eslint'
import { visualizer } from "rollup-plugin-visualizer"
// import dts from 'vite-plugin-dts'
import path from 'path'

export default defineConfig({
  build: {
    // Output compiled files to /dist.
    outDir: './dist',
    lib: {
      // Set the entry point (file that contains our components exported).
      entry: [
        path.resolve(__dirname, 'src/components/index.ts'),
        // path.resolve(__dirname, 'src/assets/themes/main/main.css'),
      ],
      // Name of the library.
      name: 'vuesty',
      // We are building for CJS and ESM, use a function to rename automatically files.
      // Example: my-component-library.esm.js
      fileName: (format) => `vuesty.${format}.js`,
    },
    rollupOptions: {
      // Vue is provided by the parent project, don't compile Vue source-code inside our library.
      external: ['vue'],
      output: { globals: { vue: 'Vue' } },
    },
  },


  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  plugins: [vue({ style: { filename: 'style.css' } }), eslintPlugin(),
    visualizer({
      emitFile: true,
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      file: 'stats.html'
    })
  ],
})
