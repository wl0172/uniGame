<script setup>
import { ref } from "vue"
import { handleStartForge, handleBack } from './index.js'


let a = ref('锻造')

</script>

<template>
	<div>
		<!-- 锻造面板 -->
		<div>
			<div>锻造书</div>
			<div>结果</div>
			<div>
				<div>1</div>
				<div>1</div>
				<div>1</div>
				<div>1</div>
			</div>
		</div>
		<!-- 背包物品 -->
		<div>
			<div>1</div>
			<div>1</div>
			<div>1</div>
			<div>1</div>
			<div>1</div>
			<div>1</div>
			<div>1</div>
		</div>
		<!-- 操作菜单 -->
		<div>
			<div @click="handleStartForge">开始</div>
			<div @click="handleBack">离开</div>
		</div>
	
	</div>
</template>

<style scoped lang="less">
	@import url('index.less');
</style>