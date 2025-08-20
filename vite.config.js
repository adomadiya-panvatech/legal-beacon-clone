
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import svgr from 'vite-plugin-svgr'

export default defineConfig(async ({ mode }) => {
  const plugins = [
    react(),
    svgr({
      svgrOptions: {
        icon: true,
      },
    })
  ]

  // Load lovable-tagger only in development, using dynamic import to avoid ESM/CJS issues
  if (mode === 'development') {
    try {
      const { componentTagger } = await import('lovable-tagger')
      plugins.push(componentTagger())
    } catch (error) {
      console.warn('Could not load lovable-tagger:', error.message)
    }
  }

  return {
    server: {
      host: '::',
      port: 8080,
    },
    plugins,
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    build: {
      outDir: 'dist',
    },
  }
})
