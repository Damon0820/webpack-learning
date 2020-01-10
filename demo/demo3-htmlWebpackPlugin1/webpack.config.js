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
		filename: 'js/[name]-[chunkhash:7].bundle.js'
	},
	plugins: [
		new htmlWebpackPlugin({
			template: resolvePath('./public/index.html')
		})
	]
}