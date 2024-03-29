/**
 * request
 * */
// util报错提示
import { errorCnsRefTxt } from '@/utils/index.js'
// 退出
import resetIndex from '@/state/reset.js'

export default (path = '', method = 'GET', contentType = 'application/json', data = {}) => {
	
	// uni.showLoading({
	// 	title: "加载中",
	// 	mask: true
	// });
		
	const token = uni.getStorageSync("token");
	const ver = uni.getStorageSync('ver') || 0
	const Authorization = token ? `Bearer ${token}` : "";
	
	return new Promise((resolve, reject) => {
		// 区分一下web - app
		let port = uni.getSystemInfoSync().uniPlatform
		uni.request({
			header: {
				"Authorization": Authorization,
				"Content-Type": contentType,
				'Accept': contentType,
				'ver': ver
			},
			url: port == 'web' ? '/api' + path : 'http://117.78.26.78:8080' + path,
			method: method,
			data,
			success(response) {
				// uni.hideLoading()
				if(response.statusCode == 200 || response.statusCode == 201){
					resolve(response.data?response.data:[])
				}else if(response.statusCode == 401){
					uni.showToast({
						icon: "none",
						title: '登录过期了，请重新登录!',
						duration: 3000
					});
					resetIndex()
					uni.clearStorageSync()
					uni.reLaunch({
						url: '/pages/loginOrRegister/index'
					})
				}else{
					uni.showToast({
						icon: "none",
						title: errorCnsRefTxt.get(response.data),
						duration: 3000
					});
					resolve(null)
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
