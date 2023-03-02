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
export function postUserInfo(params) {
	return request(`/user/info`, 'POST', 'application/json', params);
}

// 寻怪
export function getFightFind(params) {
	return request(`/fight/find`, 'GET', 'application/json', params);
}

// 动作
// params = 1：前进；2：站在原地；3：后撤（目前是逃跑）；4：攻击
export function postFightAction(params) {
	return request(`/fight/action`, 'POST', 'application/json', params);
}