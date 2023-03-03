import { ref, reactive, markRaw, watch,computed, shallowReactive, shallowRef } from 'vue'
/**
 * 场景 - 页面 - page
 */
// 战斗场景
import ComBattle from "@/components/comBattle/index.vue"
// 背包
import ComKnapsack from '@/components/comKnapsack/index.vue'
// 商店
import ComShop from '@/components/comShop/index.vue'

// 所有的场景地址 - map
const pageArr = ref({
	list: [{
		"page_battle": markRaw(ComBattle), //ref(ComBattle),
		"name": 'A城（城门）'
	}, {
		"page_jijingsengling": markRaw(ComBattle),
		"name": '寂静森林'
	}, {
		"page_nongchangzheng": markRaw(ComBattle),
		"name": '农场镇'
	}]
})
const pageSwitch = ref({
	index: 0,
	key: 'page_battle'
})


// 所有的场景 - 操作页
const pageArrMenu = ref({
	list: [{
		"ComKnapsack": markRaw(ComKnapsack),
		"name": '背包'
	}, {
		"ComShop": markRaw(ComShop),
		"name": '商店'
	}]
})
const pageSwitchMenu = ref({
	index: 0,
	key: 'ComKnapsack'
})

// 弹窗显示 - 隐藏
const hiddenPopup = ref({
	show: false,
	width: 100,
	height: 100
})




// 角色信息
const useInfo = ref({
	token: uni.getStorageSync('token') ? uni.getStorageSync('token') : '',
})
// 角色 - 怪物
const battleInfo = ref({
	// 角色
	player: uni.getStorageSync('playerInfo') ? uni.getStorageSync('playerInfo') : {},
	// 怪物
	monster: {}
})

export {
	pageArr,// 所有的场景地址 - map
	pageSwitch,// 所有的场景switch
	
	pageArrMenu,// 所有的场景 - 操作页
	pageSwitchMenu,// 所有的场景switchMenu
	
	useInfo,// 用户信息
	battleInfo,//战斗 - 角色 + 怪物 = 信息
	
	hiddenPopup// 全局弹窗
}