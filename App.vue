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
	/* 引入官方css样式 */
	@import url("./common/uni.css");
	/* 引入字体图标库 */
	@import url("./static/font/iconfont.css");
	/* 引入动画 */
	@import url("./common/animate.css");
	/* 公共样式 */
	@import url("./common/flex.css");
</style>
