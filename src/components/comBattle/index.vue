<script setup>
import { ref, watch, computed } from "vue"
// 线
import ComLine from "@/components/comLine/index.vue"
// 弹窗 - 包裹所有
import ComPopup from "@/components/comPopup/index.vue"
// 接口
import { postUserInfo, getFightFind, postFightAction } from '@/api/index.js'
// 全局属性
import { pageArr, pageSwitch, pageSwitchMenu, useInfo, battleInfo, hiddenPopup } from '@/state/index.js'

let scrollTop = ref({
	top: 0
})
let scrollInfoView = ref({
	id: 'id-1'
})

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

// 获取玩家最新信息 -1
const handleGetUserInfo = () => {
	postUserInfo({
    "player": true,// 角色信息
    "fighter": true,// 同寻怪接口 战斗
    "backpack": true,// 背包 玩家背包中的物品
    "equipment": true// 装备 玩家身上的装备
	}).then((res)=>{
		console.log(res, '获取玩家最新信息 -1======')
		uni.setStorageSync('playerInfo', res.player);
		battleInfo.value.player = res?.player ? res?.player : {},
		battleInfo.value.monster = res?.fighter ? res?.fighter : {}
	})
}

























// 获取玩家最新信息 -1
handleGetUserInfo()

// 监听 - 所有的场景switch
watch([pageSwitch.value], ([newValue1, oldValue1]) => {
	txtArr.value.list = [{
		liTxt: `来到了${pageArr.value.list[pageSwitch.value.index].name}`
	}]
})
watch([txtArr.value.list], ([newValue1, oldValue1]) => {
	
})

// InformationPanel

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
			battleInfo.value.monster.hp = battleInfo.value.monster.hp - 1
			uni.hideLoading()
		},1000)
	}else{
		uni.showLoading({
			icon: 'none',
			title: '探索中...',
			mask: true
		})
		// 寻怪接口
		getFightFind().then((res)=>{
			uni.hideLoading()
			battleInfo.value.monster = res
			txtArr.value.list.push({
				liTxt: res.name
			})
		})
	}	
}

// 逃跑
const handleRunAway = () => {
	
	txtArr.value.list.push({
		liTxt: `你逃跑了...`
	})
	scrolltolower()
	
	// setTimeout(()=>{
	// 	scrollInfoView.value.id = `id-${txtArr.value.list.length-1}`
	// 	// scrollTop.value.top = 999999
	// },3000)
	
	return
	
	postFightAction({
		action: 4
	}).then((res)=>{
		console.log(res, '逃跑======')
		// battleInfo.value.monster = {}
		txtArr.value.list.push({
			liTxt: `你逃跑了...`
		})
	})
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

// 退出
const handleLeave = () => {
	uni.clearStorageSync()
	uni.reLaunch({
		url: '/pages/loginOrRegister/index'
	})
}

const scrolltolower = () => {
	console.log(0)
}


// 假的掉血机制
// setTimeout(()=>{
// 	let a = setInterval(()=>{
// 		if(battleInfo.value.monster.hp == 10){
// 			clearInterval(a)
// 		}else{
// 			battleInfo.value.monster.hp = battleInfo.value.monster.hp - 1
// 			battleInfo.value.player.hp = battleInfo.value.player.hp - 1
// 		}
// 	},1000)
// },3000)

// console.log(battleInfo.value.player, 'battle======')

</script>

<template>
	<div class="comBattleDiv">
		
			
		<!-- 角色 - 怪物 -->
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
					activeColor="#ceb284"
					:backgroundColor="progressConfig.backgroundColor"
					:active="progressConfig.active"
					:percent="battleInfo.player.hp"
				/>
				<div class="comBattleDiv_battle_1_div_blood1">{{ battleInfo.player.hp }}</div>
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
					activeColor="#ceb284"
					:backgroundColor="progressConfig.backgroundColor"
					:active="progressConfig.active"
					:percent="battleInfo.monster.hp"
				/>
				<div class="comBattleDiv_battle_1_div_blood2">{{ battleInfo.monster.hp }}</div>
			</div>
		</div>
		
		<!-- 线 -->
		<ComLine />
		
		<!-- 战斗txt - 等 -->
		<!-- <div class="comBattleDiv_battle_2">
			<div v-for="(item, index) in txtArr.list">
				<div>{{ item.liTxt }}</div>
			</div>
		</div> -->
		
		<scroll-view 
			class="comBattleDiv_battle_2"
			:scroll-y="true"
			:show-scrollbar="false"
			:scroll-anchoring="true"
			:scroll-with-animation="true"
			:scroll-top="scrollTop.top"
			@scrolltolower="scrolltolower"
			
		>
			<div v-for="(item, index) in txtArr.list" :id=" 'id-'+index ">
				<div>{{ item.liTxt }}</div>
				<div>{{ scrollTop.top }}{{ scrollInfoView.id }}</div>
			</div>
		</scroll-view>
		

		<!-- 操作button -->
		<div class="comBattleDiv_battle_3">
			
			<div class="" @click="handleSeachItem">{{ battleInfo.monster?.hp ? '战斗' : '探索' }}</div>
			<div class="" v-if="battleInfo.monster?.hp" @click="handleRunAway">逃跑</div>
			<div class="" v-if="battleInfo.player.isFight" @click="handleSkill">技能</div>
			<div @click="handleOpenKnapsack">背包</div>
			<div v-if="!battleInfo.player.isFight" @click="handleToMap">地图</div>
			<div v-if="!battleInfo.player.isFight" @click="handleToShop">商店</div>
			<div @click="handleLeave">退出</div>
			
		</div>


	</div>
</template>

<style scoped lang="less">
@import url('index.less');
</style>