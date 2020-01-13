const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')

function resolvePath(dir) {
	return path.join(__dirname, dir)
}

module.exports = {
	mode: 'development',
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
				test: /\.css$/,
				use: [
					{ loader: "style-loader" },
					{ loader: "css-loader" },
					{ loader: 'postcss-loader' }
				]
			},
			{
				test: /\.less$/,
				use: [
					{ loader: "style-loader" },
					{ loader: "css-loader" },
					{ loader: 'postcss-loader' },
					{ loader: 'less-loader' }
				]
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
		new htmlWebpackPlugin({
			title: '爸爸的html', // 自定义属性，可在模板被获取
			template: resolvePath('./public/index.html'),
			filename: 'index.html',
		}),
	]
}