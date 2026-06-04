// @ts-check

import { readFileSync } from 'node:fs'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import tailwindcss from '@tailwindcss/vite'

import { defineConfig, fontProviders } from 'astro/config'
import { parse } from 'yaml'

// Root config.yaml is the single source of truth for personal/site info.
const config = parse(readFileSync(new URL('../../config.yaml', import.meta.url), 'utf-8'))

// https://astro.build/config
export default defineConfig({
  site: config.url,
  integrations: [mdx(), sitemap()],

  markdown: {
    // Token colors only; the code block background is forced to the site theme in CSS.
    shikiConfig: { theme: 'catppuccin-mocha' },
  },

  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: 'Inter',
      cssVariable: '--font-inter',
    },
    {
      provider: fontProviders.fontsource(),
      name: 'JetBrains Mono',
      cssVariable: '--font-mono',
    },
  ],

  vite: {
    plugins: [tailwindcss()],
  },
})
