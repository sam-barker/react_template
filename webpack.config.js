const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

const paths = {
  DIST: path.resolve(__dirname, 'dist'),
  SRC: path.resolve(__dirname, 'src')
}

module.exports = {
  entry: path.join(paths.SRC, 'index.js'),

  output: {
    path: paths.DIST,
    filename: 'bundle.js'
  },

  plugins: [
    // Reduce bundle size
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"'
    }),
    new HtmlWebpackPlugin({
      template: path.join(paths.SRC, 'index.html')
    })
  ],

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [ 'babel-loader' ]
      }
    ]
  },

  resolve: {
    extensions: ['.js', '.jsx']
  },

  watchOptions: {
    watch: true,
    aggregateTimeout: 300,
    poll: 1000,
    ignored: /node_modules/
  }
}
