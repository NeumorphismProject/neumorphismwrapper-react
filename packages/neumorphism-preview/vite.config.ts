import { defineConfig, loadEnv, ConfigEnv } from 'vite';
import react from '@vitejs/plugin-react';
// import { viteMockServe } from 'vite-plugin-mock';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig((mode: ConfigEnv) => {
  // const env = loadEnv(mode.mode, process.cwd());

  const isDev = mode.mode === 'development';
  // console.log('=====isDev=', isDev);
  // console.log('=====MODE=', mode.mode);
  // console.log('=====VITE_BASE_URL=', env.VITE_BASE_URL);
  const baseUrl = '';
  return {
    base: `${baseUrl}/`,
    envDir: 'env',
    plugins: [
      react(),
      // vitePluginForArco(),
      // viteMockServe({
      //   mockPath: 'mock',
      //   localEnabled: isDev,
      //   prodEnabled: !isDev,
      //   supportTs: true,
      //   watchFiles: true
      //   // injectCode: `
      //   //     import { setupProdMockServer } from './mockProdServer';
      //   //     setupProdMockServer();
      //   //   `,
      //   // injectFile: path.resolve(process.cwd(), 'src/main.jsx')
      // })
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src') // src 路径
      }
    },
    server: {
      port: 3001,
      host: '0.0.0.0',
      open: true
      // proxy: {
      //   "/api": {
      //     target: "https://624659e7e3450d61b0fd6ba2.mockapi.io/api/v1",
      //     changeOrigin: true,
      //     rewrite: (path) => path.replace(/^\/dev-api/, ""),
      //   },
      // },
    },
    build: {
      terserOptions: {
        compress: {
          keep_infinity: true,
          drop_console: true
        }
      },
      minify: 'terser',
      // chunk 大小警告的限制
      chunkSizeWarningLimit: 2000,
      outDir: `dist${baseUrl}`
    },
    css: {
      // preprocessorOptions: {
      //   less: {
      //     // additionalData: `@import "${path.resolve(__dirname, 'src/styles/variable.less')}";`,
      //     // 支持内联 JavaScript
      //     javascriptEnabled: true
      //   }
      // }
    }
  };
});
