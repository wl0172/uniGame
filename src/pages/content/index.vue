<script setup>
import { onLoad, onShow } from "@dcloudio/uni-app"
import { ref, reactive, markRaw,onMounted, watch } from 'vue'
import { headerHeight, conHeight, headerMargin } from '@/state/bangs.js'
// 默认的刘海屏兼容header
import ComHeader from "@/components/comHeader/index.vue"
// 场景内菜单 - 弹窗形式 - 组件
import ComPopup from "@/components/comPopup/index.vue"

// 全局属性 - 场景 - 切换
import { 
	pageArr,
	pageSwitch,
	pageArrMenu,
	pageSwitchMenu,
	hiddenPopup,
} from '@/state/index.js'








// 监听页面组件变化
// watch([pageSwitch.value, pageSwitchMenu.value], ([newValue1, oldValue1],[newValue2, oldValue2]) => {
// 	console.log(newValue1, '  主场景watch,newValue1======')
// 	console.log(newValue2, '  主场景watch,newValue2======')
// 	pageSwitch.value.index = newValue1[0].index
// 	pageSwitch.key = newValue1[0].key
// })

</script>

<template>
	<div class="content">
		<!-- 刘海屏header - 目前占位 - 显示场景name -->
		<ComHeader :comHeight="conHeight" />
		<!-- 主场景 -->
		<div class="contentDiv" :style="{ '--conHeight': ((headerMargin + (headerHeight/2+3))) + 'px' }">
			<component :is="pageArr?.list[pageSwitch.index]?.pageComponent" />
		</div>
		<!-- 操作面板 - 以弹窗形式 -->
		<ComPopup :hiddenPopup="hiddenPopup.show">
			<component :is="pageArrMenu?.list[pageSwitchMenu.index][pageSwitchMenu.key]" />
		</ComPopup>
	</div>
	<!-- 背景图 -->
	<div class="bg"></div>
</template>

<style scoped lang="less">
@import url('index.less');
</style>
