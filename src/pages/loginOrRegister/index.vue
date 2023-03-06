<script setup>
import { ref, watch } from 'vue'
import ComLogin from "@/components/comLogin/index.vue"
import ComRegister from "@/components/comRegister/index.vue"
import loginState from '@/state/loginRegister/index.js'

let val = ref({
	isState: 1
})
// 监听页面组件变化
watch(loginState.value, (newValue, oldValue) => {
	val.value.isState = newValue.isState
})

</script>

<template>
	
	<div class="loginOrRegisterDiv">
		<!-- 登录 -->
		<ComLogin v-if="val?.isState" />
		<!-- 注册 -->
		<ComRegister v-else />
		<!-- 版本号 -->
		<div class="loginOrRegisterDiv_version">v0.0.6</div>
	</div>
	
</template>

<style scoped lang="less">
.loginOrRegisterDiv{
	position: relative;
	.loginOrRegisterDiv_version{
		position: absolute;
		bottom: 50rpx;
		width: 100%;
		text-align: center;
	}
}
</style>