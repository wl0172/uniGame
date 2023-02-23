<script setup>
import { onMounted } from 'vue'

onMounted(()=>{
	var context = uni.createCanvasContext('firstCanvas')
	// context.setStrokeStyle("#000")
	// context.setLineWidth(5)
	// context.rect(0, 0, 100, 100)
	// context.stroke()
	
	context.setStrokeStyle("#ff0000")
	context.setLineWidth(2)
	context.moveTo(160, 100)
	context.arc(100, 100, 60, 0, 2 * Math.PI, true)
	context.moveTo(140, 100)
	context.arc(100, 100, 40, 0, Math.PI, false)
	context.moveTo(85, 80)
	context.arc(80, 80, 5, 0, 2 * Math.PI, true)
	context.moveTo(125, 80)
	context.arc(120, 80, 5, 0, 2 * Math.PI, true)
	context.stroke()
	context.draw()
})

</script>

<template>
	<view>
		<canvas style="width: 300px; height: 200px;" canvas-id="firstCanvas" id="firstCanvas"></canvas>
	</view>
</template>