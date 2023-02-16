<script setup>
import { ref } from "vue"
let a = ref('我是popup')

</script>

<template>
	
	<div class="comPopupDiv">
		<div class="comPopupDiv_conter">
			{{ a }}
		</div>
	</div>
	
</template>

<style scoped lang="less">
.comPopupDiv{
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
	left: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	.comPopupDiv_conter{
		
	}
}
</style>