<script setup>
import { ref, watch, computed } from "vue"
// 线
import ComLine from "@/components/comLine/index.vue"
// 接口
import { postUserInfo, getFightFind, postFightAction } from '@/api/index.js'
// 全局属性
import {
	pageArr,
	pageSwitch,
	pageSwitchMenu,
	battleInfo,
	hiddenPopup
} from '@/state/index.js'

import { 
	handleGetUserInfo,// 获取玩家最新信息
	handleSeachItem,// 探索
	handleRunAway,// 逃跑
	handleSkill,// 技能
	handleToMap,// 打开地图
	handleOpenKnapsack,// 打开背包
	handleToShop,// 打开商店
	handleLeave,// 退出
} from './action'

// 进度条配置
const progressConfig = {
	border_radius: 50,
	stroke_width: 15,
	active: false,
	backgroundColor: '#e6e6e670'
}

// 战斗信息 - txt
let txtArr = ref({
	list: [{
		liTxt: `来到了${pageArr.value.list[pageSwitch.value.index].name}`
	}]
})

// txt下标
let scrollIndex = ref({
	id: 'id-1'
})

// 监听 - 所有的场景 - switch - 更新txt
watch([pageSwitch.value], ([newValue1, oldValue1]) => {
	txtArr.value.list = [{
		liTxt: `来到了${pageArr.value.list[pageSwitch.value.index].name}`
	}]
})
// watch([txtArr.value.list], ([newValue1, oldValue1]) => {
// })












// 获取玩家最新信息
handleGetUserInfo()

</script>

<template>
	<div class="comBattleDiv">


		<!-- 角色 + 怪物 -->
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
					activeColor="#ceb284" 
					class="comBattleDiv_battle_1_div_progress"
					:border-radius="progressConfig.border_radius" 
					:stroke-width="progressConfig.stroke_width"
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
				<div 
					v-if="Object.keys(battleInfo.monster).length" 
					class="comBattleDiv_battle_1_div_i_name" 
					style="float: right;">{{ battleInfo?.monster?.name }}
				</div>
				<progress 
					v-if="Object.keys(battleInfo.monster).length" 
					style="margin: 0 0 0 auto;transform:rotate(180deg)" 
					activeColor="#ceb284" 
					class="comBattleDiv_battle_1_div_progress"
					:border-radius="progressConfig.border_radius" 
					:stroke-width="progressConfig.stroke_width"
					:backgroundColor="progressConfig.backgroundColor"
					:active="progressConfig.active" 
					:percent="battleInfo?.monster?.hp" 
				/>
				<div class="comBattleDiv_battle_1_div_blood2">{{ battleInfo?.monster?.hp }}</div>
			</div>
		</div>

		<!-- 线 -->
		<ComLine />

		<!-- 战斗txt -->
		<scroll-view 
			class="comBattleDiv_battle_2" 
			:scroll-y="true" 
			:show-scrollbar="false" 
			:scroll-anchoring="true"
			:scroll-with-animation="true" 
			:scroll-into-view="scrollIndex.id">
			<div v-for="(item, index) in txtArr.list" :id=" 'id-'+index ">
				<div>{{ item.liTxt }}</div>
			</div>
		</scroll-view>

		<!-- 操作 - button -->
		<div class="comBattleDiv_battle_3">
			
			<div class="" @click="handleSeachItem(txtArr,scrollIndex)">{{ Object.keys(battleInfo?.monster).length ? '战斗' : '探索' }}</div>
			
			<div class="" @click="handleRunAway(txtArr,scrollIndex)" v-if="Object.keys(battleInfo?.monster).length">逃跑</div>
			
			<div class="" @click="handleSkill" v-if="Object.keys(battleInfo?.monster).length">技能</div>
			
			<div class="" @click="handleOpenKnapsack">背包</div>
			
			<div class="" @click="handleToMap" v-if="!Object.keys(battleInfo?.monster).length">地图</div>
			
			<div class="" @click="handleToShop" v-if="!Object.keys(battleInfo?.monster).length">商店</div>
			
			<div class="" @click="handleLeave">退出</div>
			
		</div>



	</div>
</template>

<style scoped lang="less">
	@import url('index.less');
</style>
