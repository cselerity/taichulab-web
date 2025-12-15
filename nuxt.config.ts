import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  app: {
    head: {
      title: '太初元启 - Taichu Lab',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: '' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/imgs/favicon.png' }
      ],
    },
    buildAssetsDir: '/assets',
  },
  css: ['~/public/css/global.css'],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  devtools: { enabled: true },
  ssr: false,
  modules: ['usebootstrap', '@nuxtjs/i18n'],
  i18n: {
    locales: [
      { code: 'en', file: 'en.json' },
      { code: 'zh', file: 'zh.json' }
    ],
    lazy: true,
    langDir: 'locales',
    defaultLocale: 'zh',
    strategy: 'no_prefix',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_locale',
      cookieCrossOrigin: true,
      alwaysRedirect: false,
      fallbackLocale: 'zh',
    },
  },
  usebootstrap: {
    scss: true,
    image: false,
    fonts: false,
    sitemap: false,
    robots: true,
    shiki: false,
    leaflet: false,
    mdc: false,
    tiptap: false,
    pwa: false,
    aos: false,
    echarts: false,
  },
  build: {
    analyze: true,
    transpile: ['bootstrap'],
  },
})
