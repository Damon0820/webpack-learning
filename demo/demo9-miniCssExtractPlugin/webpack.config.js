const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

function resolvePath(dir) {
	return path.join(__dirname, dir)
}

// 是否是开发模式
let devMode = process.env.NODE_ENV !== 'production'
devMode = true

module.exports = {
	mode: 'none',
	entry: {
		main: resolvePath('./src/main.js'),
	},
	output: {
		path: resolvePath('./dist'),
		filename: 'js/[name]-[chunkhash:7].bundle.js',
		// publicPath: 'http:cnd.com/' // script, link等引入资源时，加上公共路径
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				include: [resolvePath('./src'), resolvePath('node_modules/webpack-dev-server/client')],
				exclude: /node_modules/,
				use: [
					{
						loader: 'babel-loader',
					}
				]
			},
			{
				test: /\.css$/,
				use: [{
					loader: MiniCssExtractPlugin.loader,
					options: {
						// publicPath is the relative path of the resource to the context
						// e.g. for ./css/admin/main.css the publicPath will be ../../
						// while for ./css/main.css the publicPath will be ../
						publicPath: '../',
						esModule: true,
						hmr: devMode,
						// if hmr does not work, this is a forceful method.
						// reloadAll: true,
					}
				}, 'css-loader', 'postcss-loader']
			},
			{
				test: /\.less$/,
				use: [{
					loader: MiniCssExtractPlugin.loader,
					options: {
						publicPath: '../',
						esModule: true,
						hmr: devMode,
					}
				}, 'css-loader', 'postcss-loader', 'less-loader']
			},
			{
				test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
				use: [
					{
						loader: 'url-loader',
						options: {
							limit: 50000,
							name: 'img/[name].[hash:7].[ext]'
						}
					}
				]
			},
			{
				test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
				use: [
					{
						loader: 'url-loader',
						options: {
							limit: 50000,
							name: 'media/[name].[hash:7].[ext]'
						}
					}
				]
			},
			{
				test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
				use: [
					{
						loader: 'url-loader',
						options: {
							limit: 50000,
							name: 'fonts/[name].[hash:7].[ext]'
						}
					}
				]
			},
		]
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: devMode ? 'css/[name].css' : 'css/[name].[contenthash:7].css',
			chunkFilename: devMode ? 'css/[id].css' : 'css/[id].[contenthash:7].css',
		}),
		new htmlWebpackPlugin({
			title: '爸爸的html', // 自定义属性，可在模板被获取
			template: resolvePath('./public/index.html'),
			filename: 'index.html',
		})
	]
}