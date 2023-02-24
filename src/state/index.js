import { ref, reactive, markRaw, watch,computed } from 'vue'

/**
 * 场景 - 页面 - page
 */
// 战斗场景
import ComBattle from "@/components/comBattle/index.vue"
// 地图
// import ComSceneList from "@/components/comSceneList/index.vue"
// 商店
// import ComShop from "@/components/comShop/index.vue"

// 所有的场景地址 - 
const pageArr = ref({
	list: [{
		// 战斗场景
		"page_battle": markRaw(ComBattle),
		"name": 'A城（城门）'
	}, {
		// 寂静森林
		"page_battle": markRaw(ComBattle),
		"name": '寂静森林'
	}, {
		// 农场镇
		"page_battle": markRaw(ComBattle),
		"name": '农场镇'
	}]
})
// 页面下标 - 场景key - 默认 0 - 战斗场景 page_battle
const pageSwitch = ref({
	index: '0',
	key: 'page_battle'
})






// 角色信息
const useInfo = ref({
	dataToken: "",
})

// 弹窗显示 - 隐藏
const hiddenPopup = ref({
	show: false,
})

export {
	pageArr,
	useInfo,
	pageSwitch,
	hiddenPopup,
}