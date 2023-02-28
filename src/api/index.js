import request from "@/api/request.js"

// 登录
export function postLogin(params) {
	return request(`/auth/login`, 'POST', 'application/json', params);
}

// 注册
export function postRegister(params) {
	return request(`/auth/signup`, 'POST', 'application/json', params);
}

// 获取玩家信息
export function getUserInfo(params) {
	return request(`/user/info`, 'GET', 'application/json', params);
}
