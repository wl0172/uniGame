// 全局属性
import {
	pageArr,// 所有的场景地址 - map
	pageSwitch,// 所有的场景switch
	pageArrMenu,// 所有的场景 - 操作页
	pageSwitchMenu,// 所有的场景switchMenu
	useInfo,// 用户信息
	battleInfo,//战斗 - 角色 + 怪物 = 信息
	hiddenPopup,// 全局弹窗
	txtArr,// 战斗信息面板 - txt
	scrollIndex,// // txt下标
} from '@/state/index.js'

// 退出重置全局属性
const resetIndex = () => {
	// txt文字滚动下落 - 初始化 - 战斗信息面板 - txt 
	txtArr.value.list = []
	// txt下标
	scrollIndex.value.id = 'id-1'
	
	// pageSwitch.value.index = 1
	
	pageSwitchMenu.value.index = 0
	hiddenPopup.value = {
		show: false,
		width: 100,
		height: 100
	}
	useInfo.value.token = null
	battleInfo.value = {
		// 角色
		player: {},
		// 怪物
		monster: {},
		// 身上穿戴的装备
		equipments: [],
		// 背包
		backpack: []
	}
	
}

export default resetIndex