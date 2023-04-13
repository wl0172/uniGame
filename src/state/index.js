import { ref ,markRaw } from 'vue'
// 配置文件
import { mapRef } from '@/state/config/index.js'
// 战斗场景
import ComBattle from "@/components/comBattle/index.vue"
// 背包
import ComKnapsack from '@/components/comKnapsack/index.vue'
// 广告 - 测试
import ComAdvertisement from '@/components/comAdvertisement'

// 所有的场景地址 - map - 地图切换等
let mapRefPageArr = JSON.parse(JSON.stringify(mapRef.value))
let mapRefPageArrCopy = {}
for(let i of mapRefPageArr){
	i.pageComponent = markRaw(ComBattle)
	mapRefPageArrCopy[i.id] = i
}
const pageArr = ref({
	list: mapRefPageArrCopy
})
console.log(pageArr.value, '===============')
console.log(mapRefPageArr, '---------------')

const pageSwitch = ref({
	index: 1,
})
// 所有的场景 - 操作页 - 比如背包等
const pageArrMenu = ref({
	list: [{
		'pageKey': markRaw(ComKnapsack),// 背包
	},{
		'pageKey': markRaw(ComAdvertisement),// 广告
	}]
})
const pageSwitchMenu = ref({
	index: 0,
})
// 弹窗显示 - 隐藏
const hiddenPopup = ref({
	show: false,
	width: 100,
	height: 100
})







// txt文字滚动下落 - 初始化 - 战斗信息面板 - txt
let txtArr = ref({
	list: []
})

// txt下标
let scrollIndex = ref({
	id: 'id-1'
})





// 角色信息
const useInfo = ref({
	token: uni.getStorageSync('token') || null,
})
// 主场信息 = 角色 - 怪物
const battleInfo = ref({
	// 角色
	player: uni.getStorageSync('playerInfo') || {},
	// 怪物
	monster: {},
	// 身上穿戴的装备
	equipments: [],
	// 背包
	backpack: []
})



export {
	pageArr,// 所有的场景地址 - map
	pageSwitch,// 所有的场景switch
	
	pageArrMenu,// 所有的场景 - 操作页
	pageSwitchMenu,// 所有的场景switchMenu
	
	useInfo,// 用户信息
	battleInfo,//战斗 - 角色 + 怪物 = 信息
	
	hiddenPopup,// 全局弹窗
	
	txtArr,// 战斗信息面板 - txt
	scrollIndex,// // txt下标
}