import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  site: 'https://ordenador.github.io',
  base: '/blackgnome',
  build: {
    assets: 'assets',
  },
  image: {
    domains: ['picsum.photos', 'w.soundcloud.com'],
  },
});
