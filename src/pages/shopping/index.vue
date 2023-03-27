<script setup>
import { ref } from "vue"
import { handleStartForge, handleBack } from './index.js'
import { headerMargin } from '@/state/bangs.js'
// 接口
import { getShopMarket, postShopMarket, deleteShopMarket } from '@/api/index.js'

let a = ref('商店')

getShopMarket().then((res)=>{
	console.log(res,'==========')
})

const handleSold = () => {

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
			<!-- 商人 -->
			<div class="forgeDiv_npc">
				<div>
					<div>npc头像</div>
					<div>名字 一句话</div>
				</div>
				<div class="forgeDiv_list">
					<div class="forgeDiv_list_ul">
						<div class="forgeDiv_list_li" v-for="(item,index) in new Array(100)">1</div>
					</div>
				</div>
			</div>
			<!-- 商人物品介绍 -->
			<div>商人物品介绍</div>
			<!-- 我的背包 -->
			<div>我的背包</div>
			
		</div>
		<!-- 操作菜单 -->
		<div class="forgeDiv_footer">
			<div @click="handleSold">售出</div>
			<div>买进</div>
			<div @click="handleBack">离开</div>
		</div>
	
	</div>
</template>

<style scoped lang="less">
	@import url('index.less');
</style>