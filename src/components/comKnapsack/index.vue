<script setup>
	import { ref } from 'vue'
	import { headerMargin } from '@/state/bangs.js'
	// 全局属性
	import { pageArr, pageSwitch, pageSwitchMenu, battleInfo, hiddenPopup } from '@/state/index.js'

	import ComPeople from '@/components/comPeople/index.vue'

	let introduce = ref({
		txt: ''
	})

	// 左侧菜单
	let leftMent = ref({
		arr: [
			{
				inde: 1,
				name: '消耗品'
			},
			{
				inde: 2,
				name: '装备'
			}
		]
	})

	// 上
	const handleLeftMent = item => {
		console.log('左侧菜单======', item)
		uni.showToast({
			icon: 'none',
			title: item.name
		})
	}

	// 下
	const handleRightIn = item => {
		console.log('上点击======', item)
		introduce.value.txt = item
		uni.showToast({
			icon: 'none',
			title: item + ''
		})
	}

	// 关闭背包
	const handleCloseComKnapsack = () => {
		hiddenPopup.value.show = false
		hiddenPopup.value.width = 100
		hiddenPopup.value.height = 100
		pageSwitchMenu.value.index = 0
		pageSwitchMenu.value.key = 'ComKnapsack'
	}
</script>

<template>
	<div class="comKnapsackDiv">
		<!-- 上 - 人形-装备 -->
		<div class="comKnapsackDiv_left">
			<div
				class="comKnapsackDiv_left_seat"
				:style="{ '--conHeight': headerMargin + 'px' }"></div>
			<div
				class="comKnapsackDiv_leftUp"
				:style="{ '--conHeight': headerMargin + 'px' }">
				<div class="comKnapsackDiv_leftUp_left">
					<div class="comKnapsackDiv_leftUp_left1">
						<div>头像</div>
						<div class="comKnapsackDiv_leftUp_left1_txt">
							<div>name</div>
							<div>sex</div>
						</div>
					</div>
					<div class="comKnapsackDiv_leftUp_left2">
						<div>血条:</div>
						<div>100%</div>
					</div>
					<div class="comKnapsackDiv_leftUp_left2">
						<div>血条:</div>
						<div>100%</div>
					</div>
					<div class="comKnapsackDiv_leftUp_left2">
						<div>血条:</div>
						<div>100%</div>
					</div>
					<div class="comKnapsackDiv_leftUp_left2">
						<div>血条:</div>
						<div>100%</div>
					</div>
					<div class="comKnapsackDiv_leftUp_left2">
						<div>血条:</div>
						<div>100%</div>
					</div>
				</div>

				<div class="comKnapsackDiv_leftUp_right">
					<!-- <div>1</div>
					<div>1</div>
					<div>1</div>
					<div>1</div>
					<div>1</div>
					<div>1</div> -->
					<ComPeople />
				</div>
			</div>
		</div>
		<!-- 下 - 物品 -->
		<div class="comKnapsackDiv_right">
			<div class="comKnapsackDiv_right_top">
				<!-- 物品列表 -->
				<div
					class="comKnapsackDiv_right_list"
					v-for="(item, index) in [1, 2, 3]"
					@click.stop="handleRightIn(item)">
					<div class="comKnapsackDiv_right_li">
						1
					</div>
				</div>
			</div>
			<!-- 物品介绍 -->
			<div class="comKnapsackDiv_right_txt">{{ introduce.txt }}</div>
			<!-- 操作 -->
			<div class="comKnapsackDiv_right_butlist">
				<div class="comKnapsackDiv_right_button">装备</div>
				<div
					class="comKnapsackDiv_right_button"
					@click="handleCloseComKnapsack">
					关闭
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped lang="less">
	@import url('index.less');
</style>
