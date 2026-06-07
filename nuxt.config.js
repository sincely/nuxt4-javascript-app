// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,
  future: {
    compatibilityVersion: 4
  },
  app: {
    head: {
      title: '我的 Nuxt 4 应用',
      meta: [
        { name: 'description', content: '基于 Nuxt 4 的现代 Web 应用' }
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }
      ]
    },
  },

  runtimeConfig: {
    public: {
      baseUrl: process.env.NUXT_BASE_URL,
      apiBase: process.env.NUXT_APP_API_ROOT || 'http://10.102.129.12:18088'
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
    baseURL: process.env.NUXT_APP_BASE_URL || '/', // 通过环境变量配置子路径
    pageTransition: { name: 'blur', mode: 'out-in' } // 页面过渡效果
  },
  elementPlus: {
    // 配置图标组件前缀，设置为 'ElIcon' 即可启用自动导入
    icon: "ElIcon",
    // 如果你需要自定义主题，可以设置为 'scss'
    // importStyle: 'scss',
  },
  //
  nitro: {
    compressPublicAssets: true,
    minify: true,
    devProxy: {
      '/web': {
        target: 'http://10.102.129.12:18088/web',
        changeOrigin: true,
      }
    },
    // routeRules: {
    //   "/web/**": {
    //     proxy: 'http://10.102.129.12:18088/web/**'
    //   }
    // }
  },
  vite: {
    server: {
      proxy: {
        '/api': {
          target: 'http://10.102.129.12:18088',
          changeOrigin: true
        }
      }
    }
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
