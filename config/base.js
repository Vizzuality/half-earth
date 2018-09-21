// Note: You must restart bin/webpack-dev-server for changes to take effect

/* eslint global-require: 0 */
/* eslint import/no-dynamic-require: 0 */
// eslint-disable-next-line
const dotenv = require('dotenv').config();

const { join, resolve } = require('path');
const webpack = require('webpack');
const DirectoryNamedWebpackPlugin = require('directory-named-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const basePath = resolve(__dirname, '../');
const sourcePath = resolve(basePath, 'src');
const publicPath = join(basePath, 'public');
const appPath = resolve(sourcePath, 'app');

const sassConfig = [
  { loader: 'css-loader', query: { modules: true, localIdentName: '[name]__[local]__[hash:base64:5]' } },
  { loader: 'postcss-loader' },
  { loader: `sass-loader?includePaths[]='${appPath}'` }
];

module.exports = {
  paths: { basePath, sourcePath, publicPath, appPath },
  sassConfig,
  config: {
    entry: [ 'babel-polyfill', join(sourcePath, 'main.jsx') ],
    output: {
      filename: 'scripts/[name].[hash].js',
      chunkFilename: 'scripts/[name].[hash].js',
      path: publicPath,
      publicPath: '/'
    },
    module: {
      rules: [
        { test: /\.css$/, use: [ { loader: 'style-loader', options: { insertAt: 'top' } }, 'css-loader' ] },
        { test: /\.(js|jsx)$/, include: sourcePath, loader: 'babel-loader' },
        { test: /\.svg$/, use: [ { loader: 'svg-sprite-loader' } ] },
        {
          test: /\.(jpg|jpeg|png|gif|eot|ttf|woff|woff2)$/i,
          use: [ { loader: 'file-loader', options: { publicPath, name: '[name].[ext]' } } ]
        }
      ]
    },
    resolve: {
      extensions: [ '.js', '.jsx', '.css', '.scss', '.sass' ],
      modules: [ resolve(sourcePath), resolve(publicPath), resolve(sourcePath, 'app'), 'node_modules' ],
      plugins: [ new DirectoryNamedWebpackPlugin(true) ],
      alias: {
        app: 'app',
        assets: 'app/assets',
        routes: 'app/routes',
        components: 'app/components',
        constants: 'app/constants',
        utils: 'app/utils'
      }
    },
    plugins: [
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: resolve(sourcePath, 'tpl.ejs'),
        inject: 'body',
        GOOGLE_ANALYTICS: JSON.stringify(process.env.GOOGLE_ANALYTICS)
      }),
      new webpack.EnvironmentPlugin({
        NODE_ENV: 'production',
        MAPBOX_TOKEN: null,
        CONTENTFUL_SPACE_ID: null,
        CONTENTFUL_TOKEN: null
      })
    ],
    resolveLoader: { modules: [ 'node_modules' ] },
    node: { fs: 'empty', net: 'empty' }
  }
};
