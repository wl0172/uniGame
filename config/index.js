
import monster from './dict/monster.json';

// 配置文件存储
const disposeConfig = () => {
	let getMonsterStorage = uni.getStorageSync('getMonsterStorage',monster)
	
	// 怪物配置
	if(!getMonsterStorage){
		uni.setStorageSync('setMonsterStorage',monster)
	}else{
		uni.getStorageSync('getMonsterStorage',monster)
	}
}

export default disposeConfig