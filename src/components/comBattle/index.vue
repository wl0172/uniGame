<script setup>
import { ref, watch, computed } from "vue"
// 线
import ComLine from "@/components/comLine/index.vue"
// 弹窗
import ComPopup from "@/components/comPopup/index.vue"
// 背包
import ComKnapsack from "@/components/comKnapsack/index.vue"

// 全局的属性
import { pageArr, pageSwitch, pageSwitchMenu, battleInfo, hiddenPopup } from '@/state/index.js'

// 进度条配置
const progressConfig = {
	border_radius: 50,
	stroke_width: 15,
	active: false,
	backgroundColor: '#e6e6e670'
}

// 场景 - 战斗 - txt
let txtArr = ref({
	list: [{
		liTxt: `来到了${pageArr.value.list[pageSwitch.value.index].name}`
	}]
})




// 探索
const handleSeachItem = () => {
	// 在战斗中
	if(battleInfo.value.player.isFight){
		uni.showLoading({
			icon: 'none',
			title: '战斗中...',
			mask: true
		})
		// 调用战斗接口
		setTimeout(()=>{
			txtArr.value.list.push({
				liTxt: '你攻击了一下史莱姆，造成了1点伤害'
			})
			battleInfo.value.monster.blood = battleInfo.value.monster.blood - 1
			uni.hideLoading()
		},1000)
	}else{
		uni.showLoading({
			icon: 'none',
			title: '探索中...',
			mask: true
		})
		console.log(battleInfo.value, '探索中...======')
		// 调用接口
		setTimeout(()=>{
			battleInfo.value.player.isFight = true
			txtArr.value.list.push({
				liTxt: '寻到一只史莱姆'
			})
			uni.hideLoading()
		},1000)
	}	
}

// 逃跑
const handleRunAway = () => {
	uni.showToast({
		icon: 'none',
		title: '逃跑开发中'
	})
	txtArr.value.list.push({
		liTxt: '逃跑了...'
	})
	battleInfo.value.player.isFight = false
}

// 技能
const handleSkill = () => {
	uni.showToast({
		icon: 'none',
		title: '技能开发中'
	})
}

// 打开地图
const handleToMap = () => {
	uni.navigateTo({
		url: '/pages/canvasMap/index',
	})
}
// 打开背包
const handleOpenKnapsack = () => {
	hiddenPopup.value.show = true
	hiddenPopup.value.width = 90
	hiddenPopup.value.height = 70
	pageSwitchMenu.value.index = 0
	pageSwitchMenu.value.key = 'ComKnapsack'
}
// 战斗中 - 打开消耗品
// const = hiddenOpenKnapsackFight = () => {}

// 打开商店
const handleToShop = () => {
	hiddenPopup.value.show = true
	hiddenPopup.value.width = 100
	hiddenPopup.value.height = 100
	pageSwitchMenu.value.index = 1
	pageSwitchMenu.value.key = 'ComShop'
}

// 监听 - 所有的场景switch
watch([pageSwitch.value], ([newValue1, oldValue1]) => {
	txtArr.value.list = [{
		liTxt: `来到了${pageArr.value.list[pageSwitch.value.index].name}`
	}]
})















// 计算
// const haveChineseName = computed(() => {
//   return pageSwitch.value.index > 0 ? pageArr.value.list[pageSwitch.value.index].name : pageArr.value.list[pageSwitch.value.index].name
// })


// 假的掉血机制
// setTimeout(()=>{
// 	let a = setInterval(()=>{
// 		if(battleInfo.value.monster.blood == 10){
// 			clearInterval(a)
// 		}else{
// 			battleInfo.value.monster.blood = battleInfo.value.monster.blood - 1
// 			battleInfo.value.player.blood = battleInfo.value.player.blood - 1
// 		}
// 	},1000)
// },3000)


</script>

<template>
	<div class="comBattleDiv">

			
		<!-- 怪物 - 英雄 -->
		<div class="comBattleDiv_battle_1">
			<!-- 角色 -->
			<div class="comBattleDiv_battle_1_div">
				<div class="comBattleDiv_battle_1_div_i">
					<div class="comBattleDiv_battle_1_div_img">
						<!-- <image :src="battleInfo.player.img" alt="" /> -->
					</div>
				</div>
				<div class="comBattleDiv_battle_1_div_i_name">{{ battleInfo.player.name }}</div>
				<progress 
					style="margin: 0 0 auto 0"
					class="comBattleDiv_battle_1_div_progress" 
					:border-radius="progressConfig.border_radius"
					:stroke-width="progressConfig.stroke_width"
					activeColor="#FCC4B9"
					:backgroundColor="progressConfig.backgroundColor"
					:active="progressConfig.active"
					:percent="battleInfo.player.blood"
				/>
				<div class="comBattleDiv_battle_1_div_blood1">{{ battleInfo.player.blood }}</div>
			</div>
			<!-- 怪物 -->
			<div class="comBattleDiv_battle_1_div">
				<div class="comBattleDiv_battle_1_div_i" style="margin: 0 0 0 auto;">
					<div class="comBattleDiv_battle_1_div_img">
						<!-- <image :src="battleInfo.monster.img" alt="" /> -->
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
					:percent="battleInfo.monster.blood"
				/>
				<div class="comBattleDiv_battle_1_div_blood2">{{ battleInfo.monster.blood }}</div>
			</div>
		</div>
		
		<!-- 线 -->
		<ComLine />
		
		<!-- 战斗txt - 等 -->
		<div class="comBattleDiv_battle_2">
			<div v-for="(item, index) in txtArr.list">
				<div>{{ item.liTxt }}</div>
			</div>
		</div>

		<!-- 操作button -->
		<div class="comBattleDiv_battle_3">
			
			<div class="" @click="handleSeachItem">{{ battleInfo.player.isFight ? '战斗' : '探索' }}</div>
			<div class="" v-if="battleInfo.player.isFight" @click="handleRunAway">逃跑</div>
			<div class="" v-if="battleInfo.player.isFight" @click="handleSkill">技能</div>
			
			<div @click="handleOpenKnapsack">背包</div>
			<div v-if="!battleInfo.player.isFight" @click="handleToMap">地图</div>
			<div v-if="!battleInfo.player.isFight" @click="handleToShop">商店</div>
			
		</div>


	</div>
</template>

<style scoped lang="less">
@import url('index.less');
</style>