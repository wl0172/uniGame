// 配置文件
import { monsterRef } from '@/state/config/index.js'

// 全局 - 角色 - 怪 - 信息
import { battleInfo } from '@/state/index.js'

// 血量显示 = status = 0 - 角色，1 - 怪物
export function bloodShow(objInfo={},status=0){
	let bloodNum = 0
	let monsterRefArr = monsterRef.value
	if(status == 0 && objInfo?.hp > -1){
		bloodNum = +(objInfo.hp/objInfo.hpMax) * 100
	}
	if(status == 1 && objInfo.hp > -1){
		for (let i = 0; i < monsterRefArr.length; i++) {
			if(objInfo.index == monsterRefArr[i].id){
				bloodNum = +(objInfo.hp/monsterRefArr[i].hp) * 100
			}
		}
	}
	return bloodNum
}