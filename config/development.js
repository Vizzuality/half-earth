const { resolve } = require('path')
const merge = require('webpack-merge')
const { config, paths: { sourcePath, publicPath } } = require('./base')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = merge(config, {
  devtool: 'cheap-eval-source-map',

  module: {
    rules: [
      {
        test: /\.(scss|sass|css)$/i,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            query: {
              modules: true,
              localIdentName: '[name]__[local]__[hash:base64:5]'
            }
          },
          { loader: 'postcss-loader' },
          { loader: 'sass-loader' }
        ],
        exclude: /node_modules/
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: resolve(sourcePath, 'tpl.ejs'),
      inject: 'body'
    })
  ],

  stats: {
    errorDetails: true
  },

  output: {
    pathinfo: true
  },

  devServer: {
    contentBase: publicPath,
    compress: true,
    headers: { 'Access-Control-Allow-Origin': '*' },
    watchOptions: {
      ignored: /node_modules/
    }
  }
})
