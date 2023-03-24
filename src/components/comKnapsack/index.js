import { ref, watch } from "vue"
// 配置文件
import {
	effectCnsRef,
	errorCnsRef,
	monsterRef,
	goodsRef,
	mapRef,
} from '@/state/config/index.js'
// 全局属性
import { battleInfo, hiddenPopup } from '@/state/index.js'
// 接口
import { postGoodsEquip } from '@/api/index.js'


// 物品介绍
let txtValue = ref({})



// 物品点击
const handleArticle = (item,index) => {
	for(let i of goodsRef.value){
		if(i.index == item.index){
			txtValue.value = i
		}
	}
}
// 丢弃
const handleDiscard = () => {
	uni.showToast({
		icon: 'none',
		title: '丢弃-暂无开发'
	})
}
//  使用
const handleAction = () => {
	uni.showToast({
		icon: 'none',
		title: '使用-暂无开发'
	})
}
// 装备
const handleEquip = () => {
	postGoodsEquip({
		id: txtValue.value.id
	}).then((res)=>{
		console.log(res, '======')
	})
}
// 离开
const handleBack = () => {
	txtValue.value = {}
	hiddenPopup.value.show = false
}

export {
	txtValue,
	handleBack,
	handleArticle,
	handleDiscard,
	handleAction,
	handleEquip,
}