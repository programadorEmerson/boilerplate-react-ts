import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';
import { defineConfig } from 'vite';

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
  }
});
