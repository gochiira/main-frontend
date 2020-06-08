const envPath = `config/.env.${process.env.NODE_ENV || 'local'}`
require('dotenv').config({ path: envPath })

export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    titleTemplate: '%s | ' + 'ごちイラ',
    title: 'ごちイラ',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'apple-mobile-web-app-capable', content: 'yes' },
      { name: 'robots', content: 'noindex,nofollow,noarchive' },
      { hid: 'description', name: 'description', content: 'ごちうさイラスト専用検索エンジン' },
      { hid: 'og:title', property: 'og:title', content: 'ごちイラ' },
      { hid: 'og:description', property: 'og:description', content: 'ごちうさイラスト専用検索エンジン' },
      { hid: 'og:site_name', property: 'og:site_name', content: 'ごちイラ' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:locale', property: 'og:locale', content: 'ja_JP' },
      { hid: 'og:url', property: 'og:url', content: 'https://illust.gochiusa.team' },
      { hid: 'og:image', property: 'og:image', content: 'https://i.imgur.com/e1GqxKW.png' },
      { name: 'twitter:card', content: 'summary' },
      { name: 'twitter:title', content: 'ごちイラ' },
      { name: 'twitter:description', content: 'ごちうさイラスト専用検索エンジン' },
      { name: 'twitter:image', content: 'https://i.imgur.com/e1GqxKW.png' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** WebFont
  */
  webfontloader: {
    google: {
      families: [
        'Arvo',
        'Noto+Sans&display=swap'
      ]
    }
  },
  /*
  ** PWA Config
  */
  workbox: {
    dev: false
  },
  manifest: {
    name: 'Gochiusa Illustrations',
    short_name: 'ごちイラ',
    description: 'ごちうさイラスト専用検索エンジン',
    lang: 'ja',
    theme_color: '#7b5544',
    background_color: '#7b5544',
    display: 'standalone',
    scope: 'https://illust.gochiusa.team',
    start_url: 'https://illust.gochiusa.team'
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    { src: '~assets/main.scss', lang: 'scss' }
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~plugins/axios',
    '~plugins/vue-scrollto',
    '~plugins/vue2-touch-events',
    '~plugins/mixin-common',
    { src: '~plugins/vue-lazyload', ssr: false },
    { src: '~plugins/vue-infinite-loading', ssr: false },
    { src: '@/plugins/vue-input-tag', ssr: false }
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxtjs/eslint-module',
    'nuxt-purgecss'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/onesignal',
    '@nuxtjs/pwa',
    '@nuxtjs/auth',
    '@nuxtjs/dotenv',
    '@nuxtjs/device',
    'cookie-universal-nuxt',
    'nuxt-fontawesome',
    'nuxt-webfontloader',
    'nuxt-device-detect',
    'nuxt-logrocket',
    'nuxt-precompress',
    '~modules/axCache'
  ],
  /*
  ** Post Notify
  */
  oneSignal: {
    init: {
      appId: 'a1b6ec4e-76d3-4c78-bdab-7692ca367e73',
      allowLocalhostAsSecureOrigin: true,
      welcomeNotification: {
        disable: false
      }
    },
    importScripts: ['sw.js']
  },
  /*
  ** Nuxt-fontawesome
  */
  fontawesome: {
    imports: [
      {
        set: '@fortawesome/free-solid-svg-icons', // Solid icons
        icons: [
          'faCalendar',
          'faHeart',
          'faBookmark',
          'faPenFancy',
          'faUserEdit',
          'faBroadcastTower',
          'faSearch',
          'faUser',
          'faUsers',
          'faTags',
          'faPaintBrush',
          'faIdCard',
          'faLock',
          'faSignInAlt',
          'faTicketAlt',
          'faHome',
          'faInfo',
          'faQuestionCircle',
          'faSitemap',
          'faCloudUploadAlt',
          'faExternalLinkAlt',
          'faAngleUp',
          'faImage',
          'faBell',
          'faKeyboard',
          'faUpload',
          'faChevronDown',
          'faChevronUp',
          'faList',
          'faPlusSquare'
        ]
      },
      {
        set: '@fortawesome/free-brands-svg-icons', // Brand icons
        icons: ['faTwitterSquare', 'faLine']
      }
    ]
  },
  /*
  ** Authorization
  */
  auth: {
    cookie: {
      prefix: 'auth.',
      options: {
        path: '/',
        samesite: 'lax',
        secure: process.env.NODE_ENV === 'production'
      }
    },
    redirect: {
      login: '/login', // 未ログイン時のリダイレクト先
      logout: '/login', // ログアウト処理を実行した直後のリダイレクト先
      callback: false, // コールバックURL
      home: '/' // ログイン後に遷移するページ
    },
    strategies: {
      local: {
        endpoints: {
          login: { url: 'accounts/login/form', method: 'post', propertyName: 'apiKey' },
          user: { url: 'accounts/me', method: 'get', propertyName: 'data' },
          logout: false
        }
      }
    }
  },
  router: {
    middleware: 'auth'
  },
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    baseURL: 'http://localhost:5000',
    browserBaseURL: process.env.API_ENDPOINT,
    proxyHeaders: true
  },
  /*
  ** environment configuration
  */
  dotenv: {
    filename: envPath
  },
  /*
  ** Tracking User activity
  */
  logRocket: {
    logRocketId: '3lkkmo/gochiusa_illustrations',
    devModeAllowed: false
  },
  /*
  ** Build configuration
  */
  nuxtPrecompress: {
    enabled: true, // Enable in production
    report: true, // set false to turn off console messages
    test: /\.(js|css|html|txt|xml|svg)$/, // files to compress on build
    // Serving options
    middleware: {
      // You can disable middleware if you serve static files using nginx...
      enabled: true,
      // Enable if you have .gz or .br files in /static/ folder
      enabledStatic: true,
      // Priority of content-encodings, first matched with request Accept-Encoding will me served
      encodingsPriority: ['br', 'gzip']
    },
    // build time compression settings
    gzip: {
      // should compress to gzip?
      enabled: true,
      // compression config
      // https://www.npmjs.com/package/compression-webpack-plugin
      filename: '[path].gz[query]', // middleware will look for this filename
      threshold: 10240,
      minRatio: 0.8,
      compressionOptions: { level: 9 }
    },
    brotli: {
      // should compress to brotli?
      enabled: true,
      // compression config
      // https://www.npmjs.com/package/compression-webpack-plugin
      filename: '[path].br[query]', // middleware will look for this filename
      compressionOptions: { level: 11 },
      threshold: 10240,
      minRatio: 0.8
    }
  },
  buildDir: '.nuxt',
  build: {
    publicPath: 'https://cdn.gochiusa.team/core_sys',
    postcss: {
      preset: {
        features: {
          customProperties: false
        }
      }
    },
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
      if (ctx.isDev) {
        config.devtool = 'inline-cheap-module-source-map'
      }
    }
  },
  vue: {
    devtools: (process.env.NODE_ENV !== 'production')
  },
  dev: (process.env.NODE_ENV !== 'production')
}
