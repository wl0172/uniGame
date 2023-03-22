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
			<div>123</div>
			<div>123</div>
			<div>123</div>
			<div>123</div>
			<div>123</div>
			<div>123</div>
			<div>123</div>
			<div>123</div>
			<div>123</div>
			<div>123</div>
			<div>123</div>
			<div>{{ headerMargin }}</div>
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