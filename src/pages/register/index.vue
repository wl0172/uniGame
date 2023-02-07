<template>
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
		<div class="login_a">
			<div></div>
			<div @click="handleBank">返回</div>
		</div>
		<div @click="handleSigUp" class="buttonHover login_button">注册</div>
	</div>
</template>

<script setup>
	import {
		ref
	} from 'vue'
	import a from '@/state/index.js'

	let sinupInfo = ref({
		name: '',
		password: '',
		// device: 
	})


	const handleToContent = () => {
		uni.navigateTo({
			url: '/pages/content/index'
		})
	}
</script>

<style scoped lang="less">
	.login_conter {
		width: 70%;
		// height: 40%;
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
			border-radius: 0.7rem;
			padding: 0.7rem 0;
			margin: 3rem auto 1rem auto;
			background: linear-gradient(to right, #8ebcf5 0, #00e2fa 80%, #00e2fa 100%);
			color: white;
		}
	}
</style>
