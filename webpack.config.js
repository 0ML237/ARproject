const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

module.exports = {
  mode: 'development',
  entry: ['./src/app.js', './css/dropDown.css', './js/menu-item.render.js',  './js/menu-item.service.js'],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'assets/',
              publicPath: 'images/',
              emitFile: true,
              esModule: false
            }
          }
        ]
      }
    ]
  },
  devServer: {
    client: {
      overlay: true
    },
    hot: true,
    watchFiles: ['src/*', 'index.html']
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        'index.html',
        {from: './css/dropDown.css', to: 'css'},
        {from: './js/menu-item.render.js', to: 'js'},
        {from: './js/menu-item.service.js', to: 'js'}
      ]
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
};