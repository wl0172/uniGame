<template>
	<div class="content">

		<comHeader />


		<comSceneList />

		<button @click="handle">内容-返回</button>


	</div>
</template>

<script setup>
	import {
		onLoad,
		onShow
	} from "@dcloudio/uni-app"
	import comHeader from "@/components/comHeader/index.vue"
	import comSceneList from "@/components/comSceneList/index.vue"


	onShow(() => {})


	const handle = () => {
		uni.navigateBack({
			delta: 1
		})
	}
</script>

<style scoped lang="less">
	.content {
		width: 100%;
		height: 100%;
	}
</style>
