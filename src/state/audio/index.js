import { onLoad, onShow, onHide } from '@dcloudio/uni-app'
import { ref } from 'vue'

// 背景
let bgAudioPaht = '../../static/audio/bg.mp3'
// 攻击
let AttackAudioPaht = '../../static/audio/attack.mp3'

	
let innerAudioContext = uni.createInnerAudioContext()
// 背景音乐
const audioPlay = (state = 1) => {
	if(state == 0){
		innerAudioContext.pause()
		return
	}else if(state == 1){
		innerAudioContext.autoplay = true// 是否自动开始播放，默认 false
		innerAudioContext.loop = true// 是否循环播放，默认 false
		innerAudioContext.src = bgAudioPaht
		innerAudioContext.onPlay()
	}else if(state == 2){
		innerAudioContext.play()
	}
}

// 攻击
const audioAttack = () => {
	let innerAudioContext = uni.createInnerAudioContext()
	innerAudioContext.autoplay = true// 是否自动开始播放，默认 false
	innerAudioContext.src = AttackAudioPaht
	innerAudioContext.onPlay({})
}

// 关闭音乐
const audioClose = () => {
	audioPlay(0)
}

export {
	audioPlay,
	audioAttack,
	audioClose
}
