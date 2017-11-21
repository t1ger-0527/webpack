const LoaderOptionsPlugin = require("webpack").LoaderOptionsPlugin;

const ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ExtractTextPlugin.extract({
					use: "css-loader"
				})
			},
			{ test: /\.png$/, loader: "file-loader" }
		]
	},
	plugins: [
		new ExtractTextPlugin({
			filename: "style.css",
			allChunks: true
		}),
		// Temporary workaround for the file-loader
		new LoaderOptionsPlugin({
			options: {}
		})
	]
};
