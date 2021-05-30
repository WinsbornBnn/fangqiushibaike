<template>
	<view class="tag-sex icon iconfont" :class="[sex==0?'icon-nan':'icon-nv']">{{age}}</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		props: {
			sex: {
				type: Number,
				required: true
			},
			age: {
				type: Number,
				required: true
			}
		},
		methods: {
          
		}
	}
</script>

<style scoped>
	.tag-sex {
		background-color: #44B3FF;
		color: #fff;
		font-size: 24upx;
		padding: 5upx 10upx;
		margin-left: 10upx;
		border-radius: 20upx;
		line-height: 30upx;
	}
	.icon-nv{
		background-color: #ff698d!important;
	}
</style>
