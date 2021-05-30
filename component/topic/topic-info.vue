<template>
	<view>
		<!-- 模糊背景 -->
		<view class="topic-bg">
			<image :src="topicInfo.titlepic" mode="aspectFill" lazy-load></image>
		</view>
		<!-- 话题信息 -->
		<view class="topic-info">
			<view class="topic-info-t u-f-ac">
				<image :src="topicInfo.titlepic" mode="widthFix" lazy-load></image>
				<view>#{{topicInfo.title}}#</view>
			</view>
			<view class="topic-info-c u-f-ac">
				<view class="">动态 {{topicInfo.todtalnum}}</view>
				<view class="">今日 {{topicInfo.todaynum}}</view>
			</view>
			<view class="topic-info-b">
				{{topicInfo.desc}}
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			topicInfo:{
				type:Object,
				required:true
			}
		}
	}
</script>

<style lang="less" scoped>
	.topic-bg {
		width: 100%;
		height: 300upx;
		position: relative;
		overflow: hidden;
	
		image {
			width: 100%;
			position: absolute;
			filter: blur(10upx);
		}
	}
	
	.topic-info {
		padding: 0 25upx;
		position: relative;
		.topic-info-t {
			image{
				width: 150upx;
				height: 150upx;
				border-radius: 20upx;
				position: absolute;
				top: -75upx;
			}
			view{
				font-size: 35upx;
				margin-left: 170upx;
				flex: 1;
			}
		}
	
		.topic-info-c {
			padding: 35upx 0 15upx 0;
			view{
				color: #cdcdcd;
			}
		}
	
		.topic-info-b {
			color: #a3a3a3;
			font-size: 32upx;
			padding-bottom: 20upx;
		}
	}
	
</style>
