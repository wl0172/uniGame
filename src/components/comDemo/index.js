import { ref } from "vue"





// 开始锻造
const handleStartForge = () => {
	console.log('开始锻造')
}

// 离开锻造炉
const handleBack = () => {
	uni.navigateBack({
		delta: 1
	})
}

export {
	handleBack,
	handleStartForge
}