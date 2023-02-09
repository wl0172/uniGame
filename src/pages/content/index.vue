<template>
	<div class="content">
		<!-- header -->
		<ComHeader :comHeight="conHeight" />
		<!-- 内容 -->
		<div class="contentDiv" :style="{ '--conHeight': (headerHeight + headerMargin)+'px'  }">
			
			<!-- 0.0.1 - 默认战斗场景 -->
			<!-- <ComBattle /> -->
			<!-- 场景列表 -->
			<!-- <ComSceneList /> -->
			<!-- 城镇 -->
			<!-- <ComMenu /> -->
			
			<component :is="pageArr.list[1]['1']"></component>
			

			<button @click="handle">内容--测试</button>

		</div>

	</div>
</template>

<script setup>
import { onLoad, onShow } from "@dcloudio/uni-app"
import { ref, markRaw } from 'vue'

import ComHeader from "@/components/comHeader/index.vue"

import ComBattle from "@/components/comBattle/index.vue"
import ComSceneList from "@/components/comSceneList/index.vue"
import ComMenu from "@/components/comMenu/index.vue"

import { headerMargin, mainHeight } from '@/state/bangs.js'

// header高度
const headerHeight = 90
// 刘海 + header高度
const conHeight = {
	headerHeight,
	headerMargin: headerMargin * 2
}

onShow(() => { })


const pageArr = ref({
	list: [{
		"0": markRaw(ComBattle),
	},{
		'1': markRaw(ComSceneList),
	},{
		'2': markRaw(ComMenu)
	}]
})

console.log(pageArr.value.list, '======')



// 测试
const handle = () => {
	// uni.showToast({
	// 	icon: 'none',
	// 	title: '测试',
	// 	duration: 5000	
	// })
}

</script>

<style scoped lang="less">
.content {
	width: 100%;
	height: 100%;
	.contentDiv {
		height: calc( 100vh - var(--conHeight) );
		overflow: auto;
		padding: 30rpx;
	}
}
</style>
