<script>	
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	uni-page-body{
		width: 100%;
		height: 100%;
		background: #01441b54;
		display: flex;
		align-items: center;
		position: relative;
		justify-content: center;
	}
</style>
