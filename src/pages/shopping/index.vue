<script setup>
import { ref } from "vue"
import { handleStartForge, handleBack } from './index.js'
	import { headerMargin } from '@/state/bangs.js'

let a = ref('锻造')

</script>

<template>
	<div class="forgeDiv" :style="{ '--headerMargin': headerMargin + 'px' }">
		<!-- 操作面板 -->
		<div class="forgeDiv_conter">
			<!-- 汇率 -->
			<div>
				金
				银
				铜
				<image style="width: 600px;height: 500px;position: absolute;left: -77px;" src="https://img0.baidu.com/it/u=536060619,532633719&fm=253&fmt=auto&app=138&f=JPEG?w=658&h=447" mode=""></image>
			</div>
			<!-- 商人 -->
			<div>
				<div>头像</div>
				<div>
					名字
					一句话
				</div>
			</div>
			<!-- 介绍 -->
			<div></div>
			<!-- 我的背包 -->
			<div></div>
			
		</div>
		<!-- 操作菜单 -->
		<div class="forgeDiv_footer">
			<div>丢弃</div>
			<div>售出</div>
			<div>买进</div>
			<div>使用</div>
			<div>装备</div>
			<div @click="handleBack">离开</div>
		</div>
	
	</div>
</template>

<style scoped lang="less">
	@import url('index.less');
</style>