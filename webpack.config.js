const path = require('path');
const autoprefixer = require('autoprefixer');

module.exports = {
  entry: './src/entry.js',
  resolve: {
    extensions: [ '', '.js', '.jsx' ],
  },
  output: {
    path: path.join(__dirname, 'app'),
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: { presets: [ 'es2015', 'react' ] },
      },
      {
        test: /.scss$/,
        loaders: [ 'style', 'css', 'postcss', 'sass' ],
      },
    ],
  },
  postcss () {
    return [autoprefixer];
  },
};