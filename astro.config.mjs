import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://avery-moon.github.io',
  base: '/averymoon.co',
  build: {
    format: 'directory'
  }
});
