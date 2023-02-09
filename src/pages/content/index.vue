<template>
	<div 
		class="content" 
		:style="{ '--conHeight': conHeight + 'px', 'padding-bottom': headerMargin + 'px' }">
		<!-- header -->
		<ComHeader :comHeight="conHeight" />
		<!-- 内容 -->
		<div class="contentDiv">

			<!-- 0.0.1 - 默认场景 -->
			<ComBattle />

			<!-- 0.0.2 - 默认场景 -->


			<!-- 0.0.3 - 默认场景 -->

			<!-- 场景列表 -->
			<ComSceneList />


			<button @click="handle">内容-返回-测试</button>

		</div>

	</div>
</template>

<script setup>
import headerMargin from '@/state/bangs.js'
import { onLoad, onShow } from "@dcloudio/uni-app"
import ComHeader from "@/components/comHeader/index.vue"
import ComBattle from "@/components/comBattle/index.vue"
import ComSceneList from "@/components/comSceneList/index.vue"

onShow(() => { })

// 内容区域高度
let conHeight = '100'

// 测试
const handle = () => {
	uni.navigateBack({
		delta: 1
	})
}
</script>

<style scoped lang="less">
.content {
	width: 100%;
	height: 100%;
	.contentDiv {
		height: calc(100% - var(--conHeight));
		overflow: auto;
		padding: 30rpx;
	}
}
</style>
