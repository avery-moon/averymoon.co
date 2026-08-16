import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://averymoon.co',
  base: '/',
  build: {
    format: 'directory'
  }
});
