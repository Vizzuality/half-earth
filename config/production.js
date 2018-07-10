const merge = require('webpack-merge');
const CompressionPlugin = require('compression-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const { config, sassConfig } = require('./base');

module.exports = merge(config, {
  mode: 'production',
  output: {
    filename: 'scripts/[name].js',
    publicPath: './'
  },
  stats: 'normal',
  module: {
    rules: [
      {
        test: /\.(scss|sass|css)$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          ...sassConfig
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: 'styles/[name].css' }),
    new CompressionPlugin({
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: /\.(js|css|html|json|ico|svg|eot|otf|ttf)$/
    })
  ],
  optimization: {
    minimizer: [
      new UglifyJSPlugin({
        uglifyOptions: {
          compress: {
            warnings: false
          },
          output: {
            comments: false
          }
        },
        sourceMap: false
      })
    ]
  }
});
