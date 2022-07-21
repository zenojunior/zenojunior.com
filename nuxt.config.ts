import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  preset: 'cloudflare',
  components: true,
  buildModules: [
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt',
  ],
  modules: [
    '@nuxt/content'
  ],
  content: {
    highlight: {
      // See the available themes on https://github.com/shikijs/shiki/blob/main/docs/themes.md#all-theme
      theme: 'dracula'
    }
  },
  css: [
    '@/assets/css/main.css',
  ],
  postcss: {
    plugins: {
      'postcss-import': {},
      'tailwindcss/nesting': 'postcss-nesting',
      tailwindcss: {},
      autoprefixer: {},
    }
  },
  autoImports: {
    dirs: [
      'composables/**'
    ]
  },
  build: {
    transpile: ['mdi-vue'],
  },
})
