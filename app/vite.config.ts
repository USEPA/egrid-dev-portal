import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import md from 'vite-plugin-md';
import { resolve } from 'path';

export default defineConfig({
  plugins: [
    react(),
    md({
      markdownIt: {
        html: true,
        linkify: true,
        typographer: true,
      },

      frontmatter: true,
    }),
  ],
  base: '/egrid-dev-portal/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
      },
      output: {
        manualChunks(id) {
          if (id.includes('public/content')) {
            return 'content';
          }
        }
      }
    },
    copyPublicDir: true, // Ensure public files are copied
  },
  resolve: {
    alias: {
      '/content': '/public/content'
    }
  },
});
