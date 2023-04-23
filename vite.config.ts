import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import { resolve } from 'path';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src', 'index.ts'),
      name: 'DatePills',
      fileName: (format) => `vue-date-pills.${format}.js`
    },
    rollupOptions: {
      external: ['vue', 'dayjs']
    }
  },
  server: {
    open: true
  }
});
