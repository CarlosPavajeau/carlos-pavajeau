import sitemap from '@astrojs/sitemap'
import tailwind from '@astrojs/tailwind'
import { defineConfig } from 'astro/config'

import mdx from '@astrojs/mdx'

// https://astro.build/config
export default defineConfig({
  site: 'https://carlos-pavajeau.cantte.com/',
  integrations: [tailwind(), sitemap(), mdx()],
})
