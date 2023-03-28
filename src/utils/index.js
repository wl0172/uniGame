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
const backpackSet = (backpackRes=[]) => {
	let a = []
	for(let i of goodsRef.value){
		for(let j of backpackRes){
			if(j.sku == i.sku){
				let b = JSON.parse(JSON.stringify(i))
				let _a = {...j,...b}
				a.push(_a)
			}
		}
	}
	return a
}

// 背包数量 0=1,1=+
const backpackNum = (arr,state = 0) => {
	
}

export {
	errorCnsRefTxt,
	monsterName,
	sceneName,
	backpackSet
}