var path = require('path');
const { CheckerPlugin } = require('awesome-typescript-loader');
module.exports = {
  entry: { guui: './lib/index.tsx' },
  output: {
    path: path.resolve(__dirname, 'dist'),
    library: 'Gu',
    libraryTarget: 'umd',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    alias: {
      lib: path.resolve(__dirname, 'lib'),
      stylesheets: path.resolve(__dirname, 'stylesheets'),
      examples: path.resolve(__dirname, 'examples'),
    }
  },
  module: {
    rules: [
      { test: /\.tsx?$/, loader: 'awesome-typescript-loader' },
      {
        test: /\.tsx?$/,
        enforce: 'pre',
        use: [{ loader: 'tslint-loader' }],
      },
      {
        test: /\.svg$/,
        loader: 'svg-sprite-loader',
      },
      {
        test: /\.s(a|c)ss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ],
  },
  plugins: [new CheckerPlugin()],
};
