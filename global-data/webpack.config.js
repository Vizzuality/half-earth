const fs = require('fs')
const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const credentials = require('./credentials')

module.exports = {
  entry: './src/app.js',
  output: {
    filename: 'scripts/bundle.js',
    path: path.resolve(__dirname, 'public')
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
