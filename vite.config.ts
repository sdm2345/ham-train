import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path'
import { writeFileSync } from 'fs'

const nojekyll = (): import('vite').Plugin => ({
  name: 'nojekyll',
  closeBundle() {
    writeFileSync('docs/.nojekyll', '')
  },
})

const isCF = process.env.BUILD_TARGET === 'cf'

export default defineConfig({
  base: isCF ? '/' : '/ham-train/',
  build: {
    outDir: isCF ? 'dist' : 'docs',
  },
  plugins: [react(), tailwindcss(), ...(isCF ? [] : [nojekyll()])],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
})
