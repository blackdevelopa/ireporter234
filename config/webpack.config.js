const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const Dotenv = require('dotenv-webpack');
const ErrorOverlayPlugin = require('error-overlay-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;

const {
  devServer,
  extractStyles,
  loadHtml,
  loadImages,
  loadJavascript,
  loadStyles,
} = require('./webpack-pieces');

const baseConfig = merge([
  {
    entry: './src/index.jsx',
    resolve: {
      extensions: ['*', '.js', '.jsx'],
    },

    output: {
      path: path.resolve(__dirname, '../build'),
      publicPath: '/',
      filename: 'bundle.js',
    },
    plugins: [new Dotenv()],
  },
  loadHtml(),
  loadJavascript({ include: path.join(__dirname, '../src') }),
]);

const devConfig = merge([
  {
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new ErrorOverlayPlugin(),
    ],
  },
  devServer(),
  loadImages(),
  loadStyles(),
]);

const prodConfig = merge([
  {
    output: {
      filename: 'bundle.[chunkhash:8].js',
      publicPath: './',
    },
    optimization: {
      minimizer: [
        new TerserPlugin({
          terserOptions: {
            output: {
              comments: false,
            },
          },
        }),
      ],
    },
    plugins: [new ImageminPlugin({ test: /\.(jpe?g|png|svg)$/i })],
  },
  loadImages({ options: { limit: 5000 } }),
  extractStyles(),
]);

module.exports = env =>
  merge(baseConfig, env !== 'production' ? devConfig : prodConfig, {
    mode: env,
  });
