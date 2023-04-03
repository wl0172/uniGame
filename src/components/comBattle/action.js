import { ref } from "vue"
// 配置文件
import { effectCnsRef, monsterRef, goodsRef } from '@/state/config/index.js'
// 接口
import {
	postUserInfo,
	getFightFind,
	postFightAction,
	postFightPrize,
} from '@/api/index.js'
// 全局属性
import {
	pageArr,// 所有的场景地址 - map
	pageSwitch,// 所有的场景switch
	pageArrMenu,// 所有的场景 - 操作页
	pageSwitchMenu,// 所有的场景switchMenu
	useInfo,// 用户信息
	battleInfo,//战斗 - 角色 + 怪物 = 信息
	hiddenPopup,// 全局弹窗
	txtArr,// 战斗信息面板 - txt
	scrollIndex,// // txt下标
} from '@/state/index.js'
// 退出
import resetIndex from '@/state/reset.js'
// util
import { backpackSet } from "@/utils/index.js"
// 音频
import { audioAttack } from '@/state/audio/index.js'

// 技能显示
let skillShow = ref(false)

// 获取玩家最新信息
const handleGetUserInfo = () => {
	if (useInfo.value.token) {
		postUserInfo({
			"player": true, // 角色信息
			"fighter": true, // 同寻怪接口 战斗
			"backpack": true, // 背包 玩家背包中的物品
			"equipment": true // 装备 玩家身上的装备
		}).then((res) => {
			// 玩家信息
			battleInfo.value.player = res?.player
			// 玩家背包
			battleInfo.value.backpack = backpackSet(res.backpack)
			// 玩家身上的装备
			battleInfo.value.equipments = backpackSet(res.equipments)
			// 地图下标
			pageSwitch.value.index = res?.player?.local == 4 ? 0 : res?.player?.local
			// 如果有偶怪的信息
			if(res?.fighter){
				const getMon = monsterRef.value.find(item => item.id == res?.fighter?.index)
				const getMonsters = {...getMon,...res?.fighter}
				battleInfo.value.monster = getMonsters//res?.player
			}
			
			// console.log(res, '接口玩家最新信息 ==========')
			console.log(battleInfo.value, '玩家信息==========')
			
		})
	}
}

// 捡尸
const pickUupCorpses = (txtArr, scrollIndex) => {
	postFightPrize().then((res) => {
		txtCopywriting(res, txtArr, 5, scrollIndex)
		battleInfo.value.monster = {}
	})
}

// txt滚动条自动下落
const upDown = (txtArr, scrollIndex) => {
	setTimeout(() => {
		scrollIndex.id = `id-${txtArr.list.length-1}`
	})
}

// txt文案
// status = 0 - 搜索，1 - 战斗持续中，2 - 玩家胜利，3 - 玩家失败，4 - 平手，5 - 捡尸
const txtCopywriting = (response, txtArr, status, scrollIndex, effect = -1, bloodTxt) => {
	let statusObj = {
		0: `你遇到了一只${response.name},它在悠闲的晒太阳`,
		1: bloodTxt,
		2: `${battleInfo?.value?.monster?.name}被你击败了！`,
		3: `${battleInfo?.value?.monster?.name}把你打倒了！`,
		4: `你逃跑了...`,
		5: response.length ? `获得战利品${dropArticle(response)}...` : `什么都没有获得...`,
	}
	txtArr.list.push({
		liTxt: effect > -1 ? statusObj[status] : statusObj[status]
	})
	upDown(txtArr, scrollIndex)
}

// 掉血，role角色 - monst怪物
const buckleBlood = (item, response, txtArr, status, scrollIndex) => {
	let eff = new Map(Object.entries(effectCnsRef.value))
	// 怪物对角色产生的效果
	if (response?.mEffects?.length) {
		let monsterTxt = `${item.value.monster.name}对你使用了${eff.get(response.mEffects[0].effect)}`

		// 普通攻击
		if (response.mEffects[0].effect == 'attack') {
			monsterTxt += `,造成了${response.mEffects[0].value}点伤害`
			item.value.player.hp = item.value.player.hp - response.mEffects[0].value
		}
		// 逃脱
		if (response.mEffects[0].effect == 'runaway') {

		}
		// 毒药侵害
		if (response.mEffects[0].effect == 'attackTox') {

		}
		// 生命恢复
		if (response.mEffects[0].effect == 'hpPlus') {

		}
		// 生命损失
		if (response.mEffects[0].effect == 'hpReduce') {

		}
		txtCopywriting(response, txtArr, status, scrollIndex, 0, monsterTxt)
	}
	// 角色对怪物产生的效果
	if (response?.pEffects?.length) {
		let playerTxt = `你攻击了一下${item?.value?.monster?.name},造成了${response.pEffects[0].value}伤害`
		item.value.monster.hp = item.value.monster.hp - response.pEffects[0].value
		txtCopywriting(response, txtArr, status, scrollIndex, 1, playerTxt)
	}
}

// 掉落的物品名字
const dropArticle = (res=[]) => {
	
	let b = battleInfo.value.backpack
	let c = []
	let d = ''

	for (let i of res) {
		// 如果背包里面物品可叠加 && sku
		if (b.some(item => item.id == i.id)) {
			b.forEach((items,index)=>{
				if(items.id == i.id && items.sku == i.sku){
					items.has += i.got
				}
			})
		} else {
			let a = JSON.parse(JSON.stringify(goodsRef.value[i.sku]))
			a.id = i.id
			a.has = i.got
			a.url = `../../static/image/${i.sku}.png`
			b.push(a)
		}
		c.push({
			name: goodsRef.value[i.sku].name,
			num: i.got
		})
	}
	for(let e of c){
		d += e.num + '个' + e.name
	}
	return d
}

























// 探索 - 攻击
const handleSeachItem = (txtArr, scrollIndex) => {
	// 有怪的信息 - 在战斗中
	if (Object.keys(battleInfo.value.monster).length) {
		uni.showLoading({
			icon: 'none',
			title: '战斗中...',
			mask: true
		})
		postFightAction({
			action: 4
		}).then((res) => {
			uni.hideLoading()
			// 1 - 持续战斗
			if (res.status == 1) {
				// 掉血
				buckleBlood(battleInfo, res, txtArr, 1, scrollIndex)
				audioAttack()
			}
			// 2 - 胜利
			if (res.status == 2) {
				// 默认先摸尸 - 后续在改
				pickUupCorpses(txtArr, scrollIndex)
			}
			// 3 - 失败死亡了
			if (res.status == 3) {
				uni.showToast({
					icon: 'none',
					title: '啊~~~我死了！！！',
					duration: 2000,
					mask: true,
					success(){
						setTimeout(()=>{
							uni.reLaunch({
								url: '/pages/diePage/index'
							})	
						},2000)
					}
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
			if(res){
				uni.hideLoading()
				const beforeMon = monsterRef.value.find(item => item.id == res.index)
				const beforeMonster = {...beforeMon,...res}
				battleInfo.value.monster = beforeMonster
				txtCopywriting(beforeMonster, txtArr, 0, scrollIndex)
			}
		})
	}
}

// 逃跑
const handleRunAway = (txtArr, scrollIndex) => {
	postFightAction({
		action: 3
	}).then((res) => {
		if (res.status == 4) {
			txtCopywriting(res, txtArr, 4, scrollIndex)
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
	skillShow.value = !skillShow.value
}

// 道具
const handleProp = () => {
	uni.showToast({
		icon: 'none',
		title: '道具开发中'
	})
	skillShow.value = !skillShow.value
}

// 地图
const handleToMap = () => {
	uni.navigateTo({
		url: '/pages/canvasMap/index',
	})
}

// 背包
const handleOpenKnapsack = () => {
	hiddenPopup.value.show = true
	pageSwitchMenu.value.index = 0
}

// 商店
const handleToShop = () => {
	uni.navigateTo({
		url: '/pages/shopping/index',
	})
}

// 锻造
const handleToForge = () =>{
	uni.navigateTo({
		url: '/pages/forge/index',
	})
}

// 退出
const handleLeave = () => {
	uni.showModal({
		title: '确定退出游戏吗？',
		content: '',// '这是一个模态弹窗',
		success: function (res) {
			if (res.confirm) {
				resetIndex()
				uni.clearStorageSync()
				uni.reLaunch({
					url: '/pages/loginOrRegister/index',
				})
			} else if (res.cancel) {
				console.log('用户点击取消');
			}
		}
	})

}



















export {
	handleGetUserInfo, // 获取玩家最新信息
	handleSeachItem, // 探索
	handleRunAway, // 逃跑
	handleProp,// 道具
	handleSkill, // 技能
	handleToMap, // 打开地图
	handleOpenKnapsack, // 打开背包
	handleToShop, // 打开商店
	handleToForge,// 锻造
	handleLeave, // 退出
	skillShow,// 技能框-显示隐藏
}
