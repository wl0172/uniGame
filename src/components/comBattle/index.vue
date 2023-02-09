<template>
	<div class="comBattleDiv">
		
		<!-- 怪物 - 英雄 -->
		<div class="comBattleDiv_battle">
			
			<div class="comBattleDiv_battle">
				<!-- <progress :percent="pgList[0]" show-info stroke-width="3" /> -->
				<div>怪物</div>
			</div>
			
			<div>人</div>
		</div>
		
		<!-- 血条 - 菜单 -->
		<div class="">
			<div>血条 - 菜单</div>
			<div>321</div>
		</div>
		
		<!-- 战斗txt -->
		<div class="">
			<div>战斗txt</div>
			<div>321</div>
		</div>
		
		
	</div>
</template>

<script setup>
	import { ref } from "vue"
	
	let a = ref('index')
	
</script>

<style scoped lang="less">
.comBattleDiv{
	.comBattleDiv_battle{
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
}
</style>