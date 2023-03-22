import { ref } from "vue"
// 全局属性
import { battleInfo, hiddenPopup } from '@/state/index.js'

// 物品介绍
let txtValue = ref('')



// 物品点击
const handleArticle = (item,index) => {
	txtValue.value = index
}
// 丢弃
const handleDiscard = () => {
	uni.showToast({
		icon: 'none',
		title: '丢弃-暂无开发'
	})
}
//  使用
const handleAction = () => {
	uni.showToast({
		icon: 'none',
		title: '使用-暂无开发'
	})
}
// 装备
const handleEquip = () => {
	uni.showToast({
		icon: 'none',
		title: '装备-暂无开发'
	})
}
// 离开
const handleBack = () => {
	hiddenPopup.value.show = false
}

export {
	txtValue,
	handleBack,
	handleArticle,
	handleDiscard,
	handleAction,
	handleEquip
}