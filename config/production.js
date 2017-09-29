const webpack = require('webpack')
const merge = require('webpack-merge')
const CompressionPlugin = require('compression-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const { config, sassConfig } = require('./base')

module.exports = merge(config, {
  output: {
    filename: 'scripts/[name].js',
    publicPath: './'
  },
  stats: 'normal',
  module: {
    rules: [
      {
        test: /\.(scss|sass|css)$/i,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [...sassConfig]
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('styles/[name].css'),
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      sourceMap: false,

      compress: {
        warnings: false
      },

      output: {
        comments: false
      }
    }),
    new CompressionPlugin({
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: /\.(js|css|html|json|ico|svg|eot|otf|ttf)$/
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ]
})
