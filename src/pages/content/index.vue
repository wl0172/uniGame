<script setup>
	import { onLoad, onShow, onHide } from '@dcloudio/uni-app'
	import { ref, reactive, markRaw, onMounted, watch } from 'vue'
	import { headerHeight, conHeight, headerMargin } from '@/state/bangs.js'
	// 默认的刘海屏兼容header
	import ComHeader from '@/components/comHeader/index.vue'
	// 场景内菜单 - 弹窗形式 - 组件
	import ComPopup from '@/components/comPopup/index.vue'

	// 全局属性 - 场景 - 切换
	import { pageArr, pageSwitch, pageArrMenu, pageSwitchMenu, hiddenPopup } from '@/state/index.js'

	// 背景音乐
	import { audioPlay, audioClose } from '@/state/audio/index.js'
	// onLoad(()=>{
	// 	audioPlay()
	// })
	// onShow(()=>{
	// 	audioPlay(2)
	// })
	// 暂时无用
	// onHide(()=>{
	// 	// audioClose()
	// })
	
</script>

<template>
	<div class="content">
		<!-- 刘海 - 占位用 -->
		<div class="contentSeat" :style="{ '--headerMargin': headerMargin + 'px' }"></div>
		<!-- 主场景 -->
		<div class="contentDiv" :style="{ '--headerMargin': headerMargin + 'px' }">
			<component :is="pageArr?.list[pageSwitch.index]?.pageComponent" />
		</div>
		<!-- 操作面板 - 以弹窗形式 -->
		<ComPopup :hiddenPopup="hiddenPopup.show">
			<component :is="pageArrMenu?.list[pageSwitchMenu.index]['pageKey']" />
		</ComPopup>
	</div>
	
</template>

<style scoped lang="less">
	@import url('index.less');
</style>
