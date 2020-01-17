<template>
	<div id="app">
		<Page></Page>
	</div>
</template>

<script>
import Page from './page/index.vue'
export default {
	name: '',
	components: {
		Page,
	},
	data() {
		return {
			
		}
	},
	methods: {
	},
	created() {
	},
}
</script>

<style lang="less">

body {
	/* background: #f99; */
	padding: 100px;
	background: url('./assets/loginbg.png');
}

</style>
