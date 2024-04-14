import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';
import { defineConfig } from 'vite';
import { configDefaults } from 'vitest/config';

const certFile = './local.pem';
const keyFile = './local-key.pem';

export default defineConfig({
  base: '/',
  plugins: [react()],
  server: {
    host: 'local.meusite.com.br',
    port: 3000,
    https: {
      key: fs.readFileSync(keyFile),
      cert: fs.readFileSync(certFile),
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    exclude: [
      ...configDefaults.exclude,
      'e2e',
      '**/node_modules/**',
      '**/tests/**',
    ],
    coverage: {
      enabled: false,
      provider: 'v8',
      reporter: ['text', 'json', 'html', 'lcov', 'clover', 'json-summary'],
      exclude: [
        '**/*.interface.*',
        '**/*styles*',
        '**/*.d.ts',
        '**/main.tsx',
        '**/src/styles/**',
        '**/src/enums/**',
        '**/src/service/**',
        '**/check-coverage.js',
      ],
    },
  },
});
