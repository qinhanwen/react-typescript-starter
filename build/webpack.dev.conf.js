const { merge } = require('webpack-merge')
const webpackBaseConfig = require('./webpack.base.conf.js')
const proxy = require('./proxy-setting')
const config = require('./dev-server-config')
const webpack = require('webpack')
const { resolve } = require('./utils')

module.exports = merge(webpackBaseConfig, {
  mode: 'development',
  devtool: 'eval-source-map',
  output: {
    path: resolve('dist'),
    filename: '[name].js',
    publicPath: '/',
  },
  devServer: {
    stats: 'errors-only',
    quiet: true,
    proxy,
    port: config.PORT,
    host: config.HOST,
    progress: config.PROCESS,
    inline: config.INLINE,
    hot: config.HOT,
    open: config.AUTO_OPEN_BROWER,
    contentBase: config.CONTENT_BASE,
    compress: false,
    historyApiFallback: {
      rewrites: [
        {
          from: '/',
          to: `/index.html`,
        },
      ],
    },
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
})
