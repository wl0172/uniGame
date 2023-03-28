<script setup>
import { onMounted, ref, watch } from "vue"
import { headerMargin } from '@/state/bangs.js'
// 配置文件
import {
	effectCnsRef,
	errorCnsRef,
	monsterRef,
	goodsRef,
	mapRef,
} from '@/state/config/index.js'
// 线
import ComLine from "@/components/comLine/index.vue"
// 全局属性
import { battleInfo,pageSwitchMenu, hiddenPopup } from '@/state/index.js'
// 血量展示
import { bloodShow } from '@/state/bloodConfig/index.js'
// 接口
import { postGoodsConsumeOnce, postGoodsEquip, postGoodsUnequipped } from '@/api/index.js'
import testVue from "../../pages/test.vue"

// 进度条配置
const progressConfig = {
	border_radius: 50,
	stroke_width: 15,
	active: false,
	backgroundColor: '#e6e6e670'
}
// 物品介绍
let txtValue = ref('')
// 背包物品
let wrapThing = battleInfo.value.backpack
// 身上穿戴的装备
// 1 为一次性消耗品；
// 2 为特殊品（任务或其他非一次性消耗道具）；
// 3 为左手装备；
// 4 为右手装备；
// 5 为双手装备（置于左手，右手此时也为 ID）；
// 6 为头部装备；
// 7 为胸腹装备；
// 8 为下身装备；
// 9 为脚部装备；
// 10 为配饰装备
// 身上的装备
let apparelEquip = ref({
	head: {},// 头部 - 6
	leftHand: {},// 左手 - 3 = 5
	rightHand: {},// 右手 - 4 = 5
	vitalPoints: {},// 胸甲 - 7
	Legs: {},// 腿部 - 8
	foot: {},// 脚 - 9
	Accessories: {},// 配饰 - 10
})

// 卸
let apparelEquipBut = ref(false)
// 装
let wrapThingBut = ref(false)

// 装备适配
const equipUtilUp = (i) => {
	// 头
	if(i.type == 6){
		apparelEquip.value.head = i
		apparelEquip.value.head.url = `../../static/image/${i.sku}.png`
	}
	// 左
	if(i.type == 3){
		apparelEquip.value.leftHand = i
		apparelEquip.value.leftHand.url = `../../static/image/${i.sku}.png`
	}
	// 右
	if(i.type == 4){
		apparelEquip.value.rightHand = i
		apparelEquip.value.rightHand.url = `../../static/image/${i.sku}.png`
	}
	// 胸甲
	if(i.type == 7){
		apparelEquip.value.vitalPoints = i
		apparelEquip.value.vitalPoints.url = `../../static/image/${i.sku}.png`
	}
	// 腿
	if(i.type == 8){
		apparelEquip.value.Legs = i
		apparelEquip.value.Legs.url = `../../static/image/${i.sku}.png`
	}
	// 脚
	if(i.type == 9){
		apparelEquip.value.foot = i
		apparelEquip.value.foot.url = `../../static/image/${i.sku}.png`
	}
	// 饰品
	if(i.type == 10){
		apparelEquip.value.Accessories = i
		apparelEquip.value.Accessories.url = `../../static/image/${i.sku}.png`
	}
	// 双手武器
	if(i.type == 5){
		apparelEquip.value.leftHand = i
		apparelEquip.value.rightHand = i
		apparelEquip.value.leftHand.url = `../../static/image/${i.sku}.png`
		apparelEquip.value.rightHand.url = `../../static/image/${i.sku}.png`
	}
}

const equipUtilDown = (i) => {
	// 头
	if(i.type == 6){
		apparelEquip.value.head = {}
		apparelEquip.value.head.url = ''
	}
	// 左
	if(i.type == 3){
		apparelEquip.value.leftHand = {}
		apparelEquip.value.leftHand.url = ''
	}
	// 右
	if(i.type == 4){
		apparelEquip.value.rightHand = {}
		apparelEquip.value.rightHand.url = ''
	}
	// 胸甲
	if(i.type == 7){
		apparelEquip.value.vitalPoints = {}
		apparelEquip.value.vitalPoints.url = ''
	}
	// 腿
	if(i.type == 8){
		apparelEquip.value.Legs = {}
		apparelEquip.value.Legs.url = ''
	}
	// 脚
	if(i.type == 9){
		apparelEquip.value.foot = {}
		apparelEquip.value.foot.url = ''
	}
	// 饰品
	if(i.type == 10){
		apparelEquip.value.Accessories = {}
		apparelEquip.value.Accessories.url = ''
	}
	// 双手武器
	if(i.type == 5){
		apparelEquip.value.leftHand = {}
		apparelEquip.value.rightHand = {}
		apparelEquip.value.leftHand.url = ''
		apparelEquip.value.rightHand.url = ''
	}
}

if(battleInfo.value.equipments.length){
	for(let i of battleInfo.value.equipments){
		equipUtilUp(i)
	}
}






// 身上的装备点击
const handleUserEquipments = (item) => {
	txtValue.value = item
	apparelEquipBut.value = true
	wrapThingBut.value = false
}
// 背包物品点击
const handleArticle = (item,index) => {
	for(let i of goodsRef.value){
		if(i.id == item.index){
			txtValue.value = item
		}
	}
	if(item.type !== 1){
		wrapThingBut.value = true
	}else{
		wrapThingBut.value = false
	}
	apparelEquipBut.value = false
}
// 丢弃
const handleDiscard = () => {
	uni.showToast({
		icon: 'none',
		title: '丢弃-暂无开发'
	})
}
//  使用
const handleAction = () => {
	postGoodsConsumeOnce({
		id: txtValue.value.id,
		count: 1
	}).then((res)=>{
		if(res){
			wrapThing.forEach((item,index)=>{
				if(item.sku == txtValue.value.sku){
					if(item.has > 1){
						item.has -= 1
					}else{
						wrapThing.splice(index,1)
					}
				}
			})
		}
	})
}
// 装备
const handleEquip = (i) => {
	// 上
	if(i){
		postGoodsEquip({
			id: txtValue.value.id
		}).then((res)=>{
			if(res){
				equipUtilUp(txtValue.value)
				
				wrapThing.forEach((item,index)=>{
					if(item.id == txtValue.value.id){
						wrapThing.splice(index,1)
					}
				})
				
				battleInfo.value.equipments.push(txtValue.value)
				txtValue.value = ''
				wrapThingBut.value = false
				
			}
		})
	}else{// 下
		postGoodsUnequipped({
			id: txtValue.value.id
		}).then((res)=>{
			if(res){
				equipUtilDown(txtValue.value)

				wrapThing.push(txtValue.value)

				battleInfo.value.equipments.forEach((item,index)=>{
					if(item.id == txtValue.value.id){
						battleInfo.value.equipments.splice(index,1)
					}
				})
				
				txtValue.value = ''
				apparelEquipBut.value = false
				
			}
		})
	}
}
// 离开
const handleBack = () => {
	txtValue.value = {}
	hiddenPopup.value.show = false
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
						<div class="comBattleDiv_left_li_div" @click="handleUserEquipments(apparelEquip.head)">
							<image :src="apparelEquip.head.url" mode=""></image>
						</div>
						<div class="comBattleDiv_left_li_div" @click="handleUserEquipments(apparelEquip.leftHand)">
							<image :src="apparelEquip.leftHand.url" mode=""></image>
						</div>
						<div class="comBattleDiv_left_li_div" @click="handleUserEquipments(apparelEquip.Legs)">
							<image :src="apparelEquip.Legs.url" mode=""></image>
						</div>
					</div>
					<div class="comBattleDiv_left_li comBattleDiv_left_lis">
						<image src="@/static/image/11.png" mode=""></image>
					</div>
					<div class="comBattleDiv_left_li">
						<div class="comBattleDiv_left_li_div" @click="handleUserEquipments(apparelEquip.vitalPoints)">
							<image :src="apparelEquip.vitalPoints.url" mode=""></image>
						</div>
						<div class="comBattleDiv_left_li_div" @click="handleUserEquipments(apparelEquip.rightHand)">
							<image :src="apparelEquip.rightHand.url" mode=""></image>
						</div>
						<div class="comBattleDiv_left_li_div" @click="handleUserEquipments(apparelEquip.foot)">
							<image :src="apparelEquip.foot.url" mode=""></image>
						</div>
					</div>
				</div>
				<!-- 右 -->
				<div class="comBattleDiv_battle_1_div" style="background: #fff5e1;">
					<div class="comBattleDiv_battle_1_divs">
						<!-- 钱 -->
						<div class="right_money">
							<div>人民币：</div>
							<div>金币：</div>
							<div>银币：</div>
							<div>铜币：</div>
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
							v-for="(item,index) in wrapThing" :key="item">
							<image style="width: 100%;height: 100%;" src="@/static/svg/2.svg" mode=""></image>
							<div class="comBattleDiv_battle_2_list_li_txt" style="top: 0;">id={{item.id}}{{item.name}}</div>
							<div class="comBattleDiv_battle_2_list_li_txt">{{ item.has }}</div>
						</div>
					</div>
				</div>
				<!-- 线 -->
				<ComLine />
				<div class="comBattleDiv_battle_2_txt">
					<div>{{ txtValue.name }}</div>
					<div>{{ JSON.stringify(txtValue) }}</div>
				</div>
			</div>
			
		</div>
		<!-- 操作菜单 -->
		<div class="forgeDiv_footer">
			<!-- <div v-if="txtValue.name" @click="handleDiscard">丢弃</div> -->
			<div v-if="txtValue.type == 1" @click="handleAction">使用</div>
			<div v-if="wrapThingBut" @click="handleEquip(1)">装备</div>
			<div v-if="apparelEquipBut" @click="handleEquip(0)">装卸</div>
			<div @click="handleBack">离开</div>
		</div>
	
	</div>
</template>

<style scoped lang="less">
	@import url('index.less');
</style>