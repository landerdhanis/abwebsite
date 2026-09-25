import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://www.antwerpsbadhuis.be',
  // Listen on all interfaces so the dev server is reachable from outside a Docker container.
  server: { host: true, port: 4321 },
});
