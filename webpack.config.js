const TerserPlugin = require('terser-webpack-plugin')


module.exports = {
  mode: 'none',
  entry: {
    'mvvm': './src/index.js',
    'mvvm.min': './src/index.js',
  },
  output: {
    filename: '[name].js',
    path: __dirname + '/lib',
    library: "MVVM",
    libraryExport: 'default',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        }
      }
    ]
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        include: /\.min\.js$/
      })
    ]
  }
}