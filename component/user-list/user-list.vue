<template>
	<view class="user-list u-f-ac animated fadeInLeft fast">
		<image :src="item.userpic" mode="widthFix" lazy-load></image>
		<view>
			<view class="username">{{item.username}}</view>
			<view style="display: inline-block;">
				<tagSexAge :sex="item.sex" :age="item.age"></tagSexAge>
			</view>
		</view>
		<view class="icon iconfont u-f-ajc"
		:class="[item.isGuanzhu?'icon-xuanze-yixuan':'icon-zengjia1']"
		></view>
	</view>
</template>

<script>
	import tagSexAge from '../../component/common/tag-sex-age.vue'
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
		components: {
			tagSexAge
		}
	}
</script>

<style lang="less" scoped>
	.user-list {
		margin: 0 20upx;
		padding: 20upx 0;
		border-bottom: 1upx solid #eee;

		image {
			width: 100upx;
			height: 100upx;
			border-radius: 100%;
			margin-right: 20upx;
			flex-shrink: 0;
		}

		>view:first-of-type {
			.username {
				font-size: 35upx;
			}

			flex: 1;
		}

		>view:last-of-type {
			width: 80upx;
			color: #ccc;
		}
	}

	.icon-zengjia1 {
		color: #f8791b !important;
	}
</style>
