<script setup>
	import { ref } from 'vue'
	// 组件
	import ComCanvas from '@/components/comCanvas/index.vue'

	// uni.showToast({
	// 	icon: 'none',
	// 	title: '测试',
	// 	duration: 5000
	// })
</script>

<template>
	<div>
		<ComCanvas />
	</div>
</template>

<style scoped lang="less">
	div {
		// color: @txtColor;
		color: black;
	}
</style>
