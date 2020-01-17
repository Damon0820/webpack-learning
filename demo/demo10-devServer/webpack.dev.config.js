const path = require('path')
const webpack = require('webpack')
const webpackMerge = require('webpack-merge')
const webpackBaseConfig = require('./webpack.base.config')

function resolvePath(dir) {
	return path.join(__dirname, dir)
}

module.exports = webpackMerge(webpackBaseConfig, {
	mode: 'development', // TODO: development
	devServer: {
		clientLogLevel: 'warning',
		historyApiFallback: {
			rewrites: [
				{ from: /.*/, to: path.posix.join('/', 'index.html') }, // publicPath默认为/
			],
		},
		hot: true,
		contentBase: path.join(__dirname, "./public"), // Public静态资源，
    // contentBase: false, // since we use CopyWebpackPlugin.
		compress: true,
		host: '0.0.0.0',
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
		// // 若没配置MiniCssExtractPlugin.loader则不生效，也不报错
		// new MiniCssExtractPlugin({
		// 	filename: devMode ? 'css/[name].css' : 'css/[name].[contenthash:7].css',
		// 	chunkFilename: devMode ? 'css/[id].css' : 'css/[id].[contenthash:7].css',
		// }),
		// new htmlWebpackPlugin({
		// 	title: '爸爸的html', // 自定义属性，可在模板被获取
		// 	template: resolvePath('./public/index.html'),
		// 	filename: 'index.html',
		// })
	]
}) 