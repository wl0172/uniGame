import { ref, reactive } from 'vue'

import effectCns from '../../../config/dict/custom/effect.cns.json';
import errorCns from '../../../config/dict/custom/error.cns.json';

import monster from '../../../config/dict/monster.json';
import goods from '../../../config/dict/goods.json';
import map from '../../../config/dict/map.json';
import mixture from '../../../config/dict/mixture.json';

const goodsRefHasMp = () => {
	let a = {}
	goods.forEach((item,index) => {
		a[item.sku] = item
	});
	return a
}

// 配置文件存储
const effectCnsRef = ref(effectCns)// 暂时不动
const errorCnsRef = ref(errorCns)// 暂时不动

const monsterRef = ref(monster)// 暂时不动
const goodsRef = ref(goodsRefHasMp())
const mapRef = ref(map)// 地图
const mixtureRef = ref(mixture)


export {
	effectCnsRef,// 攻击反馈 - key
	errorCnsRef,// 异常
	
	monsterRef,// 怪物属性
	goodsRef,// 商店 - 商品
	mapRef,// 地图
	mixtureRef,// 锻造书
	
}