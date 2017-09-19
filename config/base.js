// Note: You must restart bin/webpack-dev-server for changes to take effect

/* eslint global-require: 0 */
/* eslint import/no-dynamic-require: 0 */

const { join, resolve } = require('path')
const webpack = require('webpack')
const DirectoryNamedWebpackPlugin = require('directory-named-webpack-plugin')
const credentials = require('./credentials')
const basePath = resolve(__dirname, '../')
const sourcePath = resolve(basePath, 'src')
const publicPath = join(basePath, 'public')
const appPath = resolve(sourcePath, 'app')

module.exports = {
  paths: {
    basePath,
    sourcePath,
    publicPath,
    appPath
  },
  config: {
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
          include: sourcePath,
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
      modules: [
        resolve(sourcePath),
        resolve(publicPath),
        resolve(sourcePath, 'app'),
        'node_modules'
      ],
      plugins: [new DirectoryNamedWebpackPlugin(true)]
    },

    plugins: [
      new webpack.DefinePlugin({
        MAPBOX_TOKEN: JSON.stringify(credentials.MAPBOX_TOKEN)
      })
    ],

    resolveLoader: {
      modules: ['node_modules']
    },

    node: {
      fs: 'empty',
      net: 'empty'
    }
  }
}
