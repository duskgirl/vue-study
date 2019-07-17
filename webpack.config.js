var path = require('path')
var htmlWebpackPlugin = require('html-webpack-plugin')
var VueLoaderPlugin = require('./node_modules/vue-loader/lib/plugin')

module.exports = {
  entry: path.join(__dirname, './src/index.js'),
  output: {
    path: path.join(__dirname, './dist'),
    filename: 'boundle.js'
  },
  plugins: [
    new htmlWebpackPlugin({
      template: path.join(__dirname, './src/index.html'),
      filename: 'index.html'
    }),
    new VueLoaderPlugin()
  ],
  module: {
    rules: [
      { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] },
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      { test: /\.js$/, use: 'babel-loader', exclude: /node-modules/ },
      { test: /\.vue$/, use: 'vue-loader' },
      { test: /\.(ttf|woff|woff2|eot|svg)$/, use: 'vue-loader' },
    ]
  }
}