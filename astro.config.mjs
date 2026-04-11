// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import sitemap, { ChangeFreqEnum } from '@astrojs/sitemap';

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  site: 'https://jiilan.me',

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [sitemap({
    changefreq: ChangeFreqEnum.WEEKLY,
    priority: 0.7,
    lastmod: new Date(),
    serialize(item) {
      // Homepage gets highest priority
      if (item.url === 'https://jiilan.me/') {
        item.priority = 1.0;
        item.changefreq = ChangeFreqEnum.WEEKLY;
      }
      // Writing pages get high priority
      if (item.url.includes('/writing/') && item.url !== 'https://jiilan.me/writing/') {
        item.priority = 0.8;
        item.changefreq = ChangeFreqEnum.MONTHLY;
      }
      return item;
    },
  })],
  adapter: cloudflare()
});