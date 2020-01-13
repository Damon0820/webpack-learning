const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')

function resolvePath(dir) {
	return path.join(__dirname, dir)
}

module.exports = {
	mode: 'none',
	entry: {
		// main: './src/main.js'
		main: resolvePath('./src/main.js'),
		main2: resolvePath('./src/main2.js')
	},
	output: {
		path: resolvePath('./dist'),
		filename: 'js/[name]-[chunkhash:7].bundle.js',
		// publicPath: 'http:cnd.com/' // script, link等引入资源时，加上公共路径
	},
	plugins: [
		new htmlWebpackPlugin({
			title: '爸爸的html', // 自定义属性，可在模板被获取
			template: resolvePath('./public/index.html'),
			filename: 'main.html',
			chunks: ['main'] // 指定入口
			// excludeChunks: ['mai2'] // 排除的入口
		}),
		new htmlWebpackPlugin({
			title: '爸爸的html',
			template: resolvePath('./public/index.html'),
			filename: 'main2.html',
			chunks: ['main2']
		})
	]
}