<script>
	import pageAddress from "@/state/pageState/index.js"
	import { audioClose } from '@/state/audio/index.js'
	export default {
		onLaunch: function() {
			// 判断有无token - 跳转首页
			pageAddress()
		},
		onShow: function() {},
		onHide: function() {
			audioClose()
		},
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
