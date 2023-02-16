<script setup>
import { ref } from "vue"
import { pageSwitch } from '@/state/index.js'

// 去新场景
const handleToNewMap = (item, index) => {
	uni.showToast({
		icon: 'none',
		title: item + '去新场景======'
	})
	pageSwitch.value.index = 0
	pageSwitch.value.key = 'page_battle'
}

</script>

<template>
	<div class="conSceneListLi" v-for="(item, index) in [1, 2, 3]" :key="index"
		@click="handleToNewMap(item, index)">
		<div class="conSceneListLi_title">
			<div>{{ item }}</div>
			<div class="conSceneListLi_title_state">服务中</div>
		</div>
		<div class="conSceneListLi_txt">服务内容：xxxxxx</div>
		<div class="conSceneListLi_tiem">开图时间：xxxxxx</div>
	</div>
</template>

<style scoped lang="less">
.conSceneListLi {
	padding: 30rpx;
	background: #ffffff;
	color: #9d9d9d;
	font-size: 28rpx;
	margin: 0 0 30rpx 0;
	border-radius: 10rpx;
	background: #edecee;

	.conSceneListLi_title {
		display: flex;
		align-items: center;
		justify-content: space-between;
		color: black;
		font-size: 32rpx;
		margin: 0 0 20rpx 0;

		.conSceneListLi_title_state {
			color: #4bbda3;
		}
	}

	.conSceneListLi_txt {}

	.conSceneListLi_time {}
}
</style>