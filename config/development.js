const merge = require('webpack-merge');
const { config, sassConfig, paths: { publicPath } } = require('./base');

module.exports = merge(config, {
  mode: 'development',
  devtool: '#eval-source-map',
  module: { rules: [ { test: /\.(scss|sass)$/i, use: [ { loader: 'style-loader' }, ...sassConfig ] } ] },
  stats: { errorDetails: true },
  output: { pathinfo: true },
  devServer: {
    contentBase: publicPath,
    compress: true,
    historyApiFallback: true,
    headers: { 'Access-Control-Allow-Origin': '*' },
    watchOptions: { ignored: /node_modules/ }
  }
});
