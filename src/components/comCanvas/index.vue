<script setup>
import { onMounted } from 'vue'

let ctx = uni.createCanvasContext('canvasId')

const jiangsuCoordinates = [
  { x: 150, y: 150 },
  { x: 100, y: 30 },
  { x: 150, y: 60 },
  { x: 200, y: 40 },
  { x: 250, y: 80 },
  { x: 180, y: 120 },
  { x: 220, y: 180 },
  { x: 150, y: 200 },
  { x: 100, y: 150 },
  { x: 60, y: 180 },
  { x: 40, y: 120 },
];

// 初始化 - 绘制canvas
const drawCanvas = (ctx) => {
  // 插入图片
  drawImg(ctx)
  // 矩形
  drawRect(ctx)
	// 不规则图形
	drawRandomIrregularShape(ctx)
	
  ctx.draw()
}

// 不规则图形
const drawRandomIrregularShape = (ctx) => {
	ctx.beginPath();
	ctx.moveTo(jiangsuCoordinates[0].x, jiangsuCoordinates[0].y);

	for (let i = 1; i < jiangsuCoordinates.length; i++) {
		ctx.lineTo(jiangsuCoordinates[i].x*1.5, jiangsuCoordinates[i].y*1.5);
	}

	ctx.closePath();
	ctx.fillStyle = 'red';
	ctx.fill();
}

// 绘制 - 矩形
const drawRect = (ctx, x = 0, y = 100, w = 100, h = 100,style='black') => {
  ctx.rect(x, y, w, h)
  // 设置或返回用于填充绘画的颜色、渐变或模式。
  ctx.setFillStyle(style)
  // 填充当前绘图（路径）
  ctx.fill()
  // 保存当前环境的状态。
  ctx.save()
}

// 绘制 - 图片
const drawImg = (ctx, x = 0, y = 0, w = 100, h = 100) => {
  const svg1 = '../static/svg/1.svg'
  ctx.drawImage(svg1, x, y, w, h)
}




onMounted(() => {
  drawCanvas(ctx)
  
  // setInterval(() => {
  //   drawRect(ctx)
  //   ctx.draw()
  // }, 500)
  // setInterval(() => {
  //   drawCanvas(ctx)
  // }, 1000)
})

</script>

<template>
  <view>
    <canvas style="width: 100vh; height: 100vh;" canvas-id="canvasId" id="canvasId"></canvas>
  </view>
</template>
