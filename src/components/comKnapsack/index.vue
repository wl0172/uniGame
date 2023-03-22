<script setup>
import { ref } from "vue"
import { headerMargin } from '@/state/bangs.js'
// 线
import ComLine from "@/components/comLine/index.vue"
// 全局属性
import { battleInfo } from '@/state/index.js'
// 血量展示
import { bloodShow } from '@/state/bloodConfig/index.js'
// action
import { 
	txtValue,
	handleBack,
	handleArticle,
	handleDiscard,
	handleAction,
	handleEquip
} from './index.js'

// 进度条配置
const progressConfig = {
	border_radius: 50,
	stroke_width: 15,
	active: false,
	backgroundColor: '#e6e6e670'
}

</script>

<template>
	<div class="forgeDiv" :style="{ '--headerMargin': headerMargin + 'px' }">
		<!-- 操作面板 -->
		<div class="forgeDiv_conter">
			<!-- 左侧 - 角色 + 右侧 - 怪物 -->
			<div class="comBattleDiv_battle_1">
				<image style="width: 100%;height: 100%;position: absolute;" src="@/static/image/22.jpeg" mode=""></image>
				<!-- 左 -->
				<div class="comBattleDiv_battle_1_div comBattleDiv_left">
					<div class="comBattleDiv_left_li">
						<div class="comBattleDiv_left_li_div">1</div>
						<div class="comBattleDiv_left_li_div">1</div>
						<div class="comBattleDiv_left_li_div">1</div>
					</div>
					<div class="comBattleDiv_left_li comBattleDiv_left_lis">
						<image src="@/static/image/11.png" mode=""></image>
					</div>
					<div class="comBattleDiv_left_li">
						<div class="comBattleDiv_left_li_div">1</div>
						<div class="comBattleDiv_left_li_div">1</div>
						<div class="comBattleDiv_left_li_div">1</div>
					</div>
				</div>
				<!-- 右 -->
				<div class="comBattleDiv_battle_1_div" style="background: #fff5e1;">
					<div class="comBattleDiv_battle_1_divs">
						<div class="comBattleDiv_battle_1_div_img">
							<image src="@/static/image/11.png" alt="" />
						</div>
						<div class="comBattleDiv_battle_1_div_i_name">{{ battleInfo.player.name }}</div>
						<!-- 血量 -->
						<div class="comBattleDiv_battle_1_div_i_pro">
							<progress
								activeColor="#ceb284" 
								class="comBattleDiv_battle_1_div_progress"
								:border-radius="progressConfig.border_radius" 
								:stroke-width="progressConfig.stroke_width"
								:backgroundColor="progressConfig.backgroundColor" 
								:active="progressConfig.active"
								:percent="bloodShow(battleInfo.player,0)" />
							<div class="comBattleDiv_battle_1_div_blood1">血量：{{ battleInfo.player.hp }}</div>
						</div>
						<!-- 蓝量 -->
						<div class="comBattleDiv_battle_1_div_i_pro">
							<progress
								activeColor="#ceb284" 
								class="comBattleDiv_battle_1_div_progress"
								:border-radius="progressConfig.border_radius" 
								:stroke-width="progressConfig.stroke_width"
								:backgroundColor="progressConfig.backgroundColor" 
								:active="progressConfig.active"
								:percent="bloodShow(battleInfo.player,0)" />
							<div class="comBattleDiv_battle_1_div_blood1">血量：{{ battleInfo.player.hp }}</div>
						</div>
						<!-- 体力 -->
						<div class="comBattleDiv_battle_1_div_i_pro">
							<progress
								activeColor="#ceb284" 
								class="comBattleDiv_battle_1_div_progress"
								:border-radius="progressConfig.border_radius" 
								:stroke-width="progressConfig.stroke_width"
								:backgroundColor="progressConfig.backgroundColor" 
								:active="progressConfig.active"
								:percent="bloodShow(battleInfo.player,0)" />
							<div class="comBattleDiv_battle_1_div_blood1">血量：{{ battleInfo.player.hp }}</div>
						</div>
						<!-- 心情 -->
						<div class="comBattleDiv_battle_1_div_i_pro">
							<progress
								activeColor="#ceb284" 
								class="comBattleDiv_battle_1_div_progress"
								:border-radius="progressConfig.border_radius" 
								:stroke-width="progressConfig.stroke_width"
								:backgroundColor="progressConfig.backgroundColor" 
								:active="progressConfig.active"
								:percent="bloodShow(battleInfo.player,0)" />
							<div class="comBattleDiv_battle_1_div_blood1">血量：{{ battleInfo.player.hp }}</div>
						</div>
						
					</div>
				</div>
			
			</div>
			<!-- 线 -->
			<ComLine />
			<!-- 背包网格 + txt -->
			<div class="comBattleDiv_battle_2" >
				<div class="comBattleDiv_battle_2_list">
					<div>筛选</div>
					<div class="comBattleDiv_battle_2_list_ui">
						<div 
							@click="handleArticle(item,index)"
							class="comBattleDiv_battle_2_list_li" 
							v-for="(item,index) in new Array(150)" :key="item">
							<div>{{ index }}</div>
						</div>
					</div>
				</div>
				<!-- 线 -->
				<ComLine />
				<div class="comBattleDiv_battle_2_txt">{{ txtValue }}</div>
			</div>
			
		</div>
		<!-- 操作菜单 -->
		<div class="forgeDiv_footer">
			<div v-if="true" @click="handleDiscard">丢弃</div>
			<div v-if="true" @click="handleAction">使用</div>
			<div v-if="true" @click="handleEquip">装备</div>
			<div @click="handleBack">离开</div>
		</div>
	
	</div>
</template>

<style scoped lang="less">
	@import url('index.less');
</style>