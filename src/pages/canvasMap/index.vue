<script setup>
import { ref } from 'vue'
import { pageSwitch, pageArr, txtArr, scrollIndex } from '@/state/index.js'

// 去新场景
const handleToNewMap = (item, index) => {		
	pageSwitch.value.index = index
	setTimeout(() => {
		scrollIndex.value.id = `id-${txtArr.value.list.length-1}`
	},50)
	uni.navigateBack({
		delta: 1,
	})
}
</script>

<template>
	<div class="conSceneList">
		<div class="conSceneListL">
			<div
				class="conSceneListLi"
				v-for="(item, index) in pageArr.list"
				:key="index"
				@click="handleToNewMap(item, index)">
				<div class="conSceneListLi_title">
					<div>{{ item.name }}<text>{{ (pageSwitch.index+1) == item.id ? ' - 当前' : '' }}</text></div>
					<div class="conSceneListLi_title_state">服务中</div>
				</div>
				<div class="conSceneListLi_txt">服务内容：内有暗影猫妖，交易等等</div>
				<!-- <div class="conSceneListLi_tiem">开图时间：xxxxxx</div> -->
			</div>
		</div>
	</div>
</template>

<style scoped lang="less">
	.conSceneList {
		width: 100%;
		height: 100vh;
		display: flex;
		align-items: center;
		.conSceneListL {
			width: 100%;
			height: 80%;
			overflow: auto;
			.conSceneListLi {
				padding: 30rpx;
				background: #ffffff;
				color: #9d9d9d;
				font-size: 28rpx;
				margin: 0 30rpx 30rpx 30rpx;
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

				.conSceneListLi_txt {
				}

				.conSceneListLi_time {
				}
			}
		}
	}
</style>
