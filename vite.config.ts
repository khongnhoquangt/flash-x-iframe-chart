import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import {nodePolyfills} from "vite-plugin-node-polyfills";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), nodePolyfills({
      // To add only specific polyfills, add them here. If no option is passed, adds all polyfills
      include: ['path', 'crypto', 'stream'],
      // To exclude specific polyfills, add them to this list. Note: if include is provided, this has no effect
      exclude: [
          'http', // Excludes the polyfill for `http` and `node:http`.
      ],
      // Whether to polyfill specific globals.
      globals: {
          Buffer: true, // can also be 'build', 'dev', or false
          global: true,
          process: true,
      },
      // Override the default polyfills for specific modules.
      overrides: {
          fs: 'memfs',
      },
      protocolImports: true,
  }),],
  server: {
    cors: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization, Content-Length, X-Requested-With'
    },
    proxy: {
      // Proxy API calls to avoid CORS issues
      '/api': {
        target: 'https://api.orderly.org',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
        secure: true,
        headers: {
          'Origin': 'https://api.orderly.org'
        }
      },
      // Proxy WebSocket connections
      '/ws': {
        target: 'wss://ws-evm.orderly.org',
        ws: true,
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/ws/, '/ws')
      }
    }
  }
})