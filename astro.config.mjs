// @ts-check
import { defineConfig,passthroughImageService } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import vue from '@astrojs/vue';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [vue()],
  image: {
    service: passthroughImageService(),
  },
});