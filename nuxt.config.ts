export default {
  devtools: { enabled: true },
  modules: ['nuxt-swiper', 'nuxt-directus'],
  routes: { '/': { prerender: true }, '/*': { cors: true } },
  runtimeConfig: {
    public: {
      directusApiUrl: 'https://naturaonecoat-cc85b1fdbbef.herokuapp.com',
      directusApiKey: process.env.DIRECTUS_API_KEY,
    },
  },
  directus: {
    devtools: true,
    url: 'https://naturaonecoat-cc85b1fdbbef.herokuapp.com',
  },
  plugins: ['~/plugins/axios.js'],
  axios: {
    baseURL: 'https://naturaonecoat-cc85b1fdbbef.herokuapp.com',
  },
  buildModules: ['nuxt-gsap-module'],
  swiper: {
    // Swiper options
    //----------------------
    // prefix: 'Swiper',
    // styleLang: 'css',
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
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Futura+PT:wght@400;500;700&display=swap',
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
}
