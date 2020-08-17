const StyleLintPlugin = require('stylelint-webpack-plugin')
// const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
// const Dashboard = require('webpack-dashboard');
// const dashboard = new Dashboard();
// const DashboardPlugin = require('webpack-dashboard/plugin');

module.exports = {
  lintOnSave: false,
  devServer: {
    port: '4000',
    // 项目启动完成自动打开
    open: false,
    // 开启https
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
    sourceMap: false, // 是否在构建样式地图，false将提高构建速度
    loaderOptions: {
      // 全局scss文件
      scss: {
        prependData: "@import '@/style/index.scss';"
      }
    }
  },
  // 基本URL
  publicPath: '/',
  // 静态资源目录
  assetsDir: 'assets',
  // 生产环境的 source map，false将提高构建速度
  productionSourceMap: false,
  pages: {
    index: {
      entry: 'src/main.ts',
      template: 'public/index.html',
      title: ''
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
      }),
      // devServer 下的构建图
      // new DashboardPlugin(dashboard.setData)
    ],
    optimization: {
      // js、css压缩器 - webpack4取消了内置的压缩器
      minimizer: [
        new UglifyJsPlugin({
          cache: true,
          parallel: true,
          sourceMap: false
        }),
        new OptimizeCSSAssetsPlugin({}),
      ],
      // 提取公共模块文件 - 减少打包体积(开发环境需删除dist文件夹，否则报错)
      splitChunks: {
        cacheGroups: {
          commons: {
            name: "commons",
            // minChunks: 2  // 最小引入数量时提取
          }
        }
      },
    },
    // cdn引入 - 减少打包体积
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
