import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
        input: {
            webview: resolve(__dirname, 'src/webview/index.tsx'),
            sidebar: resolve(__dirname, 'src/sidebar/index.tsx'),
        },
        output: {
            entryFileNames: '[name].js',
            chunkFileNames: '[name].js',
            assetFileNames: '[name].[ext]',
        },
    },
    outDir: resolve(__dirname, '../out'),
},
})
