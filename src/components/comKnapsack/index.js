import { ref } from "vue"
// 全局属性
import { battleInfo, hiddenPopup } from '@/state/index.js'

let txtValue = ref('')


// 物品点击
const handleArticle = (item,index) => {
	txtValue.value = index
}

// 离开
const handleBack = () => {
	hiddenPopup.value.show = false
}

export {
	txtValue,
	handleBack,
	handleArticle
}