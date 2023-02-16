<script>
	import pageAddress from "@/utils/index.js"
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
			pageAddress()
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	#app{
		width: 100%;
		height: 100vh;
		background: #FCF5E2;
	}
</style>
