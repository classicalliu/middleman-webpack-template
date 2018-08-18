const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: {
    app: [
      path.join(__dirname, '/source/assets/js/app.js'),
      path.join(__dirname, '/source/assets/css/app.css.scss')
    ]
  },
  output: {
    filename: 'assets/js/[name].js'
  },
  resolve: {
    modules: [
      path.join(__dirname, 'source', 'assets'),
      path.join(__dirname, 'node_modules')
    ]
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        },
        // exclude: /node_modules/
      },
      {
        test: /\.s?css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              // you can specify a publicPath here
              // by default it use publicPath in webpackOptions.output
              publicPath: '../../',
              // sourceMap: true
            }
          },
          {
            loader: 'css-loader',
            query: {
              modules: false,
              sourceMaps: true
            }
          }, {
            loader: 'resolve-url-loader',
            options: {
              attempts: 1
            }
          }, {
            loader: 'postcss-loader',
            query: {
              sourceMaps: true
            }
          }, {
            loader: 'sass-loader',
            query: {
              sourceMaps: true
            }
          }
        ]
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]',
              context: "source"
            }
          }
        ]
      }
    ]
  },
  plugins: [
    // new webpack.DefinePlugin({ 'process.env.NODE_ENV': JSON.stringify('production') }),
    new  MiniCssExtractPlugin({
      filename: 'assets/css/app.css.scss' ,
    })
  ]
};
