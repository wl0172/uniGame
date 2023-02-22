<script setup>
import { onLoad, onShow } from "@dcloudio/uni-app"
import { ref, reactive, markRaw,onMounted, watch } from 'vue'

let canvasSty = ref({
	weight: '',
	height: ''
})

wx.getSystemInfo({
	success(res){
		canvasSty.value.weight = res.windowWidth,
		canvasSty.value.height = res.windowHeight
	}
})

const drawStars = () => {
	
	let ctx = wx.createCanvasContext('canvasId')
		
		
}

drawStars()
			
</script>

<template>
	<!-- canvas -->
	<canvas type="2d" id="canvasId" :style="{'width':canvasSty.width+'px','height':canvasSty.height+'px'}" ></canvas>
</template>

<style scoped lang="less">
	uni-canvas {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}

	#canvas {
		position: absolute;
		top: 0;
		left: 0;
		background: red;
		z-index: 99999999;
	}
</style>
