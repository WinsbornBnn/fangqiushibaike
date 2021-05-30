<template>
	<view>
		<uni-nav-bar :fixed="true" :statusBar="true" @clickRight="openAdd">
			<!-- 左边 -->
			<block slot="left">
				<view class="nav-left">
					<view class="icon iconfont icon-qiandao"></view>
				</view>
			</block>
			<!-- 中间 -->
			<view class="u-f-ajc nav-tab-bar">
				<!-- 循环 -->
				<block v-for="(item,index) in tabBars" :key="item.id">
					<view :class="{'active':tabIndex==index}" @click="changeTab(index)">{{item.name}}
						<view v-if="(tabIndex==index)" class="nav-tab-bar-line"></view>
					</view>
				</block>
			</view>
			<!-- 右边 -->
			<block slot="right">
				<view class="nav-right u-f-ajc">
					<view class="icon iconfont icon-bianji1"></view>
				</view>
			</block>
		</uni-nav-bar>
	</view>
</template>

<script>
	import uniNavBar from '../../components/uni-nav-bar/uni-nav-bar.vue'
	export default {
		props:{
			tabIndex:{
				type:Number,
				required:true
			},
			tabBars:{
				type:Array,
				required:true
			}
		},
		components:{
			uniNavBar
		},
		methods:{
			changeTab(index) {
				this.$emit('tabChange',index)
			},
			// 打开发布页
			openAdd() {
				uni.navigateTo({
					url: '../add-input/add-input'
				});
			}
		}
	}
</script>

<style lang="less" scoped>
	.nav-left {
		margin-left: 16upx;
	
		view {
			font-size: 40upx;
			color: #ff9619;
		}
	}
	
	.nav-tab-bar {
		width: 100%;
		position: relative;
	
		view {
			font-size: 32upx;
			padding: 0 15upx;
			font-weight: bold;
			color: #969696;
		}
	
		.active {
			color: #333 !important;
		}
	
		.nav-tab-bar-line {
			position: absolute;
			border-bottom: 6upx solid #fede33;
			width: 40upx;
			margin: auto;
			border-top: 6upx solid #fede33;
			border-radius: 20upx;
		}
	}
	
	.nav-right {
		width: 100%;
	
		view {
			font-size: 40upx;
			font-weight: bold;
		}
	}
	
	
</style>
