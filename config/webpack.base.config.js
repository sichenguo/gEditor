// 引入插件
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const resolve = dir => {
  return path.resolve(__dirname, '../', dir)
}
module.exports = {
  entry: './src/index.ts',
  output: {
    filename: 'app.js'
  },
  resolve: {
    extensions: ['.ts', '.js', '.tsx']
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: ['ts-loader'],
        include: [resolve('src')]
      },
      {
        test: /\.scss$/,
        include: [resolve('src')],
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    })
  ]
}
