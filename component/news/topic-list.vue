<template>
	<view class="topic-list u-f-ac" @click="opendetail">
		<image :src="item.titlepic" mode="widthFix" lazy-load></image>
		<view>
			<view>#{{item.title}}#</view>
			<view>{{item.desc}}</view>
			<view>动态 {{item.totalnum}} 今日 {{item.todaynum}}</view>
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
			opendetail(){
				uni.navigateTo({
					url:'../../pages/topic-datial/topic-datial'
				})
			}
		}
	}
</script>

<style lang="less" scoped>
	.topic-list {
		padding: 20upx 0;
		border-bottom: 1upx solid #eee;
		color: #a4a4a4;

		image {
			width: 150upx;
			height: 150upx;
			border-radius: 10upx;
			margin-right: 30upx;
		}

		view>view:first-child {
			color: #333;
			font-size: 32upx;
		}
	}
</style>
