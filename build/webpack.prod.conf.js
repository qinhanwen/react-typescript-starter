const { merge } = require('webpack-merge')
const webpackBaseConfig = require('./webpack.base.conf.js')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const { resolve } = require('./utils')

module.exports = merge(webpackBaseConfig, {
  mode: 'production',
  output: {
    filename: 'js/[name].[chunkhash:8].js',
    chunkFilename: 'js/[name].[chunkhash:8].js', // https://juejin.im/post/6844903946415243272#heading-4
    publicPath: 'dist/',
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: '/css/[name].[contenthash:8].css',
    }),
  ],
  optimization: {
    // 抽离共用部分
    minimizer: [],
    // minimizer: [new TerserPlugin(), new OptimizeCSSAssetsPlugin()],
    namedChunks: true,
    moduleIds: 'hashed',
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        vendor: {
          name: 'vendor',
          test: /node_modules/,
          priority: 10,
          chunks: 'initial',
        },
      },
    },
  },
})
