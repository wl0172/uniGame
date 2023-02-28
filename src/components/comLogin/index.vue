<script setup>
import {
	ref,
	reactive,
	markRaw,
	onMounted,
	watch,
	watchEffect
} from 'vue'
import { postLogin, postRegister } from '@/api/index.js'
import loginState from '@/state/action/loginOrRegister.js'
import { useInfo, battleInfo } from '@/state/index.js'

let isLoding = ref({
	state: false
})
let sinupInfo = ref({
	name: '1',
	password: '11111111',
	device: 'testDeviceL'
})

// 注册
const handleSignUp = () => {
	loginState.value.isState = 0
}
// 登录
const handleLogin = () => {
	if (sinupInfo.value.name && sinupInfo.value.password) {
		postLogin(sinupInfo.value).then((res) => {
			uni.setStorageSync('token', res.token);
			uni.setStorageSync('playerInfo', res.player);
			useInfo.value.token = res?.token
			battleInfo.value.player = res?.player ? res?.player : {}
			isLoding.value.state = true
			setTimeout(()=>{
				uni.redirectTo({
					url: "/pages/content/index"
				})
			},2000)
		})
	} else if(sinupInfo.value.name == ''){
		uni.showToast({
			icon: 'none',
			title: '请输入正确的账号！',
			duration: 1500
		})
	}
}
</script>

<template>
	<div class="pageCenter">
		<div class="login_conter">
			<p class="login_p">欢迎冒险者</p>
			<div class="login_div">
				<input v-model="sinupInfo.name" maxlength="30" placeholder="请输入账号" />
			</div>
			<div class="login_div">
				<input v-model="sinupInfo.password" type="password" maxlength="8" placeholder="请输入密码" />
			</div>
			<div class="login_button login_div">
				<div class="login_button_txt" @click="handleSignUp">注册</div>
				<div class="login_button_txt" @click="handleLogin">登录</div>
			</div>
		</div>
		<!-- 过渡的动画 -->
		<div class="pageCenter_gif" v-if="isLoding.state">
			<image class="pageCenter_gif_img" src="@/static/1.gif" alt="" />
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
			margin: 0 auto 2rem auto;
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

		.login_button {
			margin: 0 auto;
			display: flex;
			background: #ffffff00;
			justify-content: space-around;

			.login_button_txt {
				width: 37%;
				height: 74rpx;
				line-height: 74rpx;
				border-radius: .3rem;
				color: black;
				background: linear-gradient(to right, #8ebcf5 0, #00e2fa 80%, #00e2fa 100%);
			}

			.login_button_txt:nth-child(1) {
				// color: #004686;
			}

			.login_button_txt:active {
				opacity: .7;
			}
		}
	}
	.pageCenter_gif{
		width: 100%;
		height: 100%;
		position: absolute;
		background: #E7E8E0;
		text-align: center;
		.pageCenter_gif_img{
			width: 620rpx;
			height: 620rpx;
			top: 375rpx;
		}
	}
}
</style>
