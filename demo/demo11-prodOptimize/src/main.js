import './style/common.css'
import app from './page/index.js'


const init = () => {
	const str = 'init'
	const isInit = str.includes('init')
	console.log('init')
	console.log(isInit)
	console.log(app)
	if (process && process.env) {
		console.log('process.env.NODE_ENV', process.env.NODE_ENV)
	}
}

init()