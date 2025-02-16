// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react()],
  server: {
    port: 3000,
    host: true,
    headers: {
      'Cache-Control': 'no-store, max-age=0',
    }
  },
  vite: {
    server: {
      watch: {
        usePolling: true,
      },
      hmr: {
        protocol: 'ws',
      }
    }
  }
});
