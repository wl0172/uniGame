<template>
	<div class="comHeaderDiv">
		
		<div>{{ timeDate }}</div>
		
		<div class="comHeaderDiv_addName">{{ addName }}</div>
		
	</div>
</template>

<script setup>
	import { ref } from "vue"
	import monent from "moment"
	
	let timeDate = ref(new monent().format('YYYY-MM-DD'))
	let addName = ref('恒北城（城门）')
	
</script>

<style scoped lang="less">
.comHeaderDiv{
	width: auto;
	height: 100rpx;
	background: #ffe1b7;
	padding: 0 30rpx;
	font-size: 28rpx;
	display: flex;
	align-items: center;
	justify-content: space-between;
	.comHeaderDiv_addName{
		color: red;
	}
}
</style>