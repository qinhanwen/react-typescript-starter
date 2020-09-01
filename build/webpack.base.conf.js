const { resolve } = require('./utils')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
const WebpackBar = require('webpackbar')

module.exports = {
  entry: {
    app: resolve('/src/index.tsx'),
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.json'],
    alias: {
      Components: resolve('src/components/'),
      Services: resolve('src/services/'),
      Constants: resolve('src/constants/'),
      Container: resolve('src/container/'),
      Assets: resolve('src/assets/'),
      Types: resolve('src/types/'),
      Utils: resolve('src/utils'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(tsx?|js)$/,
        loader: 'babel-loader',
        options: { cacheDirectory: true },
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpe?g|gif)(\?.*)?$/,
        include: [resolve('src')],
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              name: 'img/[name].[hash:8].[ext]',
            },
          },
        ],
      },
      {
        test: /\.s?css$/,
        use: [
          process.env.NODE_ENV === 'development' ? 'style-loader' : MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: false,
              sourceMap: process.env.NODE_ENV === 'development',
            },
          },
          'postcss-loader',
          {
            loader: 'sass-loader',
            options: {
              sourceMap: process.env.NODE_ENV === 'development',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve('public/index.html'),
      filename: 'index.html',
      cache: false,
      minify: process.env.NODE_ENV === 'production',
    }),
    new ForkTsCheckerWebpackPlugin({
      typescript: {
        configFile: resolve('./tsconfig.json'),
      },
    }),
    new WebpackBar({
      name: process.env.NODE_ENV === 'production' ? '在下正在打包了，等着吧' : '在下已经在编译了',
      color: '#fa8c16',
    }),
  ],
}
