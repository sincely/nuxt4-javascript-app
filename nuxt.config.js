// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,
  future: {
    compatibilityVersion: 4
  },
  runtimeConfig: {
    public: {
      baseUrl: process.env.NUXT_BASE_URL
    }
  },
  modules: [
    '@nuxt/image',
    '@nuxt/icon',
    '@vueuse/nuxt',
    '@unocss/nuxt',
    '@pinia/nuxt',
    '@nuxtjs/color-mode',
    '@element-plus/nuxt'
  ],

  app: {
    pageTransition: { name: 'blur', mode: 'out-in' } // 页面过渡效果
  },

  css: [
    '@unocss/reset/tailwind.css',
    'element-plus/theme-chalk/dark/css-vars.css',
    '~/assets/scss/main.scss',
    '~/styles/index.scss',
    '~/styles/anime.css'
  ],
  colorMode: {
    classSuffix: ''
  },
  compatibilityDate: '2025-06-01'
})
