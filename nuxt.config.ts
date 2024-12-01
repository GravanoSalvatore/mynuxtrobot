// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  
  
  css: ['@/assets/styles/global.css', 'bootstrap/dist/css/bootstrap.css'],
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [// required
  // '@nuxtjs/i18n',
  '@pinia/nuxt', ],
  pinia: {
    autoImports: ['defineStore'], // Автоматический импорт defineStore
  },

  plugins: [
   
  ],
  app: {
    head: {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css',
        },
        {
          rel: 'stylesheet',
          href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css'
        }
      ],
      script: [
        {
          src: 'https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js',
          strategy: 'body'
        },
        {
          src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.min.js',
          strategy: 'body'
        }
      ]
    }
  }
})