 // 配置文件
import { errorCnsRef, monsterRef, mapRef } from '@/state/config/index.js'

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


export {
	errorCnsRefTxt,
	monsterName,
	sceneName
}