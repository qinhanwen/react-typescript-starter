const { merge } = require('webpack-merge')
const webpackBaseConfig = require('./webpack.base.conf.js')
const proxy = require('./proxy-setting')
const config = require('./dev-server-config')
const webpack = require('webpack')

module.exports = merge(webpackBaseConfig, {
  mode: 'development',
  devtool: 'cheap-source-map',
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
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
})
