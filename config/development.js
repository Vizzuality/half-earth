const merge = require('webpack-merge');
const webpack = require('webpack');
const { config, sassConfig, paths: { publicPath } } = require('./base');

module.exports = merge(config, {
  mode: 'development',
  devtool: '#eval-source-map',
  module: { rules: [ { test: /\.(scss|sass)$/i, use: [ { loader: 'style-loader' }, ...sassConfig ] } ] },
  stats: { errorDetails: true },
  output: { pathinfo: true },
  plugins: [ new webpack.HotModuleReplacementPlugin() ],
  devServer: {
    contentBase: publicPath,
    compress: true,
    historyApiFallback: true,
    headers: { 'Access-Control-Allow-Origin': '*' },
    watchOptions: { ignored: /node_modules/ },
    hot: true,
    hotOnly: true
  }
});
