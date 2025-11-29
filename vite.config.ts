import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Declaration to satisfy linter if opened in editor, 
// though tsconfig exclude handles the build.
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