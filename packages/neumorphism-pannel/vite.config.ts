import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: 'index.ts',
      external: ['react'],
      output: {
        globals: { react: 'react' },
        dir: 'dist',
        format: 'commonjs'
      }
    }
  }
})
