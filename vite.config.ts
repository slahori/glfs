import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig(({ mode }) => {
  // Load only VITE_ variables
  const env = loadEnv(mode, process.cwd(), 'VITE_')

  return {
    base: './', // required for opening dist/index.html directly

    plugins: [react()],

    /*server: {
      host: '0.0.0.0',
      port: 3000,
    },*/
    server: {
      host: true,
      port: Number(process.env.PORT) || 5173,
      strictPort: false,
    },

    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
  }
})

