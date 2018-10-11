var path = require('path');
const { CheckerPlugin } = require('awesome-typescript-loader');

module.exports = {
  entry: { index: './lib/index.tsx' },
  output: {
    path: path.resolve(__dirname, 'dist'),
    library: 'Gu',
    libraryTarget: 'umd',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  module: {
    rules: [
      { test: /\.tsx?$/, loader: 'awesome-typescript-loader' },
      {
        test: /\.tsx?$/,
        enforce: 'pre',
        use: [{ loader: 'tslint-loader' }],
      },
    ],
  },
  plugins: [new CheckerPlugin()],
};
