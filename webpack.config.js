const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './client/src/index.js',
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['@babel/env', '@babel/react'],
        },
      },
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader'],
      },
    ],
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/client/public',
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: path.join(__dirname, '/client/public'),
   // port: 3000,
    publicPath: '/dist/',
   // index: 'index.html',
   // hotOnly: true,
  },
 // plugins: [new webpack.HotModuleReplacementPlugin()],
};


// https://blog.usejournal.com/creating-a-react-app-from-scratch-f3c693b84658
