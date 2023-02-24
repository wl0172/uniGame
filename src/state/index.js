import { ref, reactive, markRaw, watch,computed } from 'vue'
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
		"page_battle": markRaw(ComBattle),
		"name": 'A城（城门）'
	}, {
		"page_battle": markRaw(ComBattle),
		"name": '寂静森林'
	}, {
		"page_battle": markRaw(ComBattle),
		"name": '农场镇'
	}]
})
const pageSwitch = ref({
	index: '0',
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
	index: 1,
	key: 'ComShop'
})

// 弹窗显示 - 隐藏
const hiddenPopup = ref({
	show: true,
	width: 100,
	height: 100
})



// 角色信息
const useInfo = ref({
	dataToken: "",
})

export {
	pageArr,
	pageSwitch,
	
	pageArrMenu,
	pageSwitchMenu,
	
	useInfo,
	
	hiddenPopup
}