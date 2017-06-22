const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const ENV = process.env.NODE_ENV || 'development';

const browserlist = {
  browsers: [ 'last 2 versions' ]
};

process.env.BROWSERSLIST = browserlist.browsers.join(' ,');

module.exports = {
  entry: [
    path.resolve(__dirname, './src/app-client.js')
  ],
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: "/",
    filename: 'bundle.js'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        loaders: [
          'style-loader',
          'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
          'postcss-loader'
        ],
        exclude: /node_modules|lib/
      },
      { 
        test: /\.svg$/, 
        loader: 'file-loader'
      }
    ]
  },

  plugins: ([
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(ENV)
    }),
    new ExtractTextPlugin({filename: './css/style.css', allChunks: true}),
    new webpack.LoaderOptionsPlugin({
      options: {
        postcss: [ autoprefixer(browserlist) ]
      }
    })
  ]).concat(ENV === 'development' ? [
    new webpack.HotModuleReplacementPlugin()
  ] : []).concat(ENV === 'production' ? [
    new webpack.optimize.UglifyJsPlugin({
      compressor: { warnings: false, screw_ie8: true },
    })
  ] : []),

  devtool: ENV === 'production' ? false : 'cheap-module-eval-source-map'
};
