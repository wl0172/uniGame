<script setup>
import { ref } from "vue"
import { handleStartForge, handleBack } from './index.js'
	import { headerMargin } from '@/state/bangs.js'

let a = ref('锻造')

</script>

<template>
	<div class="forgeDiv" :style="{ '--headerMargin': headerMargin + 'px' }">
		<!-- 操作面板 -->
		<div class="forgeDiv_conter">
			<!-- 汇率 -->
			<div>
				<div>今日汇率：</div>
				<div>金 100 = 1币</div>
				<div>银 100 = 1金</div>
				<div>铜 100 = 1银</div>
			</div>
			<!-- 商人 -->
			<div>
				<div>
					<div>头像</div>
					<div>名字 一句话</div>
				</div>
				<div>物品列表</div>
			</div>
			<!-- 介绍 -->
			<div></div>
			<!-- 我的背包 -->
			<div></div>
			
		</div>
		<!-- 操作菜单 -->
		<div class="forgeDiv_footer">
			<div>售出</div>
			<div>买进</div>
			<div @click="handleBack">离开</div>
		</div>
	
	</div>
</template>

<style scoped lang="less">
	@import url('index.less');
</style>