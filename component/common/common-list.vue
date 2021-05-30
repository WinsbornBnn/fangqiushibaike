<template>
	<view class="common-list u-f animated fadeInLeft fast">
		<view class="common-list-left">
			<!-- 头像 -->
			<image :src="item.userpic" mode="widthFix" lazy-load></image>

		</view>
		<view class="common-list-right">
			<view class="one u-f-ac u-f-jsb">
				<view class="u-f-ac nickname">{{item.username}}
					<tagSexAge :sex="item.sex" :age="item.age"></tagSexAge>
				</view>
				<view v-show="isGuanzhu" class="icon iconfont icon-zengjia" @tap="guanzhu">关注</view>
			</view>
			<view class="two">{{item.title}}</view>
			<view class="three u-f-ajc">
				<!-- 图片 -->
				<image v-if="item.titlepic" :src="item.titlepic" mode="widthFix" lazy-load></image>
				<!-- 视频 -->
				<template v-if="item.video">
					<view class="common-list-play icon iconfont icon-bofang"></view>
					<view class="common-list-playinfo">
						{{item.video.looknum}} 次播放 {{item.video.time}}
					</view>
				</template>

				<!-- 分享 -->
				<view v-if="item.share" class="common-list-share u-f-ac">
					<image :src="item.share.titlepic" mode="widthFix" lazy-load></image>
					<view class="">{{item.share.title}}</view>
				</view>
			</view>
			<view class="four u-f-ac u-f-jsb">
				<view class="address">{{item.path}}</view>
				<view class="u-f-ac all">
					<view class="icon iconfont icon-zhuanfa">{{item.sharenum}}</view>
					<view class="icon iconfont icon-pinglun1">{{item.commentnum}}</view>
					<view class="icon iconfont icon-dianzan1">{{item.goodnum}}</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import tagSexAge from './tag-sex-age.vue'
	export default {
		components:{
			tagSexAge
		},
		data() {
			return {
				isGuanzhu: this.item.isGuanzhu
			}
		},
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
		methods: {
			guanzhu() {
				this.isGuanzhu = !this.isGuanzhu
				uni.showToast({
					title: "关注成功"
				})
			}
		}
	}
</script>

<style lang="less" scoped>
	.common-list {
		padding: 20upx;

		.common-list-left {
			flex-shrink: 0; // 防止被压缩

			image {
				width: 90upx;
				height: 90upx;
				border-radius: 100%;
			}
		}

		.common-list-right {
			flex: 1;
			margin-left: 15upx;
			width: 85%;
			border-bottom: 2upx solid #eee;
			padding-bottom: 10upx;

			.one {
				.nickname {
					color: #999;
					font-size: 30upx;
				}

				.icon-zengjia {
					background: #eee;
					padding: 0 10upx;
					font-size: 26upx;
					border-radius: 5upx;
				}
			}

			.two {
				font-size: 32upx;
				padding: 12upx 0;
			}

			.three {
				position: relative;
				margin-bottom: 10upx;

				image {
					border-radius: 20upx;
				}

				.common-list-play {
					position: absolute;
					font-size: 140upx;
					color: #fff;
				}

				.common-list-playinfo {
					position: absolute;
					background: rgba(51, 51, 51, .73);
					color: #fff;
					bottom: 10upx;
					right: 24upx;
					border-radius: 20upx;
					font-size: 22upx;
					padding: 0 15upx;
				}

				.common-list-share {
					background-color: #f7f7f7;
					width: 100%;
					border-radius: 10upx;
					padding: 10upx;

					image {
						width: 200upx;
						height: 150upx;
						margin-right: 20upx;
					}
				}
			}

			.four {
				color: #bbb;

				.all>view {
					margin-left: 6upx;
					padding-left: 5upx;
					font-size: 28upx;
				}
			}
		}
	}
</style>
