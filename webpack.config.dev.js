var webpack = require('webpack');
var path    = require('path');

module.exports = {

  entry: {
    app: path.join(__dirname, 'src', 'public', 'js'),
  },

  output: {
    path: path.join(__dirname, 'src', 'public'),
    filename: 'bundle.js',
    publicPath: '/',
  },

  resolve: {
    extensions: ['', '.js', '.jsx'],
  },

  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: 'style!css?modules',
      },
      {
        test: /\.jsx*$/,
        exclude: [/node_modules/, /.+\.config.js/],
        loader: 'babel',
        query: {
          presets: ['react-hmre'],
        },
      },
    ],
  },

  plugins: [new webpack.HotModuleReplacementPlugin()],
};
