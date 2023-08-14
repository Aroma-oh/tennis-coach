import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import react from '@vitejs/plugin-react';
import { ssr } from 'vite-plugin-ssr/plugin';

export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    ssr({ prerender: true })
  ],
});
