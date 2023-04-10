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
	return request(`/user/info`, 'GET', 'application/json', params);
}

// 寻怪
export function getFightFind(params) {
	return request(`/fight/find`, 'GET', 'application/json', params);
}

// 动作
export function postFightAction(params) {
	return request(`/fight/action`, 'POST', 'application/json', params);
}

// 拾取战利品
export function postFightPrize(params) {
	return request(`/fight/prize`, 'POST', 'application/json', params);
}

// 地图切换
export function postUserTravel(params) {
	return request(`/user/travel`, 'POST', 'application/json', params);
}

// 装备 - 使用道具 - 一次性的
export function postGoodsConsumeOnce(params) {
	return request(`/goods/consume/once`, 'POST', 'application/json', params);
}

// 装备 - 使用装备
export function postGoodsEquip(params) {
	return request(`/goods/equip`, 'POST', 'application/json', params);
}
// 装备 - 停用装备
export function postGoodsUnequipped(params) {
	return request(`/goods/unequipped`, 'POST', 'application/json', params);
}
// 商店 - 获取今日份
export function getShopMarket(params) {
	return request(`/shop/market`, 'GET', 'application/json', params);
}
// 商店 - 购买
export function postShopMarket(params) {
	return request(`/shop/market`, 'POST', 'application/json', params);
}
// 商店 - 出售
export function deleteShopMarket(params) {
	return request(`/shop/market`, 'DELETE', 'application/json', params);
}
// 合成
export function shopMixture(params) {
	return request(`/shop/mixture`, 'POST', 'application/json', params);
}



