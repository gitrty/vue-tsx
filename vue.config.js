const StyleLintPlugin = require('stylelint-webpack-plugin')
// const MiniCssExtractPlugin = require('mini-css-extract-plugin')
module.exports = {
  lintOnSave: false,
  devServer: {
    port: '4000',
    open: false,
    https: false,
    overlay: {
      warnings: false,
      errors: true
    }
    // proxy: {
    //   '/api': {
    //     // target: process.env.VUE_APP_PROXY_URL,
    //     // pathRewrite: { '^/api': '' },
    //     // changeOrigin: true,
    //     // secure: false,
    //   },
    // },
  },
  css: {
    loaderOptions: {
      scss: {
        prependData: "@import '@/style/index.scss';"
      }
    }
  },
  // 基本URL
  publicPath: '/',
  // 静态资源目录
  assetsDir: 'assets',
  // 生产环境的 source map
  productionSourceMap: false,
  pages: {
    index: {
      entry: 'src/main.ts',
      template: 'public/index.html',
      title: '爆料助手'
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@axios': '@/axios/*'
        // src: '@/*',
        // plugin: '@/plugin/*',
        // components: '@/components/*',
      },
      extensions: ['.tsx', '.js', '.vue', '.json', '.ts']
    },
    plugins: [
      // new MiniCssExtractPlugin({
      //   filename: 'style.scss'
      // }),
      new StyleLintPlugin({
        files: ['**/*.{vue,htm,html,css,sss,less,scss,sass}'],
        failOnError: false,
        cache: true,
        fix: true
      })
    ]

    // externals: process.env.NODE_ENV === 'development' ? {} : {
    //   'vue': 'Vue',
    //   'vue-router': 'VueRouter',
    //   'element-ui': 'ELEMENT',
    //   'vuex': 'Vuex',
    //   'axios': 'axios',
    //   'cookie': 'js-cookie'
    // }
  }
}
