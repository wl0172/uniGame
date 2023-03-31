<script setup>
import { ref } from "vue"
import { backpackItem } from '@/utils/index.js'
// 属性
import { headerMargin } from '@/state/bangs.js'
// 全局属性
import { battleInfo } from '@/state/index.js'
// 接口
import { getShopMarket, postShopMarket, deleteShopMarket } from '@/api/index.js'
// 包
import ComKnapsackWrap from "@/components/comKnapsackWrap/index.vue"
// 线
import ComLine from "@/components/comLine/index.vue"
// 钱
import { moneyProject } from '@/state/money/index.js'

// 卖出state
let soldState = ref(false)
// 买进state
let buyInState = ref(false)

// 商店物品
let shopArr = ref([])
// 商店物品介绍
let shopTxt = ref({})
// 包物品介绍
let txtValue = ref({})
// 背包物品
let wrapThing = battleInfo.value.backpack

// 获取商品
getShopMarket().then((res)=>{
	console.log(res,'商店每日更新==========')
	shopArr.value = res?.shop_items
})

// 商店物品点击
const handleShopItem = (item) => {
	shopTxt.value = item
	soldState.value = false
	buyInState.value = true
}
// 包物品点击
const handleArticle = (item,index) => {
	txtValue.value = item
	soldState.value = true
	buyInState.value = false
}
// 买进
const handleBuyIn = () => {
	postShopMarket({
		"count": 1,
		"sku": shopTxt.value.sku,
		"type": shopArr.value[0].type
	}).then((res)=> {
		if(res){
			battleInfo.value.player.money = battleInfo.value.player.money - shopTxt.value.price
			if(wrapThing.some(item=>item.sku == shopTxt.value.sku)){
				for(let i of wrapThing){
					if(shopTxt.value.sku == i.sku){
						i.has += 1
					}
				}
			}else{
				let a = JSON.parse(JSON.stringify(shopTxt.value))
				a.has = 1
				wrapThing.push(a)
			}
		}
	})
}
// 售出
const handleSold = () => {
	deleteShopMarket({
	  "count": 1,
	  "id": txtValue.value.id
	}).then((res)=> {
		if(res){
			battleInfo.value.player.money = res.money
			if(txtValue.value.has > 1){
				txtValue.value.has -= 1
			}else{
				wrapThing.forEach((item,index)=>{
					if(txtValue.value.id == item.id){
						wrapThing.splice(index,1)
						txtValue.value = {}
					}
				})
			}
		}
	})
}
// 离开
const handleBack = () => {
	uni.navigateBack({
		delta: 1
	})
}


</script>

<template>
	<div class="forgeDiv" :style="{ '--headerMargin': headerMargin + 'px' }">
		<!-- 操作面板 -->
		<div class="forgeDiv_conter">
			<!-- 汇率 -->
<!-- 			<div>
				<div>今日汇率：</div>
				<div>金 100 = 1币</div>
				<div>银 100 = 1金</div>
				<div>铜 100 = 1银</div>
			</div> -->
			<div style="font-size: 24rpx;">
				<div>集市：是一种每日刷新售卖物品的地点</div>
				<div>它有 2~8 种商品长期出售、1~4 种商品偶尔出售（每日最少一种）</div>
				<div>本接口仅能获取玩家所处位置的售卖物品列表</div>
				<div class="right_money">
					<div>金币：{{ moneyProject(2) }}</div>
					<div>银币：{{ moneyProject(1) }}</div>
					<div>铜币：{{ moneyProject(0) }}</div>
				</div>
			</div>
			<!-- 商店物品 -->
			<div class="forgeDiv_npc">
				<div>
					<div>npc头像---------------------</div>
					<!-- <div>名字 一句话</div> -->
				</div>
				<div class="forgeDiv_list" v-if="shopArr.length">
					<div class="forgeDiv_list_ul">
						<div 
							@click="handleShopItem(item)" 
							class="forgeDiv_list_li" 
							v-for="(item,index) in backpackItem(shopArr[0].ids)" 
							:key="item">
							
							<image :src="item.url" mode="" />

							<div class="forgeDiv_list_li_txt">
								<div>sku={{item.sku}}</div>
								<div>{{item.name}}</div>
							</div>
							
						</div>
					</div>
				</div>
			</div>
			<!-- 商人物品介绍 -->
			<div>商人物品介绍：
				<div>{{ JSON.stringify(shopTxt) }}</div>
			</div>
			<!-- 线 -->
			<ComLine />
			<!-- 背包网格 + txt -->
			<ComKnapsackWrap :txtValue="txtValue" @handleArticle="handleArticle" />
			
		</div>
		<!-- 操作菜单 -->
		<div class="forgeDiv_footer">
			<div v-if="soldState" @click="handleSold">售出</div>
			<div v-if="buyInState" @click="handleBuyIn">买进</div>
			<div @click="handleBack">离开</div>
		</div>
	
	</div>
</template>

<style scoped lang="less">
	@import url('index.less');
</style>