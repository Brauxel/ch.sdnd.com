var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
	entry: path.resolve(__dirname, './src/app-client.js'),
	output: {
		path: path.resolve(__dirname, './dist'),
    publicPath: "/static/",
		filename: 'bundle.js'
	},

	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel'
			},
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style', ['css?modules&importLoaders=2&localIdentName=[local]___[hash:base64:5]','postcss','sass']),
        exclude: /node_modules|lib/
      }
      {
        test: /masonry|imagesloaded|fizzy\-ui\-utils|desandro\-|outlayer|get\-size|doc\-ready|eventie|eventemitter/,
        loader: 'imports?define=>false&this=>window'
      }
		]
	},

  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compressor: { warnings: false, screw_ie8: true },
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new webpack.NoErrorsPlugin(),
    new ExtractTextPlugin("./style.css",{
      allChunks: true
    }),
  ],

  postcss: () => [autoprefixer({ browsers: 'last 2 versions' })],

  progress: true
}
