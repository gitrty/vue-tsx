const StyleLintPlugin = require('stylelint-webpack-plugin')
// const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
// const Dashboard = require('webpack-dashboard');
// const dashboard = new Dashboard();
// const DashboardPlugin = require('webpack-dashboard/plugin');
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin')

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
      // 配置alias缩小文件搜索范围，减少不必要的编译
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
      // new DashboardPlugin(dashboard.setData),

      // 使用缓存优化开发环境下非首次构建的构建速度
      new HardSourceWebpackPlugin({
        // cacheDirectory是在高速缓存写入。默认情况下，将缓存存储在node_modules下的目录中，因此如 
        // 果清除了node_modules，则缓存也是如此
        cacheDirectory: 'node_modules/.cache/hard-source/[confighash]',
        // Either an absolute path or relative to webpack's options.context.
        // Sets webpack's recordsPath if not already set.
        recordsPath: 'node_modules/.cache/hard-source/[confighash]/records.json',
        // configHash在启动webpack实例时转换webpack配置，并用于cacheDirectory为不同的webpack配 
        // 置构建不同的缓存
        configHash: function (webpackConfig) {
          // node-object-hash on npm can be used to build this.
          return require('node-object-hash')({ sort: false }).hash(webpackConfig);
        },
        // 当加载器，插件，其他构建时脚本或其他动态依赖项发生更改时，hard-source需要替换缓存以确保输 
        // 出正确。environmentHash被用来确定这一点。如果散列与先前的构建不同，则将使用新的缓存
        environmentHash: {
          root: process.cwd(),
          directories: [],
          files: ['package-lock.json', 'yarn.lock'],
        },
      })
    ],
    optimization: {
      // js、css压缩器
      minimizer: [
        new UglifyJsPlugin({
          cache: true,
          parallel: true,
          sourceMap: false
        }),
        new OptimizeCSSAssetsPlugin({}),
      ],
      // 提取公共模块文件 - 减少打包体积
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
