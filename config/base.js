// Note: You must restart bin/webpack-dev-server for changes to take effect

/* eslint global-require: 0 */
/* eslint import/no-dynamic-require: 0 */

const { join, resolve } = require('path')
const DirectoryNamedWebpackPlugin = require('directory-named-webpack-plugin')

const basePath = resolve(__dirname, '../')
const sourcePath = resolve(basePath, 'src')
const publicPath = join(basePath, 'public')

module.exports = {
  entry: join(sourcePath, 'main.jsx'),

  output: {
    filename: '[name].js',
    path: publicPath,
    publicPath: '/'
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.(jpg|jpeg|png|gif|svg|eot|ttf|woff|woff2)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              publicPath,
              name: '[name].[ext]'
            }
          }
        ]
      }
    ]
  },

  resolve: {
    extensions: ['.js', '.jsx', '.css', '.scss', '.sass'],
    modules: [resolve(sourcePath), resolve(sourcePath, 'app'), 'node_modules'],
    plugins: [new DirectoryNamedWebpackPlugin(true)]
  },

  resolveLoader: {
    modules: ['node_modules']
  },

  node: {
    fs: 'empty',
    net: 'empty'
  }
}
