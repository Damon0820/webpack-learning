import Vue from 'vue'
import './style/common.css'
import App from './App.vue'

console.log('main.js')

new Vue({
	el: '#app',
	render: h => h(App)
})
