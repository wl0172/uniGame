import { ref, reactive, markRaw, watch } from 'vue'

// 场景 - 页面 - page
import ComBattle from "@/components/comBattle/index.vue"
import ComSceneList from "@/components/comSceneList/index.vue"
import ComMenu from "@/components/comMenu/index.vue"

// 所有的场景地址 - 
const pageArr = ref({
	list: [{
		// 战斗场景
		"page_battle": markRaw(ComBattle),
	}, {
		// 地图
		'page_sceneList': markRaw(ComSceneList),
	}, {
		// 城镇 - 菜单 - ??????
		'page_menu': markRaw(ComMenu)
	}]
})
// 页面下标 - 场景下标
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