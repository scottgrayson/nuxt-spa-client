const { resolve } = require('path')

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Title defined in nuxt.config.js',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', content: 'hid defined in nuxt.config.js' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'favicon.ico' }
    ]
  },
  plugins: [
    '~plugins/axios.js'
  ],
  build: {
    vendor: [
      'axios'
    ]
  },
  /*
  ** Global CSS
  */
  css: [
    resolve(__dirname, 'assets/css/main.css')
  ],

  /*
  ** Customize the progress-bar color
  */
  loading: { color: 'dodgerblue' }
}
