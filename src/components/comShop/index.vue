<script setup>
import { ref } from "vue"
// 全局的属性
import { pageSwitchMenu, hiddenPopup } from '@/state/index.js'

let shopArr = ref(40)

const handleShowToast = () => {
	uni.showToast({
		icon: 'none',
		title: '极品药水'
	})
}

const handleBack = () => {
	uni.navigateBack({
		delta: 1
	})
}

</script>

<template>
	
	<div class="comShopD">
		<div class="comShopDiv">
			
			<div @click="handleBack">关闭</div>
			
			<!-- npc -->
			<div class="comShopDiv_npc">
				<div class="comShopDiv_npc_top">
					<div class="comShopDiv_npc_top_image">
						<image src="@/static/image/1.png" mode=""></image>
					</div>
					<div class="comShopDiv_npc_top_txt">
						<div>xxxxxxxx的商店</div>
						<div>xxxxxxxx的一句话</div>
					</div>
				</div>
				
				<div class="comShopDiv_npc_tab">
					<div class="comShopDiv_npc_tab_li" v-for="(item, index) in shopArr">
						<image @click="handleShowToast" src="@/static/image/1.png" mode=""></image>
					</div>
				</div>
			</div>
			<!-- me -->
			<div class="comShopDiv_npc">
				
				<div class="comShopDiv_npc_top">
					<div class="comShopDiv_npc_top_image">
						<image src="@/static/image/1.png" mode=""></image>
					</div>
					<div class="comShopDiv_npc_top_txt">
						<div>xxxxxxxx的商店</div>
						<div>xxxxxxxx的一句话</div>
					</div>
				</div>
				
				<div class="comShopDiv_npc_tab">
					<div class="comShopDiv_npc_tab_li" v-for="(item, index) in shopArr">
						<image @click="handleShowToast" src="@/static/image/1.png" mode=""></image>
					</div>
				</div>
			</div>
		
		</div>
	</div>
	
</template>

<style scoped lang="less">
	.comShopD{
		image{
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
		.comShopDiv{
			position: absolute;
			bottom: 30rpx;
			width: 100%;
			// npc
			.comShopDiv_npc{
				margin: 0 0 30rpx 0;
				.comShopDiv_npc_top{
					display: flex;
					padding: 0 25rpx 10rpx 25rpx;
					.comShopDiv_npc_top_image{
						width: 200rpx;
						height: 200rpx;
						overflow: hidden;
						margin: 0 30rpx 0 0;
					}
					.comShopDiv_npc_top_txt{
						
					}
				}
				.comShopDiv_npc_tab{
					display: grid;
					grid-template-columns: 87.5rpx 87.5rpx 87.5rpx 87.5rpx 87.5rpx 87.5rpx 87.5rpx 12.5%;
					grid-column-gap: 1rpx;
					grid-row-gap: 1rpx;
					border: 1rpx solid;
					justify-content: center;
					width: 700rpx;
					height: 400rpx;
					margin: 0 auto;
					overflow: auto;
					.comShopDiv_npc_tab_li{
						width: auto;
						height: 87.5rpx;
						line-height: 87.5rpx;
						// padding: 5rpx;
						text-align: center;
						background: red;
						overflow: hidden;
					}
				}
			}
		}
	}
</style>