import { ref, markRaw } from 'vue'
// 配置
// 配置文件
import { 
	effectCnsRef, 
	errorCnsRef, 
	monsterRef, 
	goodsRef, 
	mapRef, 
} from '@/state/config/index.js'
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
let mapRefPageArr = JSON.parse(JSON.stringify(mapRef.value))
for(let i of mapRefPageArr){
	i.pageComponent = markRaw(ComBattle)
}
const pageArr = ref({
	list: mapRefPageArr
})
const pageSwitch = ref({
	index: 0,
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
	show: true,
	width: 100,
	height: 100
})




// 角色信息
const useInfo = ref({
	token: uni.getStorageSync('token') ? uni.getStorageSync('token') : '',
})
// 主场信息 = 角色 - 怪物
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