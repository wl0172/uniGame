<script setup>
import { onLoad, onShow } from "@dcloudio/uni-app"
import { ref, reactive, markRaw,onMounted, watch } from 'vue'
import { headerHeight, conHeight, headerMargin } from '@/state/bangs.js'
import ComHeader from "@/components/comHeader/index.vue"

// 全局场景切换
import { pageArr,pageSwitch } from '@/state/index.js'

// 监听页面组件变化
watch(pageSwitch.value, (newValue, oldValue) => {
	pageSwitch.value.index = newValue.index
	pageSwitch.key = newValue.key
})
console.log('主页','======')

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
	<!-- 背景图 -->
	<div class="bg"></div>
</template>

<style scoped lang="less">
.content {
	width: 100%;
	height: 100vh;
	z-index: 99;
	position: relative;
	.contentDiv {
		height: calc(100vh - var(--conHeight));
		overflow: auto;
	}
}
.bg{
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-image: url('@/static/3.png');
	background-position: center center;
	background-repeat: no-repeat;
	background-attachment: fixed;
	background-size: 100% 100%;
	opacity: .5;
	z-index: 0;
}
</style>
