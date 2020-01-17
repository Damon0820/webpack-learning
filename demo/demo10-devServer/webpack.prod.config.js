const path = require('path')
const webpackMerge = require('webpack-merge')
const webpackBaseConfig = require('./webpack.base.config')

function resolvePath(dir) {
	return path.join(__dirname, dir)
}

module.exports = webpackMerge(webpackBaseConfig, {
	mode: 'production', // TODO: production
	// entry: {
	// 	main: resolvePath('./src/main.js'),
	// },
	// output: {
	// 	path: resolvePath('./dist'),
	// 	filename: 'js/[name]-[chunkhash:7].bundle.js',
	// 	// publicPath: 'http:cnd.com/' // script, link等引入资源时，加上公共路径
	// },
	module: {
		rules: []
	},
	plugins: [
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