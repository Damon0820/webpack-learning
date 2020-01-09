const path = require('path')
function resolvePath(dir) {
	return path.join(__dirname, dir)
}

module.exports = {
	mode: 'none',
	entry: {
		// main: './src/main.js'
		main: resolvePath('./src/main.js')
	},
	output: {
		path: resolvePath('./dist/js'),
		filename: 'bundle.js'
	}
}