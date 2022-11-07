import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // terserOptions: {
    //   compress: {
    //     keep_infinity: true,
    //     drop_console: true
    //   }
    // },
    // minify: 'terser',
    // chunk 大小警告的限制
    chunkSizeWarningLimit: 2000,
    outDir: 'dist'
  },
})
