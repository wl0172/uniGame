<script setup>
	import { ref } from 'vue'
	let a = ref('index')
	
	// 拖着摧残的身体复活
	const handleBrokenBlood = () => {
		uni.reLaunch({
			url: '/pages/content/index'
		})
	}
	// 满血复活
	const handleFullBlood = () => {
		uni.showToast({
			icon: 'none',
			title: '需要看广告',
			duration: 3000
		})
	}
	
</script>

<template>
	<div class="diePageDiv">
		<div class="diePageDiv_conter">
			<div class="diePageDiv_conter_txt">你被残忍的击败了...</div>
			<div class="diePageDiv_conter_but">
				<button class="diePageDiv_conter_button" @click="handleBrokenBlood">拖着残破的身体复活</button>
				<button class="diePageDiv_conter_button" @click="handleFullBlood">满血复活</button>
			</div>
		</div>
	</div>
</template>

<style scoped lang="less">
.diePageDiv{
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
	position: relative;
	.diePageDiv_conter{
		width: 100%;
		height: 50%;
		position: relative;
		.diePageDiv_conter_txt{
			text-align: center;
		}
		.diePageDiv_conter_but{
			position: absolute;
			bottom: 0;
			width: 100%;
		}
		.diePageDiv_conter_button{
			width: 67%;
			margin: 30rpx auto;
		}
	}
}
</style>
