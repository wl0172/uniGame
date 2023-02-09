<script setup>
import { onLoad, onShow } from "@dcloudio/uni-app"
import { ref, markRaw } from 'vue'
import { headerHeight, conHeight, headerMargin } from '@/state/bangs.js'
import ComHeader from "@/components/comHeader/index.vue"
// 场景 - page
import ComBattle from "@/components/comBattle/index.vue"
import ComSceneList from "@/components/comSceneList/index.vue"
import ComMenu from "@/components/comMenu/index.vue"

onShow(() => { })

const pageArr = ref({
	list: [{
		// 0.0.1~3 - 默认战斗场景
		"page_battle": markRaw(ComBattle),
	}, {
		// 场景列表
		'page_sceneList': markRaw(ComSceneList),
	}, {
		// 城镇 - 菜单
		'page_menu': markRaw(ComMenu)
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

<template>
	<div class="content">
		<!-- header -->
		<ComHeader :comHeight="conHeight" />
		<!-- 内容 -->
		<div class="contentDiv" :style="{ '--conHeight': (headerHeight + headerMargin) + 'px' }">
			<component :is="pageArr.list[1].page_battle"></component>
			<button @click="handle">内容--测试</button>
		</div>
	</div>
</template>

<style scoped lang="less">
.content {
	width: 100%;
	height: 100%;

	.contentDiv {
		height: calc(100vh - var(--conHeight));
		overflow: auto;
		padding: 30rpx;
	}
}
</style>
