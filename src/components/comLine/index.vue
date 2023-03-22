<script setup>
	import { ref } from 'vue'
</script>

<template>
	<!-- 线 -->
	<div class="comLine">
		<div class="comLine_line"></div>
		<div class="comLine_txt">Player</div>
		<div class="comLine_line"></div>
	</div>
</template>

<style scoped lang="less">
	.comLine {
		width: 100%;
		height: 50rpx;
		display: flex;
		align-items: center;
		justify-content: space-between;
		.comLine_line {
			width: 45%;
			height: 1rpx;
			background: red;
		}
		.comLine_txt {
			margin: 0 20rpx;
			font-size: 24rpx;
		}
	}
</style>
