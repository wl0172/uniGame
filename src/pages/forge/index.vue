<script setup>
import { ref } from "vue"
import { headerMargin } from '@/state/bangs.js'
// 包
import ComKnapsackWrap from "@/components/comKnapsackWrap/index.vue"
import { mixtrueArr, mixtrueArrFormula } from "@/utils/index.js"
// 接口
import { shopMixture } from '@/api/index.js'

// 锻造书介绍
let mixTxt = ref({})
// 包物品介绍
let txtValue = ref({})

// 锻造书点击
const handleMixTrue = (item, index) => {
	mixTxt.value = item
}
// 包物品点击
const handleArticle = (item,index) => {
	txtValue.value = item
}
// 开始锻造
const handleStartForge = () => {
	shopMixture({
		"count": 1,
		"sku": mixTxt.value.sku
	}).then((res)=> {
		console.log(res)
		if(res){
			uni.showToast({
				icon: 'none',
				title: '锻造成功'
			})
		}
	})
}
// 离开锻造炉
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
			<!-- 锻造书📚 -->
			<div class="forgeDiv_conter_book">
				<div class="forgeDiv_conter_book_ui" v-for="(item,index) in mixtrueArr()" @click="handleMixTrue(item,index)">
					{{ item.name }}
					<image class="forgeDiv_conter_book_ui_img" :src="`../../static/goods/${item.sku}.png`" mode="" />
				</div>
			</div>
			<!--  -->
			<div class="forgeDiv_conter_book_result">
				<div class="forgeDiv_conter_book_result_img">
					<image :src="mixTxt.url" mode=""></image>
				</div>
				<div style="text-align: center;">{{ mixTxt.name }}</div>
			</div>
			<div>
				<div v-for="(item,index) in mixtrueArrFormula(mixTxt.formula)">
					<div>{{ item.item.name }},{{ item.index }}</div>
				</div>
			</div>
			
			<div>----------</div>
			
			<!-- 背包网格 + txt -->
			<ComKnapsackWrap :txtValue="txtValue" @handleArticle="handleArticle" />
		</div>
		
		
		<!-- 操作菜单 -->
		<div class="forgeDiv_footer">
			<div @click="handleStartForge">开始</div>
			<div @click="handleBack">离开</div>
		</div>
	
	</div>
</template>

<style scoped lang="less">
	@import url('index.less');
</style>