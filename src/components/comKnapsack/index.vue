<script setup>
import { ref } from "vue"
let a = ref('index')

</script>

<template>
	
	<div class="comKnapsackDiv">

		<!-- 左侧- 菜单 -->
		<div class="comKnapsackDiv_left">
			<div class="comKnapsackDiv_left_list" 
				v-for="(item, index) in [1,1,1,1,1]" 
				:key="item"
			>
				123
			</div>
		</div>
		<!-- 右侧 - 详情 -->
		<div class="comKnapsackDiv_right">
			<div>123</div>
			<div>123</div>
			<div>123</div>
			<div>123</div>
			<div>123</div>

			<div>123</div>
			<div>123</div>
			<div>123</div>
			<div>123</div>
			<div>123</div>
			<div>123</div>
			<div>123</div>
			<div>123</div>
			<div>123</div>
			<div>123</div>

			<div>123</div>
			<div>123</div>
			<div>123</div>
			<div>123</div>
			<div>123</div>
			<div>123</div>
			<div>123</div>
			<div>123</div>
			<div>123</div>
			<div>123</div>

			<div>123</div>
			<div>123</div>
			<div>123</div>
			<div>123</div>
			<div>123</div>
			<div>123</div>
			<div>123</div>
			<div>123</div>
			<div>123</div>
			<div>123</div>

			<div>123</div>
			<div>123</div>
			<div>123</div>
			<div>123</div>
			<div>123</div>
			<div>123</div>
			<div>123</div>
			<div>123</div>
			<div>123</div>
			<div>123</div>

			<div>123</div>
			<div>123</div>
			<div>123</div>
			<div>123</div>
			<div>123</div>
			<div>123</div>
			<div>123</div>
			<div>123</div>
			<div>123</div>
			<div>123</div>

			<div>123</div>
			<div>123</div>
			<div>123</div>
			<div>123</div>
			<div>123</div>
			<div>123</div>
			<div>123</div>
			<div>123</div>
			<div>123</div>
			<div>123</div>

			<div>123</div>
			<div>123</div>
			<div>123</div>
			<div>123</div>
			<div>123</div>
			<div>123</div>
			<div>123</div>
			<div>123</div>
			<div>123</div>
			<div>123</div>

			<div>123</div>
			<div>123</div>
			<div>123</div>
			<div>123</div>
			<div>123</div>
			<div>123</div>
			<div>123</div>
			<div>123</div>
			<div>123</div>
			<div>123</div>

			<div>123</div>
			<div>123</div>
			<div>123</div>
			<div>123</div>
			<div>123</div>
			<div>123</div>
			<div>123</div>
			<div>123</div>
			<div>123</div>
			<div>123</div>

			<div>123</div>
			<div>123</div>
			<div>123</div>
			<div>123</div>
			<div>123</div>
			<div>123</div>
			<div>123</div>
			<div>123</div>
			<div>123</div>
			<div>123</div>

			<div>123</div>
			<div>123</div>
			<div>123</div>
			<div>123</div>
			<div>123</div>
			<div>123</div>
			<div>123</div>
			<div>123</div>
			<div>123</div>
			<div>123</div>

			<div>123</div>
			<div>123</div>
			<div>123</div>
			<div>123</div>
			<div>123</div>
			<div>123</div>
			<div>123</div>
			<div>123</div>
			<div>123</div>
			<div>123</div>

			<div>123</div>
			<div>123</div>
			<div>123</div>
			<div>123</div>
			<div>123</div>
			<div>123</div>
			<div>123</div>
			<div>123</div>
			<div>123</div>
			<div>123</div>

			<div>123</div>
			<div>123</div>
			<div>123</div>
			<div>123</div>
			<div>123</div>
		</div>

	</div>
	
</template>

<style scoped lang="less">
.comKnapsackDiv{
	height: 100%;
	display: flex;
	overflow: hidden;
	.comKnapsackDiv_left{
		width: 30%;
		.comKnapsackDiv_left_list{
			height: 100rpx;
			overflow: auto;
			line-height: 100rpx;
			text-align: center;
			border-bottom: 1rpx solid #d6d6d6;
		}
	}
	.comKnapsackDiv_right{
		width: 70%;
		overflow: auto;
		display: flex;
    flex-wrap: wrap;
	}
}
</style>