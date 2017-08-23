const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const credentials = require('./credentials')

const PROD = process.env.NODE_ENV === 'production'

const config = {
  entry: './src/app.js',
  devtool: 'cheap-module-eval-source-map',
  output: {
    filename: 'scripts/bundle.js',
    path: path.resolve(__dirname, 'public')
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['env']
        }
      }
    }]
  },
  plugins: [
    new webpack.DefinePlugin({
      MAPBOX_TOKEN: JSON.stringify(credentials.MAPBOX_TOKEN)
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, 'src', 'tpl.ejs')
    })
  ]
}

if (PROD) {
  config.devtool = 'source-map'
  config.plugins = (config.plugins || []).concat([
    new webpack.optimize.UglifyJsPlugin()
  ])
}

module.exports = config
