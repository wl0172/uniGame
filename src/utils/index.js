 // 配置文件
import { errorCnsRef, monsterRef, mapRef, goodsRef } from '@/state/config/index.js'

// 报错配置
let errorCnsRefTxt = new Map(Object.entries(errorCnsRef.value))

// 场景名
const sceneName = (arr=[]) => {
	let name = ''
	let monName = []
	for(let i of mapRef.value){
		if(arr.length){
			for(let j of arr){
				if(i.id == j){
					monName.push(i)
				}
			}
		}
	}
	if(monName.length){
		for(let k of monName){
			name += '-' + k.name
		}
	}
	return name
}

// 怪物名
const monsterName = (arr=[]) => {
	let name = ''
	let monName = []
	for(let i of monsterRef.value){
		if(arr.length){
			for(let j of arr){
				if(i.id == j){
					monName.push(i)
				}
			}
		}
	}
	if(monName.length){
		for(let k of monName){
			name += '-' + k.name
		}
	}
	return name
}

// 背包
const backpackSet = (backpackRes = []) => {
	let a = []
	for (let i of backpackRes) {
		let b = JSON.parse(JSON.stringify(i))
		b.url = `../../static/image/${i.sku}.png`
		a.push({ ...b, ...goodsRef.value[i.sku] })
	}
	return a
}

// 根据商品id - ids=[8, 9, 10, 4, 11] 匹配到相对应的商品信息
const backpackItem = (shopArr) => {
	let arr = []
	for (let i of shopArr){
		goodsRef.value[i].url = `../../static/image/${i}.png`
		arr.push(goodsRef.value[i])
	}
	return arr
}

export {
	errorCnsRefTxt,
	monsterName,
	sceneName,
	backpackSet,
	backpackItem
}