# webpack-learning
webpack从简到深，一步步实战代码例子

- babel-loader
- 核心有二：
	- 其一为es6+语法转换成es5语法，比如箭头函数转换，let const转var等。由` "presets": [
    "@babel/preset-env"
	],` 指定。
	- 其二为es6+新增api的pollyfill。其一只是对新旧语法的转换，但是es6+的新增的api，还是无法使用，例如：promise, async/await, Array.prototype.includes()等，所以要pollyfill。
		pollyfill推荐使用 `"plugins": ["@babel/plugin-transform-runtime"]`的方式，运行时注入。
