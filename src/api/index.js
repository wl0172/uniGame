import request from "@/api/request.js"

export default {
	// 登录
	postLogin(params) {
		return request(`/auth/login`, params, 'POST');
	},

}