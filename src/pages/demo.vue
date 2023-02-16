<script setup>
import { ref } from "vue"
import ComPopup from '@/components/comPopup/index.vue'

let a = ref('index')

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