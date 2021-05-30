<template>
	<view class="user-chat-bottom u-f-ac">
		<input type="text" value="文明发言" v-model="text" />
		<view class="icon iconfont icon-fabu" @tap="submit"></view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				text: "文明发言"
			}
		},
		methods: {
			submit() {
				this.$emit('submit',this.text)
				this.text = ""
			}
		}
	}
</script>
<style lang="less" scoped>
	.user-chat-bottom {
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		height: 100upx;
		padding: 0 20upx;
		background-color: #fff;
		border-top: 1upx solid #eee;

		input {
			flex: 1;
			margin-right: 20upx;
			background-color: #f7f7f7;
			padding: 10upx 20upx;
			border-radius: 10upx;
		}

		view {
			width: 80upx;
			font-size: 50upx;
		}
	}
</style>
