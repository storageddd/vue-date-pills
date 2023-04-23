import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import { resolve } from 'path';
import vue from '@vitejs/plugin-vue';

export default ({ mode }: any) => {
  const isProductionMode = mode === 'production';

  return defineConfig({
    plugins: [vue()],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    },
    build: {
      lib: isProductionMode ? {
        entry: resolve(__dirname, 'src', 'index.ts'),
        name: 'DatePills',
        fileName: (format: string) => `vue-date-pills.${format}.js`
      } : undefined,
      rollupOptions: {
        external: isProductionMode ? ['vue', 'dayjs'] : []
      },
      outDir: isProductionMode ? 'dist' : 'docs'
    },
    server: {
      open: true
    }
  });
}
