import { battleInfo } from '@/state/index.js'

// 玩家 - 铜0 - 银1 - 金2
const moneyProject = (i) => {
	let allMoney = battleInfo.value.player.money
	let num = allMoney/100
	let integer = Math.floor(num) // 银
	let decimal = ((num % 1) * 100).toFixed() // 铜
	
	if(i==0){
		return Number(decimal)
	}
	if(i==1){
		return integer
	}
	if(i==2){
		return 0
	}
	
}

export {
	moneyProject
}