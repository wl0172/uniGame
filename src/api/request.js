/**
 * request
 * */
// import http from '../../config/index.js'
 
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
			// url: '/api' + path,
			method: method,
			data,
			success(response) {
				if(response.statusCode == 200){
					// uni.hideLoading()
					resolve(response.data)
				}else{
					console.log(response,'response======')
					uni.showToast({
						icon: "none",
						title: response.data.message || path,
						duration: 1500
					});
				}
			},
			fail(err) {
				uni.showToast({
					icon: "none",
					title: "请求失败了，请稍后重试！",
					duration: 1500
				});
				// uni.hideLoading()
				reject(err);
			},
			complete() {
				// uni.hideLoading();
			}
		});
	});
};
