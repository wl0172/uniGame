import { ref } from "vue"
import { headerMargin } from '@/state/bangs.js'




// 开始锻造
const handleStartForge = () => {
	uni.showToast({
		icon: 'none',
		title: '开始锻造'
	})
}

// 离开锻造炉
const handleBack = () => {
	uni.navigateBack({
		delta: 1
	})
}

export {
	headerMargin,
	handleBack,
	handleStartForge
}