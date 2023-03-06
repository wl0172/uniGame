<script setup>
import { ref } from "vue"

let introduce = ref({
	txt: ''
})

// 左侧菜单
let leftMent = ref({
	arr: [{
		inde: 1,
		name: '消耗品'
	},{
		inde: 2,
		name: '装备',
	}]
})

// 左侧菜单
const handleLeftMent = (item) => {
	console.log('左侧菜单======',item)
	uni.showToast({
		icon: 'none',
		title: item.name
	})
}

// 右侧列表 - li
const handleRightIn = (item) => {
	console.log('右侧菜单======list-li', item)
	introduce.value.txt = item
	uni.showToast({
		icon: 'none',
		title: item+''
	})
}

</script>

<template>
	
	<div class="comKnapsackDiv">
	
		<div>11111</div>

		<!-- 左侧- 菜单 -->
		<div class="comKnapsackDiv_left">
			<div class="comKnapsackDiv_left_list" 
				v-for="(item, index) in leftMent.arr" 
				:key="item"
				 @click.stop="handleLeftMent(item)">
				{{ item.name }}
			</div>
		</div>
		<!-- 右侧 - 详情 -->
		<div class="comKnapsackDiv_right">
			<div class="comKnapsackDiv_right_top">
				<!-- 物品列表 -->
				<div class="comKnapsackDiv_right_list" 
					v-for="(item, index) in [1,2,3]"
					 @click.stop="handleRightIn(item)">
					<div class="comKnapsackDiv_right_li"></div>
				</div>
			</div>
			<!-- 物品介绍 -->
			<div class="comKnapsackDiv_right_txt">{{ introduce.txt }}</div>
			<!-- 操作 -->
			<div class="comKnapsackDiv_right_butlist">
				<div class="comKnapsackDiv_right_button">装备</div>
				<div class="comKnapsackDiv_right_button">装备</div>
			</div>
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
		overflow: auto;
		position: relative;
		border-right: 1rpx solid #d6d6d6;
		.comKnapsackDiv_left_list{
			height: 100rpx;
			overflow: auto;
			line-height: 100rpx;
			text-align: center;
			border-bottom: 1rpx solid #d6d6d6;
			// border-right: 1rpx solid #d6d6d6;
		}
	}
	.comKnapsackDiv_right{
		width: 100%;
		height: 100%;
		position: relative;
		.comKnapsackDiv_right_top{
			width: 100%;
			height: 65%;
			padding: 14rpx 0 0 0;
			overflow: auto;
			display: grid;
			grid-template-columns: 33% 33% 33%;
			justify-content: center;
			.comKnapsackDiv_right_list{
				width: 100%;
				height: 150rpx;
				margin: 0 0 10rpx 0;
				.comKnapsackDiv_right_li{
					width: 90%;
					height: 100%;
					background: red;
					margin: 0 auto;
				}
			}
		}
		.comKnapsackDiv_right_txt{
			width: 100%;
			height: 20%;
			background: red;
		}
		.comKnapsackDiv_right_butlist{
			width: 100%;
			height: calc( 15% - 7px );
			background: red;
			display: flex;
			align-items: center;
			justify-content: center;
			.comKnapsackDiv_right_button{
				color: #ffffff;
				padding: 14rpx;
				background: black;
				border-radius: 14rpx;
			}
		}
	}
}
</style>