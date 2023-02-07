<template>
	<div>
		{{ a }}
		
		
		
		
		
		<button @click="handleToContent">按钮</button>
	</div>
</template>

<script setup>
	import { onLoad, onShow } from "@dcloudio/uni-app"
	import a from '@/state/index.js'
	
	onShow(() => {})
	

	const handleToContent = () => {
		a.value = 0
		uni.navigateBack({
			delta:1
		})
	}
	
</script>

<style scoped lang="less">

</style>
