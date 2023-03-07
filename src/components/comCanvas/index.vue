<script setup>
	import { onMounted } from 'vue'

	onMounted(() => {
		let ctx = uni.createCanvasContext('canvasId')

		// 创建矩形。x,y,w,h
		ctx.rect(0, 0, 100, 100)
		// 设置或返回用于填充绘画的颜色、渐变或模式。
		ctx.setFillStyle('black')
		// 填充当前绘图（路径）
		ctx.fill()
		// 保存当前环境的状态。
		// ctx.save()

		// 向画布上绘制图像、画布或视频。
		ctx.drawImage('https://img.js.design/assets/img/6392b08b264f81a7c44e0009.png', 0, 100, 100, 100)
		// 保存当前环境的状态。
		// ctx.save()

		// ctx.fillStyle = '#000000'
		// ctx.fillRect(200, 200, 100, 100)

		// ctx.fillStyle = 'red'
		// ctx.fillRect(200, 200, 100, 100)

		setTimeout(() => {
			console.log(0)
		}, 3000)

		ctx.stroke()
		ctx.draw()
	})
</script>

<template>
	<view>
		<canvas
			style="width: 100vh; height: 100vh"
			canvas-id="canvasId"
			id="canvasId"></canvas>
	</view>
</template>
