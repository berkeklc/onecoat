export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['nuxt-swiper', 'nuxt-directus'],
  runtimeConfig: {
    public: {
      directusApiUrl:
        process.env.DIRECTUS_API_URL ||
        'https://naturaonecoat-cc85b1fdbbef.herokuapp.com',
      directusApiKey: process.env.DIRECTUS_API_KEY,
    },
  },
  directus: {
    devtools: true,
    url: 'http://localhost:8055',
  },
  plugins: ['~/plugins/axios.js'],
  swiper: {
    // Swiper options
  },
  css: [
    'bootstrap/dist/css/bootstrap.min.css',
    'bootstrap-icons/font/bootstrap-icons.css',
    '@/assets/css/global.css',
  ],
  app: {
    head: {
      link: [
        {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com',
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Futura+PT:wght@400;500;700&display=swap',
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Anton&display=swap',
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital,opsz,wght@0,6..96,400..900;1,6..96,400..900&display=swap',
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Arial:wght@100&display=swap',
        },
      ],
      script: [
        {
          src: 'https://static.elfsight.com/platform/platform.js',
          'data-use-service-core': true,
          defer: true,
        },
      ],
    },
  },
})
