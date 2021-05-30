<template>
	<view>
		<view class="paper-left-popup-mask" v-show="isPopup" @tap="hidepopup"></view>
		<view class="paper-left-popup" v-show="isPopup">
			<view class="u-f-ac" hover-class="paper-left-popup-h" @tap="addFrends">
				<view class="icon iconfont icon-sousuo"></view> 加糗友
			</view>
			<view class="u-f-ac" hover-class="paper-left-popup-h" @tap="clear">
				<view class="icon iconfont icon-qingchu"></view> 清除未读
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			isPopup: {
				type: Boolean,
				required: true
			}
		},
		methods: {
			hidepopup() {
				this.$emit('hidepopup')
			},
			addFrends() {
				this.$emit('addFrends')
			},
			clear() {
				this.$emit('clear')
			}
		}
	}
</script>

<style lang="less" scoped>
	.paper-left-popup {
		position: fixed;
		right: 0;
		z-index: 2000;
		background: #fff;
		width: 55%;
		box-shadow: 1upx 1upx 20upx 2upx #ccc;

		>view {
			padding: 20upx;
			font-size: 35upx;

			>view {
				margin: 10upx;
				font-weight: bold;
			}
		}
	}

	.paper-left-popup-h {
		background: #eee;
	}
</style>
