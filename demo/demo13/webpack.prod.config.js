const path = require('path')
const webpackMerge = require('webpack-merge')
const webpackBaseConfig = require('./webpack.base.config')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')

function resolvePath(dir) {
	return path.join(__dirname, dir)
}

module.exports = webpackMerge(webpackBaseConfig, {
	mode: 'production', // TODO: production
	devtool: 'source-map',
	module: {
		rules: []
	},
	plugins: [
		new CleanWebpackPlugin(),
		new CopyWebpackPlugin([{
			from: resolvePath('./public'),
			to: resolvePath('./dist'),
		}])
	],
	optimization: {
		minimizer: [
			new UglifyjsWebpackPlugin({
				cache: true,
				parallel: true,
				sourceMap: true
			}),
			new OptimizeCssAssetsPlugin()
		],
		splitChunks: { // 待后续补充
			// chunks: 'all',
			// cacheGroups: {
			// 	libs: {
			// 		name: "chunk-libs",
			// 		test: /[\\/]node_modules[\\/]/,
			// 		priority: 10,
			// 		chunks: "initial" // 只打包初始时依赖的第三方
			// 	}
			// }
		}
	}
}) 