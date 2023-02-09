
<!-- 头部时间 - 地点 -->
<template>
	<div 
		class="comHeaderDiv" 
		:style="{ '--headerHeight': headerHeight + 'rpx','margin-top': headerMargin + 'px' }"
	>
		<div>{{ timeDate }}</div>
		<div class="comHeaderDiv_addName">{{ addName }}</div>
	</div>
</template>

<script setup>
import { ref } from "vue"
import monent from "moment"
import headerMargin from '@/state/bangs.js'

let timeDate = ref(new monent().format('YYYY-MM-DD'))
let addName = ref('恒北城（城门）')
// 接收父组件传参
const props = defineProps({
	comHeight: {
		type: String
	},
})
let headerHeight = props.comHeight


</script>

<style scoped lang="less">
.comHeaderDiv {
	width: auto;
	height: var(--headerHeight);
	background: #ffe1b7;
	padding: 0 30rpx;
	font-size: 28rpx;
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-top: var(--headerMargin);
	.comHeaderDiv_addName {
		color: red;
	}
}
</style>