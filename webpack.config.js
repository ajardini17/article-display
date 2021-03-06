const path = require('path');

const SRC_DIR = path.resolve(__dirname, 'Client');
const BUILD_DIR = path.resolve(__dirname, 'Static');

module.exports = {
  entry: ['babel-polyfill', path.resolve(SRC_DIR, 'index.jsx')],
  output: {
    filename: 'bundle.js',
    path: BUILD_DIR
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: [/node_modules/],
        use: [{
          loader: 'babel-loader',
          options: { presets: ['es2015', 'react'] }
        }],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ]
  }
}