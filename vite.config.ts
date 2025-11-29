import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
  },
  define: {
    // This allows the code to access process.env.API_KEY without crashing in the browser
    // Vercel will inject the value at build time if it is configured in project settings
    'process.env.API_KEY': JSON.stringify(process.env.API_KEY),
    'process.env': {}
  }
});