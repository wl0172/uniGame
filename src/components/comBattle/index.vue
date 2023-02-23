<script setup>
import { ref } from "vue"
// 线
import ComLine from "@/components/comLine/index.vue"
// 弹窗
import ComPopup from "@/components/comPopup/index.vue"
// 背包
import ComKnapsack from "@/components/comKnapsack/index.vue"

import { pageSwitch, hiddenPopup } from '@/state/index.js'

// 进度条配置
const progressConfig = {
	border_radius: 50,
	stroke_width: 15,
	active: false,
	backgroundColor: '#e6e6e670'
}
// 怪物 - 角色
let battleInfo = ref({
	// 怪物
	monster: {
		blood: 100,
		name: '怪物',
		img: '../../../static/1.png'
	},
	// 玩家
	player: {
		blood: 100,
		name: '玩家',
		img: '../../../static/1.png'
	}
})

const handleSeachItem = () => {
	uni.showToast({
		icon: 'none',
		title: '探索'
	})
}
// 打开地图 - 列表
const handleToMap = () => {
	pageSwitch.value.index = 1
	pageSwitch.value.key = 'page_sceneList'
}
// 打开背包
const hiddenOpenKnapsack = () => {
	hiddenPopup.value.show = true
}
// 商店
const handleToShop = () => {
	pageSwitch.value.index = 2
	pageSwitch.value.key = 'page_comShop'
}





setTimeout(()=>{
	let a = setInterval(()=>{
		if(battleInfo.value.monster.blood == 10){
			clearInterval(a)
		}else{
			battleInfo.value.monster.blood = battleInfo.value.monster.blood - 1
			battleInfo.value.player.blood = battleInfo.value.player.blood - 1
		}
	},1000)
},3000)


</script>

<template>
	<ComPopup :hiddenPopup="hiddenPopup.show">
		<ComKnapsack />
	</ComPopup>
	<div class="comBattleDiv">
			
		<!-- 怪物 - 英雄 -->
		<div class="comBattleDiv_battle_1">

			<div class="comBattleDiv_battle_1_div">
				<div class="comBattleDiv_battle_1_div_i">
					<div class="comBattleDiv_battle_1_div_img">
						<image src="../../static/1.png" alt="" />
					</div>
				</div>
				<div class="comBattleDiv_battle_1_div_i_name">{{ battleInfo.monster.name }}</div>
				<progress 
					style="margin: 0 0 auto 0"
					class="comBattleDiv_battle_1_div_progress" 
					:border-radius="progressConfig.border_radius"
					:stroke-width="progressConfig.stroke_width"
					activeColor="#FCC4B9"
					:backgroundColor="progressConfig.backgroundColor"
					:active="progressConfig.active"
					:percent="battleInfo.monster.blood"
				/>
				<div class="comBattleDiv_battle_1_div_blood1">{{ battleInfo.monster.blood }}</div>
			</div>

			<div class="comBattleDiv_battle_1_div">
				<div class="comBattleDiv_battle_1_div_i" style="margin: 0 0 0 auto;">
					<div class="comBattleDiv_battle_1_div_img">
						<image :src="battleInfo.player.img" alt="" />
					</div>
				</div>
				<div class="comBattleDiv_battle_1_div_i_name" style="float: right;">{{ battleInfo.monster.name }}</div>
				<progress 
					style="margin: 0 0 0 auto;transform:rotate(180deg)"
					class="comBattleDiv_battle_1_div_progress" 
					:border-radius="progressConfig.border_radius"
					:stroke-width="progressConfig.stroke_width"
					activeColor="#FCC4B9"
					:backgroundColor="progressConfig.backgroundColor"
					:active="progressConfig.active"
					:percent="battleInfo.player.blood"
				/>
				<div class="comBattleDiv_battle_1_div_blood2">{{ battleInfo.player.blood }}</div>
			</div>
		</div>
		
		<!-- 线 -->
		<ComLine />
		
		<!-- 战斗txt - 等 -->
		<div class="comBattleDiv_battle_2">
			
			<div v-for="(item, index) in [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]">12312321312</div>
			
		</div>

		<!-- 战斗txt -->
		<div class="comBattleDiv_battle_3">
			<div @click="handleSeachItem">探索</div>
			<div @click="handleToMap">地图</div>
			<div @click="hiddenOpenKnapsack">背包</div>
			<div @click="handleToShop">商店</div>
			<div>xxxx</div>
		</div>


	</div>
</template>

<style scoped lang="less">
.comBattleDiv {
	height: -webkit-fill-available;
	position: relative;
	background: #ff00001a;
	// 1
	padding: 120rpx 0 0 0;
	.comBattleDiv_battle_1 {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
		.comBattleDiv_battle_1_div_blood1{
			width: 90%;
			position: absolute;
			left: 0;
			z-index: 999;
			font-size: 12px;
			color: #ffffff;
			bottom: 0;
		}
		.comBattleDiv_battle_1_div_blood2{
			width: 90%;
			position: absolute;
			right: 0;
			z-index: 999;
			font-size: 12px;
			color: #ffffff;
			bottom: 0;
		}
		.comBattleDiv_battle_1_div{
			flex: 1;
			text-align: center;
			position: relative;
			.comBattleDiv_battle_1_div_i_name{
				width: 90%;
				font-size: 24rpx;
				margin: 0 0 20rpx 0;
			}
			.comBattleDiv_battle_1_div_progress{
				width: 90%;
				border-radius: 100rpx;
				overflow: hidden;
			}
			.comBattleDiv_battle_1_div_i{
				width: 90%;
				.comBattleDiv_battle_1_div_img{
					width: 200rpx;
					height: 200rpx;
					margin: 0 auto 90rpx auto;
					overflow: hidden;
					background: #ff00004f;
					image{
						width: 100%;
						height: 100%;
					}
				}
			}
		}
	}
	// 2
	.comBattleDiv_battle_2{
		background: #432b724d;
		width: auto;
		height: calc( 100% - 710rpx );
		overflow: auto;
		padding: 30rpx;
		font-size: 24rpx;
	}
	// 3
	.comBattleDiv_battle_3{
    width: auto;
    height: 200rpx;
    background: #ff000036;
    position: fixed;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex-wrap: wrap;
		div{
			width: 200rpx;
			height: 74rpx;
			background: red;
			line-height: 74rpx;
			text-align: center;
			border-radius: 10rpx;
			color: #ffffff;
			mask-origin: 0 20rpx 0 0;
		}
	}
}

</style>