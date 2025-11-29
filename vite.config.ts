import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Manually declare process to avoid TS2580 error without @types/node
declare const process: any;

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
  },
  define: {
    'process.env.API_KEY': JSON.stringify(process.env.API_KEY),
    'process.env': {}
  }
});