import { useInfo } from '@/state/index.js'

// 是否登录
const pageAddress = () => {
	useInfo.value.dataToken = uni.getStorageSync('token')
	if(useInfo.value.dataToken){
		// 关闭当前页面，跳转到应用内的某个页面。
		uni.redirectTo({
			url: '/pages/content/index',
		})
	}else{
		uni.redirectTo({
			url: '/pages/loginOrRegister/index',
		})
	}
}

export default pageAddress