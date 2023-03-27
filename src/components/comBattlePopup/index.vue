<script setup>
import { ref } from 'vue'

let a = ref('技能 - 消耗品')


</script>

<template>
	<div class="comBattlePopup_div">
		<div>{{ a }}</div>
	</div>
</template>

<style scoped lang="less">
	.comBattlePopup_div{
		position: absolute;
		top: -200px;
		right: 0;
		background: red;
		width: 200px;
		height: 200px;
	}
</style>
