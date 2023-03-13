/**
 * request
 * */
 // 配置文件
import { errorCnsRef } from '@/state/config/index.js'
// 全局属性
import { pageArr, pageSwitch } from '@/state/index.js'

// 报错配置
let errorCnsRefTxt = new Map(Object.entries(errorCnsRef.value))

export default (path = '', method = 'GET', contentType = 'application/json', data = {}) => {
	
	// uni.showLoading({
	// 	title: "加载中",
	// 	mask: true
	// });
		
	const token = uni.getStorageSync("token");
	const Authorization = token ? `Bearer ${token}` : "";
	
	return new Promise((resolve, reject) => {
		uni.request({
			header: {
				"Authorization": Authorization,
				"Content-Type": contentType,
				'Accept': contentType
			},
			url: 'http://117.78.26.78' + path,
			method: method,
			data,
			success(response) {
				// uni.hideLoading()
				if(response.statusCode == 200){
					resolve(response.data)
				}else if(response.statusCode == 401){
					uni.showToast({
						icon: "none",
						title: '登录过期了，请重新登录!',
						duration: 5000
					});
					uni.clearStorageSync()
					uni.reLaunch({
						url: '/pages/loginOrRegister/index'
					})
				}else{
					uni.showToast({
						icon: "none",
						title: errorCnsRefTxt.get(response.data.message) || response.data.message,
						duration: 5000
					});
					resolve(response.data)
				}
			},
			fail(err) {
				uni.showToast({
					icon: "none",
					title: "请求失败了，请稍后重试！",
					duration: 1500
				});
				reject(err);
			},
			complete() {}
		});
	});
};
