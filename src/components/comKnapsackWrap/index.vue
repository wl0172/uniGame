<script setup>
import { onMounted, ref, watch } from "vue"
// 线
import ComLine from "@/components/comLine/index.vue"
// 全局属性
import { battleInfo } from '@/state/index.js'

// 接收父组件传参
const props = defineProps({
	// 物品介绍
	txtValue: {
		type: Object,
	}
})
// 事件
const emits = defineEmits(['handleArticle'])

// 背包物品
let wrapThing = battleInfo.value.backpack || []
// 组件内定义事件，父调用
const handleArticle = (item,index) => {
	emits('handleArticle', item,index)
}
	
</script>

<template>
	<div class="comBattleDiv_battle_2" >
		<div class="comBattleDiv_battle_2_list">
			<div>筛选</div>
			<div class="comBattleDiv_battle_2_list_ui">
				<div 
					@click="handleArticle(item,index)"
					class="comBattleDiv_battle_2_list_li" 
					v-for="(item,index) in wrapThing" :key="item">
					
					<image style="width: 100%;height: 100%;" :src="item.url" mode="" />
					
					<div class="comBattleDiv_battle_2_list_li_txt" style="top: 0;font-size: 24rpx;">
						<div>id={{item.id}}</div>
						<div>{{item.name}}</div>
					</div>
	
					<div class="comBattleDiv_battle_2_list_li_txt">{{ item.has }}</div>
				</div>
			</div>
		</div>
		<!-- 线 -->
		<ComLine />
		<div class="comBattleDiv_battle_2_txt">
			<div>{{ props.txtValue.name }}</div>
			<div>{{ JSON.stringify(props.txtValue) }}</div>
		</div>
	</div>
</template>

<style scoped lang="less">
	@import url('index.less');
</style>