<template>
	<div id="home">
		<header>
			<h1>爸爸来了6</h1>
			<h2>哈哈哈</h2>
		</header>
		<main>
			<div class="poetry">
				<h3>黄鹤楼送孟浩然之广陵</h3>
				<p>故人西辞黄鹤楼</p>
				<p>烟花三月下扬州</p>
				<p>孤帆远影碧空尽</p>
				<p>唯见长江天际流</p>
			</div>
			<!-- 相对路径引入的静态资源，需要copyWebpackPlugin结合使用
			<img src="./empty_data.png" alt=""> -->
		</main>
	</div>
</template>

<script>

export default {
	name: '',
	data() {
		return {
			
		}
	},
	methods: {
	},
	created() {
		console.log('home created')
	},
}
</script>

<style scoped lang="less">
@import url('./index.css');
// 主题颜色
@themeColors: #3AA1A9;

main {
	.poetry {
		display: flex;
		flex-direction: column;
		align-items: center;
		color: @themeColors;
		border: 1px solid @themeColors;
		border-radius: 6px;

		// background: url(../assets/error_500.png) no-repeat center;
	}
}
</style>
