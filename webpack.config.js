var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var publicPath = path.resolve(__dirname, 'build');

var isProduction = function () {
  return process.env.NODE_ENV === 'production';
};

var config = {
    entry: {
      index: [
        'webpack/hot/dev-server',
        'webpack-dev-server/client?http://localhost:8080',
        path.resolve(__dirname, 'src/index.js')
      ],
      vendor: ['react', 'react-dom', 'react-router']
    },
    output: {
        path: publicPath,
        filename: "[name].js?[hash]-[chunkhash]",
		    chunkFilename: "[name].js?[hash]-[chunkhash]",
    },
    resolve: {
      extension: ['', '.js', '.jsx', '.json'],
      alias: {}
    },
    devtool: 'source-map',
    'display-error-details': true,
    module: {
      noParse: [],
      loaders: [
        {
          test: /\.js$/,
          loaders: ['react-hot', 'babel'],
          exclude: path.resolve(__dirname, 'node_modules')
        },
        {
          test: /\.css/,
          loader: ExtractTextPlugin.extract("style-loader", "css-loader")
        },
        {
          test: /\.less/,
          loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader")
        },
        {
          test: /\.(png|jpg)$/,
          loader: 'url?limit=8192'
        },
        {
          test: /\.(woff|woff2|ttf|svg|eot)(\?v=\d+\.\d+\.\d+)?$/,
          loader: "url?limit=10000"
        }
      ]
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoErrorsPlugin(),
      new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js'),
      new ExtractTextPlugin("[name].css?[hash]-[chunkhash]", {
          allChunks: true,
          disable: false
      }),
      new HtmlWebpackPlugin({
        title: '珠峰React官网',
        template: './src/index.html',
      })
    ]
};

if( isProduction() ) {
  config.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  );
}

module.exports = config;
