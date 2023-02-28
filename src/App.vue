<script>
	import pageAddress from "@/state/pageState/index.js"
	export default {
		onLaunch: function() {},
		onShow: function() {
			// 判断有无token
			pageAddress()
		},
		onHide: function() {},
	}
</script>

<style>
	/*每个页面公共css */
	#app{
		width: 100%;
		height: 100vh;
		overflow: hidden;
		background: #fff5e1;
	}
</style>
