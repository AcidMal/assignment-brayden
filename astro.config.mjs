import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import vercel from '@astrojs/vercel';
import tailwind from '@astrojs/tailwind';
import icon from 'astro-icon';

export default defineConfig({
  integrations: [react(), tailwind(), icon()],
  output: 'static',
  adapter: vercel(),
  vite: {
    ssr: {
      noExternal: ['react-icons'],
    },
  }
});


