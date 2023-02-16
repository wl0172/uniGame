<script setup>
import { onLoad, onShow } from "@dcloudio/uni-app"
import { ref, reactive, markRaw, watch } from 'vue'
import { headerHeight, conHeight, headerMargin } from '@/state/bangs.js'
import ComHeader from "@/components/comHeader/index.vue"
// 场景 - page
import ComBattle from "@/components/comBattle/index.vue"
import ComSceneList from "@/components/comSceneList/index.vue"
import ComMenu from "@/components/comMenu/index.vue"

import { pageSwitch } from '@/state/index.js'

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

// 测试
const handle = () => {
	// uni.showToast({
	// 	icon: 'none',
	// 	title: '测试',
	// 	duration: 5000	
	// })
	// pageSwitch.value.index = 1
	// pageSwitch.value.key = 'page_sceneList'
}


watch(pageSwitch.value, (newValue, oldValue) => {
	pageSwitch.value.index = newValue.index
	pageSwitch.key = newValue.key
})






</script>

<template>
	<div class="content">
		<!-- 刘海屏header - 目前占位 -->
		<ComHeader :comHeight="conHeight" />
		<!-- 内容 -->
		<div class="contentDiv" :style="{ '--conHeight': ((headerMargin + (headerHeight/2+3))) + 'px' }">
			<component :is="pageArr.list[pageSwitch.index][pageSwitch.key]" />
		</div>
	</div>
</template>

<style scoped lang="less">
.content {
	width: 100%;
	height: 100vh;
	// background-image: url('@/static/3.png');
	
	background-position: center center;
	background-repeat: no-repeat;
	background-attachment: fixed;
	background-size: 100% 100%;
	
	.contentDiv {
		height: calc(100vh - var(--conHeight));
		overflow: auto;
		// padding: 30rpx 0;
	}
}
</style>
