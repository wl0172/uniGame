<script setup>
	import { onLoad, onShow, onHide } from '@dcloudio/uni-app'
	import { ref } from 'vue'
	
	let innerAudioContext = uni.createInnerAudioContext()
	
	const audioPlay = () => {
		// 是否自动开始播放，默认 false
		innerAudioContext.autoplay = true
		// 是否循环播放，默认 false
		innerAudioContext.loop = true
		
		innerAudioContext.src = '../../static/audio/bg.mp3';

		innerAudioContext.onPlay(() => {
			console.log('开始播放');
		});
		innerAudioContext.onError((res) => {});
	}
		
		
	onLoad(()=>{
		audioPlay()
	})
	
</script>

<template>
  <div class="comAudio"></div>
</template>

<style scoped lang="less">
	.comAudio{
		position: absolute;
		top: 0;
		left: 0;
		z-index: -1;
		opacity: 0;
	}
</style>