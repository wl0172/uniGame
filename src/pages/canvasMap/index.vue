<script setup>
import { ref } from 'vue'
// 报错提示
import { errorCnsRefTxt, monsterName,sceneName } from '@/utils/index.js'
// 全局属性
import { pageSwitch, pageArr, txtArr, scrollIndex } from '@/state/index.js'
// 接口
import { postUserTravel } from '@/api/index.js'

// 去新场景
const handleToNewMap = (item, index) => {
	postUserTravel({
		'local': item.id
	}).then((res)=>{
		if(res != null){
			// pageSwitch.value.index = item.id == 4 ? 0 : item.id
			// setTimeout(() => {
			// 	scrollIndex.value.id = `id-${txtArr.value.list.length-1}`
			// },50)
			uni.navigateBack({
				delta: 1,
			})
		}		
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
					<div>
						<text>{{ item.name }}</text>
						<text 
							style="color: #4bbda3;" 
							v-if="pageSwitch.index == item.id || (pageSwitch.index == 0 && item.id == 4)">
							 - 当前
						</text>
					</div>
					
					<div class="conSceneListLi_title_state">服务中</div>
				</div>
				<div class="conSceneListLi_txt" v-if="sceneName(item.linked)">可去：{{ sceneName(item.linked) }}</div>
				<div class="conSceneListLi_txt" v-if="monsterName(item.monsters)">当前怪：{{ monsterName(item.monsters) }}</div>
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
		background-image: url('https://img0.baidu.com/it/u=1480154962,515565636&fm=253&fmt=auto&app=138&f=JPEG?w=678&h=370');
		background-repeat: no-repeat;
		background-size: 100% 100%;
		.conSceneListL {
			width: 100%;
			height: 90%;
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
					.conSceneListLi_title_state {
						color: #4bbda3;
					}
				}
				.conSceneListLi_txt {
					margin: 20rpx 0 0rpx 0;
				}
			}
		}
	}
</style>
