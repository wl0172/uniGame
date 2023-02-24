<script setup>
import { onLoad, onShow } from "@dcloudio/uni-app"
import { ref, reactive, markRaw,onMounted, watch } from 'vue'
import { headerHeight, conHeight, headerMargin } from '@/state/bangs.js'
// 默认的刘海屏兼容header
import ComHeader from "@/components/comHeader/index.vue"
// 场景内菜单 - 弹窗形式 - 组件
import ComPopup from "@/components/comPopup/index.vue"

// 全局属性 - 场景 - 切换
import { pageArr,pageSwitch, hiddenPopup } from '@/state/index.js'

// 场景 - 二级页
// import { pageArr, pageSwitch, hiddenPopup } from '@/state/index.js'


// 背包
import ComKnapsack from '@/components/comKnapsack/index.vue'
// 商店
import ComShop from '@/components/comShop/index.vue'




let popupInfo = ref({
	popupWidth: 100,
	popupHeight: 100
})

// 监听页面组件变化
watch([pageSwitch.value, hiddenPopup.value], (newValue, oldValue) => {
	// console.log(newValue, '  主场景watch======')
	pageSwitch.value.index = newValue[0].index
	pageSwitch.key = newValue[0].key
})

</script>

<template>
	<div class="content">
		<!-- 刘海屏header - 目前占位 - 显示场景name -->
		<ComHeader :comHeight="conHeight" />
		<!-- 主场景 -->
		<div class="contentDiv" :style="{ '--conHeight': ((headerMargin + (headerHeight/2+3))) + 'px' }">
			<component :is="pageArr.list[pageSwitch.index][pageSwitch.key]" />
		</div>
		<!-- 操作面板 - 以弹窗形式 -->
		<ComPopup :hiddenPopup="hiddenPopup.show">
			<component :is="ComKnapsack" />
		</ComPopup>
	</div>
	<!-- 背景图 -->
	<!-- <div class="bg"></div> -->
</template>

<style scoped lang="less">
@import url('index.less');
</style>
