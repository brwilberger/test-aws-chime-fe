// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const app = 'chat';

module.exports = {
  mode: 'development',
  entry: ['./src/index.js'],
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.jsx', '.tsx', '.ts', '.js'],
    fallback: {
      fs: false,
      tls: false,
    }
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: `${app}-bundle.js`,
    publicPath: '/',
    libraryTarget: 'var',
    library: `app_${app}`
  },
  plugins: [
    new HtmlWebpackPlugin({
      inlineSource: '.(js|css)$',
      template: __dirname + `/app/${app}.html`,
      filename: __dirname + `/dist/${app}.html`,
      inject: 'head'
    }),
  ],
  devServer: {
    proxy: {
      '/': {
        target: 'http://localhost:8080',
        bypass: function(req, _res, _proxyOptions) {
          if (req.headers.accept.indexOf('html') !== -1) {
            console.log('Skipping proxy for browser request.');
            return `/${app}.html`;
          }
        }
      }
    },
    contentBase: path.join(__dirname, 'dist'),
    index: `${app}.html`,
    compress: true,
    liveReload: true,
    hot: false,
    host: '0.0.0.0',
    port: 3000,
    https: true,
    historyApiFallback: true,
    writeToDisk: true
  }
};
