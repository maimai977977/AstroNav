// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
    site: 'https://maimai977977.github.io',
     base: '/AstorNav/',     // 注意开头的斜杠和末尾的斜杠
  vite: {
    plugins: [tailwindcss()]
  },
   devToolbar: {
    enabled: false
  }
});