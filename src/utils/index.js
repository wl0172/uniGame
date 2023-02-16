import { useInfo } from '@/state/index.js'

const pageAddress = () => {
	useInfo.value.dataToken = uni.getStorageSync('token')
	if(!useInfo.value.dataToken){
		// 关闭当前页面，跳转到应用内的某个页面。
		uni.redirectTo({
			url: '/pages/login/index'
		})
	}
}

export default pageAddress