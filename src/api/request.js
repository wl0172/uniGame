/**
 * 
 * */
export default (path, data = {}, method, config = defauls) => {
	
	uni.showLoading({
		title: "加载中",
		mask: true
	});
		
	const token = uni.getStorageInfoSync("token");
	const Authorization = token ? `Bearer ${uni.getStorageSync("token")}` : "";
	
	return new Promise((resolve, reject) => {
		uni.request({
			header: {
				"Authorization": Authorization,
				"Content-Type": 'application/json',
			},
			url: api + path,
			method: method,
			data,
			success(response) {
				uni.hideLoading();
				console.log(response, '======')
				// resolve()
			},
			fail(err) {
				uni.hideLoading();
				uni.showToast({
					icon: "none",
					title: "接口失败了！"
				});
				reject(err);
			},
			complete() {
				uni.hideLoading();
			}
		});
	});
};
