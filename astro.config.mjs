import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://brunofantinc.github.io',
  base: '/trip-itinerary',
  vite: {
    plugins: [tailwindcss()],
  },
});
