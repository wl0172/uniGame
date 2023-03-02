<script>
	import disposeConfig from "../config/index.js"
	import pageAddress from "@/state/pageState/index.js"
	export default {
		onLaunch: function() {},
		onShow: function() {
			// 判断有无token - 跳转首页
			pageAddress()
			// 获取配置文件 - 存本地
			disposeConfig()
		},
		onHide: function() {},
	}
</script>

<style>
	/*初始页 */
	#app{
		width: 100%;
		height: 100vh;
		overflow: hidden;
		background: #fff5e1;
	}
</style>
