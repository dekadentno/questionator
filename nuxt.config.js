
export default {
  mode: 'universal',
  generate: {
    fallback: true
  },
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'google-site-verification', content: 'yom_ABTiOikF2MO2jhh4zlbJl7ezmrYNdNxEoibVOaU' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { href: 'https://fonts.googleapis.com/css?family=Source+Code+Pro&display=swap', ref: 'stylesheet' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '~assets/scss/style.scss'
  ],
  styleResources: {
    // scss: ['assets/scss/tools/_functions.scss', 'assets/scss/source/_colors.scss', 'assets/scss/source/_variables.scss', 'assets/scss/tools/_mixins.scss']
    scss: ['assets/scss/tools/_mixins.scss']
  },
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    '@nuxtjs/global-components',
    '@nuxtjs/fontawesome'
  ],
  fontawesome: {
    icons: {
      solid: ['faCopy', 'faPenAlt', 'faQrcode']
    }
  },
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/pwa',
    '@nuxtjs/robots',
    '@nuxtjs/sitemap',
    '@nuxtjs/dotenv',
    '@nuxtjs/style-resources',
    [
      '@nuxtjs/firebase',
      {
        config: {
          apiKey: 'AIzaSyCF9RSGa3_ge8Tv4Dzt9THm9NzXtwlCriQ',
          authDomain: 'questionator-47b58.firebaseapp.com',
          databaseURL: 'https://questionator-47b58.firebaseio.com',
          projectId: 'questionator-47b58',
          storageBucket: 'questionator-47b58.appspot.com',
          messagingSenderId: '4153525338',
          appId: '1:4153525338:web:32873596edc1ebdcf1c463',
          measurementId: 'G-EVG1BP15C4'
        },
        services: {
          realtimeDb: true,
          analytics: true
        // auth: true // Just as example. Can be any other service.
        }
      }
    ],
    [
      'vue-sweetalert2/nuxt',
      {
        confirmButtonColor: '#41b882',
        cancelButtonColor: '#ff7674'
      }
    ]
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
