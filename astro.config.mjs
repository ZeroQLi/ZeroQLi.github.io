import { defineConfig } from 'astro/config';
import svelte from "@astrojs/svelte";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://zeroqli.github.io',
  base: '/my-repo'
  integrations: [svelte(), tailwind()]
});