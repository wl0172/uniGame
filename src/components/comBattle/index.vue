<script setup>
import { ref, watch, computed } from "vue"
// 线
import ComLine from "@/components/comLine/index.vue"
// 接口
import { postUserInfo, getFightFind, postFightAction } from '@/api/index.js'
// 全局属性
import { useInfo, pageArr, pageSwitch, pageSwitchMenu, battleInfo, hiddenPopup, txtArr, scrollIndex } from '@/state/index.js'

// action - 行为
import { 
	handleGetUserInfo,// 获取玩家最新信息
	handleSeachItem,// 探索
	handleRunAway,// 逃跑
	handleSkill,// 技能
	handleToMap,// 打开地图
	handleOpenKnapsack,// 打开背包
	handleToShop,// 打开商店
	handleToForge,// 锻造
	handleLeave,// 退出
} from './action'

// 血量展示
import { bloodShow } from '@/state/bloodConfig/index.js'

// 进度条配置
const progressConfig = {
	border_radius: 50,
	stroke_width: 15,
	active: false,
	backgroundColor: '#e6e6e670'
}

// 监听 - 所有的场景 - switch - 更新txt
watch([pageSwitch.value], ([newValue1, oldValue1]) => {
	txtArr.value.list.push({
		liTxt: `来到了${pageArr.value.list[pageSwitch.value.index].name}`
	})
})

// 获取玩家最新信息
handleGetUserInfo()

</script>

<template>
	<div class="comBattleDiv" v-if="useInfo.token">
		
		<!-- 内容 -->
		<div class="comBattleDiv_conter">
			<!-- 左侧 - 角色 + 右侧 - 怪物 -->
			<div class="comBattleDiv_battle_1">
				<!-- 角色 -->
				<div class="comBattleDiv_battle_1_div">
					<div class="comBattleDiv_battle_1_divs">
						<div class="comBattleDiv_battle_1_div_img">
							<!-- <image :src="battleInfo.player.img" alt="" /> -->
						</div>
						<div class="comBattleDiv_battle_1_div_i_name">{{ battleInfo.player.name }}</div>
						<progress 
							activeColor="#ceb284" 
							class="comBattleDiv_battle_1_div_progress"
							:border-radius="progressConfig.border_radius" 
							:stroke-width="progressConfig.stroke_width"
							:backgroundColor="progressConfig.backgroundColor" 
							:active="progressConfig.active"
							:percent="bloodShow(battleInfo.player,0)" 
						/>
						<div class="comBattleDiv_battle_1_div_blood1">{{ battleInfo.player.hp }}</div>
					</div>
				</div>
				<!-- 怪物 -->
				<div class="comBattleDiv_battle_1_div">
					<div class="comBattleDiv_battle_1_divs" v-if="Object.keys(battleInfo?.monster).length">
						<div class="comBattleDiv_battle_1_div_img">
							<image src="@/static/image/11.png" alt="" />
						</div>
						<div class="comBattleDiv_battle_1_div_i_name">{{ battleInfo?.monster?.name }}</div>
						<progress 
							style="transform:rotate(180deg)"
							activeColor="#ceb284"
							class="comBattleDiv_battle_1_div_progress"
							:border-radius="progressConfig.border_radius" 
							:stroke-width="progressConfig.stroke_width"
							:backgroundColor="progressConfig.backgroundColor" 
							:active="progressConfig.active"
							:percent="bloodShow(battleInfo.monster,1)" 
						/>
						<div class="comBattleDiv_battle_1_div_blood1">{{ battleInfo?.monster?.hp }}</div>
					</div>
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
		</div>
		<!-- 操作 -->
		<div class="comBattleDiv_battle_3">
			
			<div class="" @click="handleSeachItem(txtArr,scrollIndex)">{{ Object.keys(battleInfo?.monster).length ? '战斗' : '探索' }}</div>
			
			<div class="" @click="handleRunAway(txtArr,scrollIndex)" v-if="Object.keys(battleInfo?.monster).length">逃跑</div>
			
			<div class="" @click="handleSkill" v-if="Object.keys(battleInfo?.monster).length">技能</div>
			
			<div class="" @click="" v-if="Object.keys(battleInfo?.monster).length">道具</div>
			
			<div class="" @click="handleOpenKnapsack" v-if="!Object.keys(battleInfo?.monster).length">背包</div>
			
			<div class="" @click="handleToMap" v-if="!Object.keys(battleInfo?.monster).length">地图</div>
			
			<div class="" @click="handleToShop" v-if="!Object.keys(battleInfo?.monster).length">商店</div>
			
			<div class="" @click="handleToForge" v-if="!Object.keys(battleInfo?.monster).length">锻造</div>
			
			<div class="" @click="handleLeave">退出</div>
			
		</div>


	</div>
</template>

<style scoped lang="less">
	@import url('index.less');
</style>
