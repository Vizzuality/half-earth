const merge = require('webpack-merge')
const base = require('./base')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const config = merge(base, {
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

  plugins: [new HtmlWebpackPlugin()],

  stats: {
    errorDetails: true
  },

  output: {
    pathinfo: true
  },

  devServer: {
    compress: true,
    headers: { 'Access-Control-Allow-Origin': '*' },
    watchOptions: {
      ignored: /node_modules/
    }
  }
})

module.exports = config
