<template>
	<view class="topic-nav">
		<view class="one u-f-ac u-f-jsb">
			<view>热门分类</view>
			<view class="u-f-ac" @tap="opentipic">更多<view class="icon iconfont icon-jinru"></view></view>
		</view>
		<view class="two u-f-ac">
			<block v-for="(item,index) in nav" :key="index">
				<view>{{item.name}}</view>
			</block>
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			nav:{
				type:Array,
				required:true
			}
		},
		methods:{
			opentipic(){
				uni.navigateTo({
					url:'../../pages/topic-nav/topic-nav'
				})
			}
		}
	}
</script>

<style lang="less" scoped>
	.topic-nav{
		border-top: 1upx solid #eee;
		border-bottom: 1upx solid #eee;
		padding: 20upx;
		.one{
			margin-bottom: 10upx;
			>view:nth-child(1){
				color: #333;
				font-size: 32upx;
			}
			>view:nth-child(2){
				color: #9e9e9e;
			}
		}
		.two{
			view{
				flex: 1;
				background-color: #eee;
				color: #9e9e9e;
				border-radius: 10upx;
				margin: 0 10upx;
				text-align: center;
			}
		}
	}
</style>
