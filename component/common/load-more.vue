<template>
	<view class="load-more">
		{{loadtext}}
	</view>
</template>

<script>
	export default {
		props:{
			loadtext:{
				type:String,
				required:true
			}
		}
	}
</script>

<style scoped>
	.load-more{
		text-align: center;
		color: #aaa;
		padding: 15upx 0;
	}
</style>
