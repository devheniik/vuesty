import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import type { UserConfig as VitestUserConfigInterface } from "vitest/config"
import dts from 'vite-plugin-dts'
import { resolve } from 'path'

const vitestConfig: VitestUserConfigInterface = {
  test: {
    globals: true,
    environment: "jsdom",
  },
}

export default defineConfig({
  build: {
    target: ['edge90', 'chrome90', 'firefox90', 'safari15'],
    lib: {
      formats: ['es', 'cjs'],
      entry: resolve(__dirname, './src/index.ts'),
      name: 'Vuesty',
      fileName: 'index',
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['vue'],
      output: {
        exports: 'named',
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: 'Vue'
        },
      },
    },
  },
  test: vitestConfig.test,
  plugins: [vue(),
    dts({
      beforeWriteFile: (filePath, content) => {
        const newFilePath = filePath
          .replace('src', 'types');

        return {
          filePath: newFilePath,
          content,
        };
      },
      skipDiagnostics: true,
    })
  ],
})
