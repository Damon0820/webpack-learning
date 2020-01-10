// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
	exec: true,
	plugins: {
		'postcss-import': {},
		"postcss-url": {},
		// to edit target browsers: use "browserslist" field in package.json
		"autoprefixer": {}
	}
}