<script setup>
import { ref } from "vue"
import apiRequest from "@/api/index.js"

let sinupInfo = ref({
	name: '',
	password: '',
	phone_number: '',
	email: '',
})

// 返回
const handleBank = () => {
	uni.navigateBack({
		delta: 1
	})
}
// 注册
const handleSigUp = () => {
	if (sinupInfo.value.name && sinupInfo.value.password && sinupInfo.value.phone_number && sinupInfo.value.email) {
		console.log(sinupInfo.value, '======')
		// apiRequest.postLogin(sinupInfo.value).then((res) => {
		// 	console.log(res)
		// })
		uni.redirectTo({
			url: '/pages/login/index',
		})
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
			<div @click="handleSigUp" class="login_button login_div">注册</div>
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

	.login_conter {
		width: 80%;
		text-align: center;
		border-radius: 0.7rem;
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
			border-radius: 50rem;
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
			margin: 0 auto;
			text-align: right;
			padding: 0 1.1rem;
			display: flex;
			justify-content: space-between;
			background: #ffffff00;
		}

		.login_button {
			height: 100rpx;
			line-height: 100rpx;
			border-radius: 50rem;
			margin: 3rem auto 1rem auto;
			background: linear-gradient(to right, #8ebcf5 0, #00e2fa 80%, #00e2fa 100%);
			color: white;
			box-shadow:
				0px 0px 2rpx 2rpx rgba(55, 114, 203, 0.2),
				/*下面深蓝色立体阴影*/
				0px 0px 6rpx 1rpx #4379d0,
				/*内部暗色阴影*/
				0 -15px 2rpx 2rpx rgba(55, 114, 203, 0.10) inset;
		}

		.login_button:active {
			opacity: .7;
		}
	}
}
</style>
