<template>
	<view class="papers-list u-f-ac animated fadeInLeft fast" @tap="opendetail">
		<image :src="item.userpic" mode="widthFix" lazy-load></image>
		<view class="nav">
			<view class="u-f-ac u-f-jsb nick-name">{{item.username}}
				<view class="time">{{item.time}}</view>
			</view>
			<view class="u-f-ac u-f-jsb information">{{item.data}}
				<template v-if="item.noreadnum>0">
					<uni-badge :text="item.noreadnum" type="error"></uni-badge>
				</template>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			item: {
				type: Object,
				required: true
			},
			index: {
				type: Number,
				required: true
			}
		},
		methods:{
			opendetail() {
				console.log(1)
				uni.navigateTo({
					url: '../../pages/user-chat/user-chat'
				});
			}
		}
	}
</script>

<style lang="less" scoped>
	.papers-list {
		border-bottom: 1upx solid #eee;
		padding: 20upx 0;

		image {
			width: 100upx;
			height: 100upx;
			border-radius: 100%;
			margin-right: 20upx;
			flex-shrink: 0;
		}

		.nav {
			flex: 1;

			.nick-name {
				font-size: 35upx;
			}

			.time {
				color: #cbcbcb;
			}

			.information {
				color: #999;
			}
		}
	}
</style>
