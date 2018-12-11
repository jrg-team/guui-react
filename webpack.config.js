const path = require('path')
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
      stylesheets: path.resolve(__dirname, 'stylesheets'),
      examples: path.resolve(__dirname, 'examples'),
    },
    modules: [path.resolve(__dirname, 'include'), 'node_modules']
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
        test: /icons\/.+\.svg$/,
        loader: 'svg-sprite-loader',
      },
      {
        test: /\.svg$/,
        loader: 'file-loader',
      },
      {
        test: /\.md$/,
        loader: 'text-loader',
      },
      {
        test: /\.s([ac])ss$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: "sass-loader",
            options: {
              includePaths: [path.resolve(__dirname, 'stylesheets', 'include')]
            }
          }]
      }
    ],
  },
  plugins: [new CheckerPlugin()],
  resolveLoader: {
    modules: [
      'node_modules',
      path.resolve(__dirname, 'loaders')
    ]
  }
};
