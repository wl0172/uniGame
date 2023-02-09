<script setup>
import { ref } from "vue"

// 进度条配置
const progressConfig = {
	border_radius: 50,
	stroke_width: 15,
	active: false,
	backgroundColor: '#e6e6e6'
}
let battleInfo = ref({
	// 怪物
	monster: {
		blood: 100,
		name: '怪物',
	},
	// 玩家
	player: {
		blood: 100,
		name: '玩家',
	}
})

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
	<div class="comBattleDiv">
			
		<!-- 怪物 - 英雄 -->
		<div class="comBattleDiv_battle_1">

			<div class="comBattleDiv_battle_1_div">
				<div class="comBattleDiv_battle_1_div_blood1">{{ battleInfo.monster.blood }}</div>
				<progress 
					style="margin: 0 0 auto 0"
					class="comBattleDiv_battle_1_div_progress" 
					:border-radius="progressConfig.border_radius"
					:stroke-width="progressConfig.stroke_width"
					activeColor="red"
					:backgroundColor="progressConfig.backgroundColor"
					:active="progressConfig.active"
					:percent="[battleInfo.monster.blood]"
				/>
				<div class="comBattleDiv_battle_1_div_i">
					<div>{{ battleInfo.monster.name }}</div>
					<div class="comBattleDiv_battle_1_div_img">
						<img src="" alt="">
					</div>
				</div>
			</div>

			<div class="comBattleDiv_battle_1_div">
				<div class="comBattleDiv_battle_1_div_blood2">{{ battleInfo.player.blood }}</div>
				<progress 
					style="margin: 0 0 0 auto;transform:rotate(180deg)"
					class="comBattleDiv_battle_1_div_progress" 
					:border-radius="progressConfig.border_radius"
					:stroke-width="progressConfig.stroke_width"
					activeColor="red"
					:backgroundColor="progressConfig.backgroundColor"
					:active="progressConfig.active"
					:percent="[battleInfo.player.blood]"
				/>
				<div class="comBattleDiv_battle_1_div_i" style="margin: 0 0 0 auto;">
					<div>{{ battleInfo.player.name }}</div>
					<div class="comBattleDiv_battle_1_div_img">
						<img src="" alt="">
					</div>
				</div>
			</div>

		</div>
		
		<!-- 线 -->
		<div class="aaaa"></div>
		
		<!-- 血条 - 菜单 -->
		<div class="">
			<div>体力经验等等 - 菜单</div>
			<div>321</div>
		</div>

		<!-- 战斗txt -->
		<div class="">
			<div>战斗txt</div>
			<div>321</div>
		</div>
		
		
		<image style="width: 300rpx;height: 500rpx;" src="@/static/1.png" alt="" />


	</div>
</template>

<style scoped lang="less">
.comBattleDiv {
	.comBattleDiv_battle_1 {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
		.comBattleDiv_battle_1_div{
			flex: 1;
			text-align: center;
			position: relative;
			.comBattleDiv_battle_1_div_blood1{
				width: 90%;
				position: absolute;
				left: 0;
				z-index: 999;
				font-size: 12px;
				color: #ffffff;
			}
			.comBattleDiv_battle_1_div_blood2{
				width: 90%;
				position: absolute;
				right: 0;
				z-index: 999;
				font-size: 12px;
				color: #ffffff;
			}
			.comBattleDiv_battle_1_div_progress{
				width: 90%;
				border-radius: 100rpx;
				overflow: hidden;
			}
			.comBattleDiv_battle_1_div_i{
				width: 90%;
				.comBattleDiv_battle_1_div_img{
					width: 100rpx;
					height: 100rpx;
					background: red;
					margin: 0 auto;
				}
			}
		}
	}
}



.aaaa{
	width: 100%;
	height: 10rpx;
	background: #f5f5f5f5;
}
</style>