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

export default defineConfig({
  base: '/ham-train/',
  build: {
    outDir: 'docs',
  },
  plugins: [react(), tailwindcss(), nojekyll()],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
})
