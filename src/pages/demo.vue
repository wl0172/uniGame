<script setup>
	import { ref } from 'vue'
	// 组件
	import ComCanvas from '@/components/comCanvas/index.vue'

	let a = ref('index')

	// uni.showToast({
	// 	icon: 'none',
	// 	title: '测试',
	// 	duration: 5000
	// })
</script>

<template>
	<div>
		<div>{{ a }}1234</div>
		<text>123456</text>

		<ComCanvas />
	</div>
</template>

<style scoped lang="less">
	div {
		// color: @txtColor;
		color: black;
	}
</style>
