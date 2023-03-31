// 是否登录
const pageAddress = () => {
	// 获取token
	let token = uni.getStorageSync('token') || null
	if(token){
		// uni.reLaunch({
		// 	url: '/pages/content/index',
		// 	success() {
		// 		plus.navigator.closeSplashscreen()
		// 	}
		// })
		plus.navigator.closeSplashscreen()
	}else{
		uni.reLaunch({
			url: '/pages/loginOrRegister/index',
			success() {
				plus.navigator.closeSplashscreen()
			}
		})
	}
}

export default pageAddress