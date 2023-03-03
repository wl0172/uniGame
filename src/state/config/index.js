import { ref, reactive } from 'vue'

import effectCns from '../../../config/dict/custom/effect.cns.json';
import errorCns from '../../../config/dict/custom/error.cns.json';

import monster from '../../../config/dict/monster.json';
import goods from '../../../config/dict/goods.json';
import map from '../../../config/dict/goods.json';

// 配置文件存储
const effectCnsRef = ref(effectCns)
const errorCnsRef = ref(errorCns)

const monsterRef = ref(monster)
const goodsRef = ref(goods)
const mapRef = ref(map)


export {
	effectCnsRef,// 攻击反馈 - key
	errorCnsRef,// 异常
	
	monsterRef,// 怪物属性
	goodsRef,// 商店 - 商品
	mapRef,// 地图
	
}