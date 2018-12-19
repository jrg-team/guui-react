const path = require('path')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const {CheckerPlugin} = require('awesome-typescript-loader')

const devMode = process.env.NODE_ENV !== 'production'

module.exports = {
  entry: {
    index: './lib/index.tsx'
  },
  output: {
    path: path.resolve(__dirname, 'dist/lib'),
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
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {test: /\.tsx?$/, loader: 'awesome-typescript-loader'},
      {
        test: /\.tsx?$/,
        enforce: 'pre',
        use: [{loader: 'tslint-loader'}],
      },
      {
        test: /icons\/.+\.svg$/,
        loader: 'svg-sprite-loader',
      },
      {
        test: /guui\.svg$/,
        loader: 'file-loader',
      },
      {
        test: /\.md$/,
        loader: 'text-loader',
      },
      {
        test: /\.s([ac])ss$/,
        use: [
          devMode ? 'style-loader' : {
            loader: MiniCssExtractPlugin.loader,
            options: {
              // publicPath: '../'
            }
          },
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
  plugins: [
    new CheckerPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    })
  ],
  resolveLoader: {
    modules: [
      'node_modules',
      path.resolve(__dirname, 'loaders')
    ]
  }
}
