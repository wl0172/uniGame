
<script setup>
import { ref } from "vue"
import monent from "moment"

let timeDate = ref(new monent().format('YYYY-MM-DD'))
let addName = ref('A城（城门）')
// 接收父组件传参
const props = defineProps({
	comHeight: {
		type: Object
	},
})
const headerHeight = props.comHeight.headerHeight + props.comHeight.headerMargin


console.log('header','======')


</script>

<!-- 头部时间 - 地点 -->
<template>
	<div class="comHeaderD" :style="{ '--headerHeight': headerHeight + 'rpx' }">
		<div class="comHeaderDiv">
			<div>{{ timeDate }}</div>
			<div class="comHeaderDiv_addName">{{ addName }}</div>
		</div>
	</div>
</template>

<style scoped lang="less">
.comHeaderD {
	width: 100%;
	height: var(--headerHeight);
	background: #ffe1b700;
	position: relative;
	z-index: -1;
	.comHeaderDiv {
		width: calc(100% - 60rpx);
		height: 100rpx;
		line-height: 100rpx;
		padding: 0 30rpx;
		font-size: 28rpx;
		display: flex;
		align-items: center;
		justify-content: space-between;
		position: absolute;
		bottom: 0;

		.comHeaderDiv_addName {
			color: red;
		}
	}
}
</style>