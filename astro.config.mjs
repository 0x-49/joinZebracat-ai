import { defineConfig } from 'astro/config';
import react from '@astrojs/react'; // Import the React integration

// https://astro.build/config
export default defineConfig({
  integrations: [react()], // Notice the parentheses: `react()` creates an object
});
