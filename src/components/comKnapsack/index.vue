<script setup>
	import { ref } from 'vue'
	import { headerMargin } from '@/state/bangs.js'
	// 全局属性
	import { pageArr, pageSwitch, pageSwitchMenu, battleInfo, hiddenPopup } from '@/state/index.js'
	// 血量展示
	import { bloodShow } from '@/state/bloodConfig/index.js'

	import ComPeople from '@/components/comPeople/index.vue'
	
	// 进度条配置
	const progressConfig = {
		border_radius: 50,
		stroke_width: 15,
		active: false,
		backgroundColor: '#e6e6e670'
	} 

	let introduce = ref({
		txt: ''
	})

	// 物品点击
	const handleRightIn = (item,index) => {
		console.log('物品点击======', index)
		introduce.value.txt = index+'物品点击'
	}

	// 关闭背包
	const handleCloseComKnapsack = () => {
		hiddenPopup.value.show = false
	}
</script>

<template>
	<div class="comKnapsackDiv">
		<!-- 上 - 人形-装备 -->
		<div class="comKnapsackDiv_left">
			<div class="comKnapsackDiv_left_seat" :style="{ '--conHeight': headerMargin + 'px' }"></div>
			<div class="comKnapsackDiv_leftUp" :style="{ '--conHeight': headerMargin + 'px' }">
				<div class="comKnapsackDiv_leftUp_left">
					<div class="comKnapsackDiv_leftUp_left1">
						<div class="comKnapsackDiv_leftUp_left1_image">
							<image src="../../static/image/bg_top1.png" mode=""></image>
						</div>
						<div class="comKnapsackDiv_leftUp_left1_txt">
							<div>name</div>
							<div>sex</div>
						</div>
					</div>
					<div class="comKnapsackDiv_leftUp_left2">
						<div>血条:</div>
						<div class="comKnapsackDiv_leftUp_left2_pro">
							<progress
								activeColor="#ceb284"
								class="comKnapsackDiv_progress"
								:border-radius="progressConfig.border_radius"
								:stroke-width="progressConfig.stroke_width"
								:backgroundColor="progressConfig.backgroundColor"
								:active="progressConfig.active"
								:percent="bloodShow(battleInfo.player,0)"
							/>
							<div class="comKnapsackDiv_leftUp_left2_proNum">{{ battleInfo.player.hp }}</div>
						</div>
					</div>
					<div class="comKnapsackDiv_leftUp_left2">
						<div>蓝条:</div>
						<div class="comKnapsackDiv_leftUp_left2_pro">
							<progress
								activeColor="#ceb284"
								class="comKnapsackDiv_progress"
								:border-radius="progressConfig.border_radius"
								:stroke-width="progressConfig.stroke_width"
								:backgroundColor="progressConfig.backgroundColor"
								:active="progressConfig.active"
								:percent="bloodShow(battleInfo.player,0)"
							/>
							<div class="comKnapsackDiv_leftUp_left2_proNum">{{ battleInfo.player.hp }}</div>
						</div>
					</div>
					<div class="comKnapsackDiv_leftUp_left2">
						<div>体力:</div>
						<div class="comKnapsackDiv_leftUp_left2_pro">
							<progress
								activeColor="#ceb284"
								class="comKnapsackDiv_progress"
								:border-radius="progressConfig.border_radius"
								:stroke-width="progressConfig.stroke_width"
								:backgroundColor="progressConfig.backgroundColor"
								:active="progressConfig.active"
								:percent="bloodShow(battleInfo.player,0)"
							/>
							<div class="comKnapsackDiv_leftUp_left2_proNum">{{ battleInfo.player.hp }}</div>
						</div>
					</div>
					<div class="comKnapsackDiv_leftUp_left2">
						<div>经验:</div>
						<div class="comKnapsackDiv_leftUp_left2_pro">
							<progress
								activeColor="#ceb284"
								class="comKnapsackDiv_progress"
								:border-radius="progressConfig.border_radius"
								:stroke-width="progressConfig.stroke_width"
								:backgroundColor="progressConfig.backgroundColor"
								:active="progressConfig.active"
								:percent="bloodShow(battleInfo.player,0)"
							/>
							<div class="comKnapsackDiv_leftUp_left2_proNum">{{ battleInfo.player.hp }}</div>
						</div>
					</div>
					<div class="comKnapsackDiv_leftUp_left2">
						<div>心情:</div>
						<div class="comKnapsackDiv_leftUp_left2_pro">
							<progress
								activeColor="#ceb284"
								class="comKnapsackDiv_progress"
								:border-radius="progressConfig.border_radius"
								:stroke-width="progressConfig.stroke_width"
								:backgroundColor="progressConfig.backgroundColor"
								:active="progressConfig.active"
								:percent="bloodShow(battleInfo.player,0)"
							/>
							<div class="comKnapsackDiv_leftUp_left2_proNum">{{ battleInfo.player.hp }}</div>
						</div>
					</div>
				</div>
				<!-- 上 - 右 - 人- 装备 -->
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
			<!-- 物品列表 -->
			<div class="comKnapsackDiv_right_top">
				<div class="comKnapsackDiv_right_tops">
					<div
						class="comKnapsackDiv_right_list"
						v-for="(item, index) in [,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,]"
						@click.stop="handleRightIn(item,index)">
						<div class="comKnapsackDiv_right_li">
							图+名
						</div>
					</div>
				</div>
			</div>
			<!-- 物品介绍 -->
			<div class="comKnapsackDiv_right_txt">{{ introduce.txt }}</div>
			<!-- 操作 -->
			<div class="comKnapsackDiv_right_butlist">
				
				<div class="comKnapsackDiv_right_butlist_but">
					<div class="comKnapsackDiv_right_button">使用</div>
					<div class="comKnapsackDiv_right_button">装备</div>
					<div class="comKnapsackDiv_right_button">卸下</div>
					<div class="comKnapsackDiv_right_button">丢弃</div>
				</div>
				
				<div class="comKnapsackDiv_right_button" @click="handleCloseComKnapsack">关闭</div>
			</div>
		</div>
	</div>
</template>

<style scoped lang="less">
	@import url('index.less');
</style>
