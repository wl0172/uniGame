<template>
	<div class="login_conter">
		<p class="login_p">欢迎冒险者</p>
		<div class="login_div">
			<input v-model="sinupInfo.name" maxlength="30" placeholder="请输入账号"
				oninput="value=value.replace(/[\u4E00-\u9FA5]/g,'')" />
		</div>
		<div class="login_div">
			<input v-model="sinupInfo.password" maxlength="8" placeholder="请输入密码"
				oninput="value=value.replace(/[\u4E00-\u9FA5]/g,'')" />
		</div>
		<div class="login_a">
			<!-- 忘记密码? -->
			<!-- <div @click="handleForgotPassword"></div> -->
			<div @click="handleSignUp">注册</div>
		</div>
		<div @click="handleLogin" class="buttonHover login_button">登录</div>
	</div>
</template>

<script setup>
	import { ref } from "vue"
	import apiRequest from "@/api/index.js"

	let sinupInfo = ref({
		name: '',
		password: '',
	})

	// 注册
	const handleSignUp = () => {
		uni.navigateTo({
			url: '/pages/register/index'
		})
	}
	// 登录
	const handleLogin = () => {
		if(sinupInfo.value.name && sinupInfo.value.password){
			console.log(sinupInfo.value, '登录参数======')
			// apiRequest.postLogin(sinupInfo.value).then((res) => {
			// 	console.log(res)
			// })
			uni.navigateTo({
				url: "/pages/content/index"
			})
		}else{
			uni.showToast({
				icon:'none',
				title: '请输入正确的账号和密码！',
				duration: 2000
			})
		}
	}
</script>

<style scoped lang="less">
	.login_conter {
		width: 70%;
		background: #ffffffcc;
		text-align: center;
		border-radius: 0.7rem;
		color: black;
		margin: 0 auto;
		padding: 20rpx;
		.login_p {
			margin: 1rem;
			font-size: 1rem;
		}
		.login_div {
			margin: 0 0 1rem 0;
			background: #e3e3e3;
			border-radius: 50rem;
			padding: 0 30rpx;
			input {
				width: 100%;
				border: 0;
				height: 3rem;
				border-radius: 0.3rem;
				outline: none;
				text-align: left;
			}
		}
		.login_a {
			color: #7676cb;
			width: auto;
			margin: 0 auto;
			text-align: right;
			padding: 0 1.1rem;
		}
		.login_button {
			width: 100%;
			border-radius: 50rem;
			padding: 0.7rem 0;
			margin: 3rem auto 1rem auto;
			background: linear-gradient(to right, #8ebcf5 0, #00e2fa 80%, #00e2fa 100%);
			color: white;
		}
	}
	
</style>
