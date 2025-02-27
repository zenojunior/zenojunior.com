import config from './config.ts'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  compatibilityDate: '2025-02-25',
  runtimeConfig: { public: config },
  components: true,
  typescript: { shim: false },
  
  css: [
    '@/assets/css/main.postcss',
  ],

  modules: [
    '@nuxt/content',
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt',
    'dayjs-nuxt',
    'nuxt-mdi',
  ],

  content: {
    build: {
      markdown: {
        highlight: {
          theme: 'poimandres',
        }
      },
    },
    renderer: {
      anchorLinks: { h2: false, h3: false, h4: false }
    }
  },

  dayjs: {
    locales: ['en', 'pt-br'],
    plugins: ['relativeTime', 'advancedFormat', 'localizedFormat', 'utc', 'timezone'],
    defaultLocale: 'en',
    defaultTimezone: 'America/Sao_Paulo',
  },

  postcss: {
    plugins: {
      'postcss-import': {},
      'tailwindcss/nesting': 'postcss-nesting',
      tailwindcss: {},
      autoprefixer: {},
    }
  },

  mdi: {
    defaultSize: '1.2em'
  },

  vite: {
    optimizeDeps: {
      include: ['dayjs']
    },
  },
  
})
