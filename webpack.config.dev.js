const base = require('./webpack.config');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = Object.assign({}, base, {
  mode: "development",
  entry: {
    example: './example.tsx',
  },
  plugins: [...base.plugins, new HtmlWebpackPlugin({
    title: 'GUUI - React',
    template: 'index.html'
  })],
});
