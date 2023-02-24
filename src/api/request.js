/**
 * 
 * */
export default (path, data = {}, method) => {
	
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
			url: 'http://117.78.26.78' + path,
			method: method,
			data,
			success(response) {
				uni.hideLoading();
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
