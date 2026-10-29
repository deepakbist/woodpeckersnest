import { resolve } from 'path'
import { defineConfig } from 'vite'
import { ViteMinifyPlugin } from 'vite-plugin-minify'

export default defineConfig({
  base: './',
  plugins: [
    ViteMinifyPlugin({
      collapseWhitespace: true,
      removeComments: true,
      minifyCSS: true,
      minifyJS: true,
    }),
  ],
  build: {
    outDir: 'build',
    rollupOptions: {
      input: {
        main:     resolve(__dirname, 'index.html'),
        welcome:  resolve(__dirname, 'welcome.html'),
        menu:     resolve(__dirname, 'm8x2k9fw.html'),
      },
      output: {
        assetFileNames: 'assets/[name].[ext]',
        chunkFileNames: 'assets/[name].js',
        entryFileNames: 'assets/[name].js',
      },
    },
  },
})
