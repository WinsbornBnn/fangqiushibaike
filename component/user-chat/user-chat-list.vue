<template>
	<view>
		<view v-if="item.gstime" class="user-chat-time u-f-ajc">{{item.gstime}}</view>
		<view class="user-chat-list u-f" :class="{'user-chat-me':item.isMe}">
			<image class="heads" v-if="!item.isMe" :src="item.userpic" mode="widthFix" lazy-load></image>
			<view class="user-chat-list-body">
				<!-- 文字 -->
				<text v-if="item.type=='text'">{{item.data}}</text>
				<!-- 图片 -->
				<image v-if="item.type=='img'" :src="item.data" mode="widthFix" lazy-load></image>
			</view>
			<image class="heads" v-if="item.isMe" :src="item.userpic" mode="widthFix" lazy-load></image>
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
		}
	}
</script>

<style scoped lang="less">
	.user-chat-time {
		padding: 10upx 0;
		color: #a2a2a2;
		font-size: 24upx;
	}

	.user-chat-list {
		padding: 20upx 0;

		.heads {
			width: 100upx;
			height: 100upx;
			border-radius: 100%;
			flex-shrink: 0;
		}

		.user-chat-list-body {
			position: relative;
			background-color: #f4f4f4;
			padding: 25upx;
			margin-left: 20upx;
			border-radius: 20upx;
			margin-right: 100upx;

			&::after {
				position: absolute;
				left: -30upx;
				top: 30upx;
				right: 0;
				width: 0;
				height: 0;
				content: '';
				border: 16upx solid #f4f4f4;
				border-color: transparent #f4f4f4 transparent transparent;
			}

			image {
				max-width: 340upx;
				max-height: 200upx;
			}
		}
	}
	.user-chat-me {
		justify-content: flex-end;
	
		.user-chat-list-body {
			margin-right: 20upx;
			margin-left: 100upx;
	
			&::after {
				left: auto;
				right: -30upx;
				border-color: transparent transparent transparent #f4f4f4;
			}
		}
	}
</style>
