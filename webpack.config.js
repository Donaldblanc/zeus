const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './client/src/index.js',
  mode: 'development',
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
      {
        test: /\.(png|jpg)$/,
        loader: 'url-loader?limit=20000000'
      },
    ],
  },

  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/client/public',
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: path.join(__dirname, '/client/public'),
    publicPath: '/dist/',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
// plugins: [new webpack.HotModuleReplacementPlugin()],
};


// https://blog.usejournal.com/creating-a-react-app-from-scratch-f3c693b84658
