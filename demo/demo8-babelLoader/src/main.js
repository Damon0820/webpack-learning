import './style/common.css'
import app from './page/index.js'


const init = () => {
	const str = 'init'
	const isInit = str.includes('init')
	console.log('init')
	console.log(isInit)
	console.log(app)
}

init()