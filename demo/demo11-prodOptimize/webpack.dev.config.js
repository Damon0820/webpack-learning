const path = require('path')
const webpack = require('webpack')
const webpackMerge = require('webpack-merge')
const webpackBaseConfig = require('./webpack.base.config')

function resolvePath(dir) {
	return path.join(__dirname, dir)
}

module.exports = webpackMerge(webpackBaseConfig, {
	mode: 'development', // TODO: development
	devtool: 'cheap-eval-source-map',
	devServer: {
		clientLogLevel: 'warning',
		historyApiFallback: {
			rewrites: [
				{ from: /.*/, to: path.posix.join('/', 'index.html') }, // publicPath默认为/
			],
		},
		hot: true,
		contentBase: path.join(__dirname, "./public"), // Public静态资源，
		compress: true,
		// host: '0.0.0.0',
		port: 8080,
		// publicPath: '/',
		open: true,
		proxy: {},
    quiet: true, // necessary for FriendlyErrorsPlugin
		watchOptions: {
			poll: true
		}
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NamedModulesPlugin(), // HMR shows correct file names in console on update.
		new webpack.NoEmitOnErrorsPlugin()
	]
}) 