export default {
  devtools: { enabled: true },
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
  build: {
    transpile: ['swiper'],
  },
}
