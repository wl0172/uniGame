import { ref, watch, computed } from "vue"
// 接口
import { postUserInfo, getFightFind, postFightAction, postFightPrize } from '@/api/index.js'
// 全局属性
import { pageArr, pageSwitch, pageSwitchMenu, battleInfo, hiddenPopup
} from '@/state/index.js'


// 获取玩家最新信息
const handleGetUserInfo = () => {
	postUserInfo({
		"player": true, // 角色信息
		"fighter": true, // 同寻怪接口 战斗
		"backpack": true, // 背包 玩家背包中的物品
		"equipment": true // 装备 玩家身上的装备
	}).then((res) => {
		console.log(res, 'comBattle - 获取玩家最新信息 - ======')
		uni.setStorageSync('playerInfo', res.player);
		battleInfo.value.player = res?.player ? res?.player : {},
		battleInfo.value.monster = res?.fighter ? res?.fighter : {}
	})
}

// 捡尸
const pickUupCorpses = (txtArr,scrollIndex)=> {
	postFightPrize().then((res)=>{
		txtCopywriting(res,txtArr,5,scrollIndex)
		battleInfo.value.monster = {}
	})
}

// txt滚动条自动下落
const upDown = (txtArr,scrollIndex) => {
	setTimeout(() => {
		scrollIndex.id = `id-${txtArr.list.length-1}`
	})
}

// txt文案
const txtCopywriting = (response,txtArr,status,scrollIndex) => {
	// 0 - 搜索，1 - 战斗持续中，2 - 玩家胜利，3 - 玩家失败，4 - 平手，5 - 捡尸
	let liTxt = ''
	if(status == 0){
		liTxt = `你遇到了一只${response.name},它在悠闲的晒太阳`
	}
	if(status == 1){
		liTxt = `你攻击了一下${battleInfo?.value?.monster?.name}`
	}
	if(status == 2){
		liTxt = `${battleInfo?.value?.monster?.name}被你击败了！`
	}
	if(status == 3){
		liTxt = `${battleInfo?.value?.monster?.name}把你打倒了！`
	}
	if(status == 4){
		liTxt = `你逃跑了...`
	}
	if(status == 5){
		if(response.length){
			liTxt = `获得战利品xxxxxx`
		}else{
			liTxt = `什么都没有获得..`
		}
	}
	txtArr.list.push({
		liTxt: liTxt
	})
	upDown(txtArr,scrollIndex)
}















// 攻击 - 探索
const handleSeachItem = (txtArr,scrollIndex) => {
	
	// 在战斗中
	if (Object.keys(battleInfo.value.monster).length) {
		uni.showLoading({
			icon: 'none',
			title: '战斗中...',
			mask: true
		})
		postFightAction({
			action: 4
		}).then((res)=> {
			uni.hideLoading()
			// 1 - 持续战斗
			if(res.status == 1){
				txtCopywriting(res,txtArr,1,scrollIndex)
				battleInfo.value.monster.hp = battleInfo.value.monster.hp - res.mEffects[0].value
			}
			// 2 - 胜利
			if(res.status == 2){
				// 默认先摸尸 - 后续在改
				pickUupCorpses(txtArr,scrollIndex)
			}
			// 3 - 失败死亡了
			if(res.status == 3){
				uni.showToast({
					icon: 'none',
					title: '啊~~~我死了！！！'
				})
			}
		})		
	} else {
		uni.showLoading({
			icon: 'none',
			title: '探索中...',
			mask: true
		})
		// 寻怪接口
		getFightFind().then((res) => {
			uni.hideLoading()
			battleInfo.value.monster = res
			txtCopywriting(res,txtArr,0,scrollIndex)
		})
	}
}

// 逃跑
const handleRunAway = (txtArr,scrollIndex) => {
	postFightAction({
		action: 3
	}).then((res)=>{
		if(res.status == 4){
			txtCopywriting(res,txtArr,4,scrollIndex)
		}
		battleInfo.value.monster = {}
	})
}

// 技能
const handleSkill = () => {
	uni.showToast({
		icon: 'none',
		title: '技能开发中'
	})
}

// 打开地图
const handleToMap = () => {
	uni.navigateTo({
		url: '/pages/canvasMap/index',
	})
}

// 打开背包
const handleOpenKnapsack = () => {
	hiddenPopup.value.show = true
	hiddenPopup.value.width = 90
	hiddenPopup.value.height = 70
	pageSwitchMenu.value.index = 0
	pageSwitchMenu.value.key = 'ComKnapsack'
}

// 打开商店
const handleToShop = () => {
	hiddenPopup.value.show = true
	hiddenPopup.value.width = 100
	hiddenPopup.value.height = 100
	pageSwitchMenu.value.index = 1
	pageSwitchMenu.value.key = 'ComShop'
}

// 退出
const handleLeave = () => {
	uni.clearStorageSync()
	uni.reLaunch({
		url: '/pages/loginOrRegister/index'
	})
}












// 假的掉血机制
// setTimeout(()=>{
// 	let a = setInterval(()=>{
// 		if(battleInfo.value.monster.hp == 10){
// 			clearInterval(a)
// 		}else{
// 			battleInfo.value.monster.hp = battleInfo.value.monster.hp - 1
// 			battleInfo.value.player.hp = battleInfo.value.player.hp - 1
// 		}
// 	},1000)
// },3000)

// console.log(battleInfo.value.player, 'battle======')






export {
  handleGetUserInfo,// 获取玩家最新信息
	handleSeachItem,// 探索
	handleRunAway,// 逃跑
	handleSkill,// 技能
	handleToMap,// 打开地图
	handleOpenKnapsack,// 打开背包
	handleToShop,// 打开商店
	handleLeave,// 退出
}