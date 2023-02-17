import { ref } from 'vue'

// 角色信息
const useInfo = ref({
	dataToken: "",
})

// 页面下标 - 场景下标
const pageSwitch = ref({
	index: '0',
	key: 'page_battle'
})

// 弹窗显示 - 隐藏
const hiddenPopup = ref({
	show: true,
})

export {
	useInfo,
	pageSwitch,
	hiddenPopup,
}