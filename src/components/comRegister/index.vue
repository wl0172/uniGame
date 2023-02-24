<script setup>
import { ref } from "vue"
import apiRequest from "@/api/index.js"
import loginState from '@/state/action/loginOrRegister.js'

let sinupInfo = ref({
	name: '',
	password: '',
	phone_number: '',
	email: '',
})

// 返回
const handleBank = () => {
	loginState.value.isState = 1
}
// 注册
const handleSigUp = () => {
	if (sinupInfo.value.name && sinupInfo.value.password && sinupInfo.value.phone_number && sinupInfo.value.email) {
		console.log(sinupInfo.value, '注册======')
		// apiRequest.postLogin(sinupInfo.value).then((res) => {
		// 	console.log(res)
		// })
		loginState.value.isState = 1
	} else {
		uni.showToast({
			icon: 'none',
			title: '信息请填写完整正确！',
			duration: 2000
		})
	}
}
</script>

<template>
	<div class="pageCenter">
		<div class="login_conter">
			<p class="login_p">冒险者</p>
			<div class="login_div" draggable="true">
				<input v-model="sinupInfo.name" maxlength="30" placeholder="请输入账号"
					oninput="value=value.replace(/[\u4E00-\u9FA5]/g,'')" />
			</div>
			<div class="login_div" draggable="true">
				<input v-model="sinupInfo.password" maxlength="8" placeholder="请输入密码,最少8位"
					oninput="value=value.replace(/[\u4E00-\u9FA5]/g,'')" />
			</div>
			<div class="login_div">
				<input type="number" v-model="sinupInfo.phone_number" maxlength="11" placeholder="请输入手机号" />
			</div>
			<div class="login_div">
				<input v-model="sinupInfo.email" placeholder="请输入邮箱" oninput="value=value.replace(/[\u4E00-\u9FA5]/g,'')" />
			</div>
			<div class="login_a login_div">
				<div></div>
				<div @click="handleBank">返回</div>
			</div>
			<div @click="handleSigUp" class="login_button login_div">
				<div class="login_button_txt">注册</div>
			</div>
		</div>
	</div>
</template>

<style scoped lang="less">
.pageCenter {
	width: 100%;
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
	position: relative;
	.login_conter {
		width: 80%;
		text-align: center;
		border-radius: 0.3rem;
		color: black;
		margin: 0 auto;
		padding: 40rpx 20rpx 40rpx 20rpx;
		background: #9ca8b8;

		.login_p {
			margin: 1rem auto 2rem auto;
			font-size: 1.5rem;
			color: #81ffc1;
		}

		.login_div {
			background: #e3e3e3;
			border-radius: .3rem;
			padding: 0 30rpx;
			width: 77%;
			margin: 0 auto 50rpx auto;
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
			margin: 30rpx auto;
			text-align: right;
			padding: 0 1.1rem;
			display: flex;
			justify-content: space-between;
			background: #ffffff00;
		}
		.login_button {
			margin: 0 auto;
			display: flex;
			background: #ffffff00;
			justify-content: space-around;
			.login_button_txt{
				width: 37%;
				height: 74rpx;
				line-height: 74rpx;
				border-radius: .3rem;
				color: black;
				background: linear-gradient(to right, #8ebcf5 0, #00e2fa 80%, #00e2fa 100%);
			}
			.login_button_txt:nth-child(1){
				// color: #004686;
			}
			.login_button_txt:active {
				opacity: .7;
			}
		}
	}
}
</style>
