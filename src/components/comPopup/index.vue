<script setup>
import { hiddenPopup } from '@/state/index.js'
import { ref } from "vue"
let a = ref('我是popup')

// 接收父组件传参
const props = defineProps({
	popupWidth: {
		type: Number
	},
	popupHeight: {
		type: Number
	},
})


console.log(props, '我是popup======')

// 关闭弹窗
const handleDiv = () => {
	hiddenPopup.value.show = false
}

// 弹窗内点击
// const handleDivConter = (e) => {
// 	console.log(e, 'popup------弹窗内点击------')
// }



</script>

<template>
	
	<div class="comPopupDiv" v-if="hiddenPopup.show" @click.stop="handleDiv">
		<div class="comPopupDiv_conter" @click.stop>
			<slot></slot>
		</div>
	</div>
	
</template>

<style scoped lang="less">
.comPopupDiv{
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
	left: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	z-index: 9999;
	.comPopupDiv_conter{
		width: 90%;
    height: 70%;
    background: #fff;
    border-radius: 20rpx;
		overflow: auto;
	}
}
</style>