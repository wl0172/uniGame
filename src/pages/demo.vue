<script setup>
import { ref } from "vue"
import ComPopup from '@/components/comPopup/index.vue'

let a = ref('index')

// uni.showToast({
// 	icon: 'none',
// 	title: '测试',
// 	duration: 5000	
// })

</script>

<template>
	
	<div>
		<div>{{ a }}1234</div>
		<text>1234</text>
		
		<ComPopup />
		
	</div>
	
</template>

<style scoped lang="less">
div{
	color: @txtColor;
}
</style>