import { defineConfig, type PluginOption } from 'vite'
import vue from '@vitejs/plugin-vue'
import eslintPlugin from 'vite-plugin-eslint'
import { visualizer } from 'rollup-plugin-visualizer'
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
    outDir: './dist',
    lib: {
      formats: ['es', 'cjs'],
      entry: resolve(__dirname, './src/index.ts'),
      name: 'Vuesty',
      fileName: 'index',
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        exports: 'named',
        globals: { vue: 'Vue' }
      },
    },
  },
  test: vitestConfig.test,
  plugins: [vue(), eslintPlugin(),
    dts({
      beforeWriteFile: (filePath, content) => {
        const newFilePath = filePath
          .replace('/src', '/types');

        return {
          filePath: newFilePath,
          content,
        };
      },
      skipDiagnostics: true,
    }),
    visualizer({
      emitFile: true
    }) as PluginOption
  ],
})
