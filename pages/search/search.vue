<template>
	<view>
		搜索页
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		},
		// 原生导航按钮点击事件
		onNavigationBarButtonTap(e) {
			if(e.index==0) {
				// 返回上一级
				uni.navigateBack({
					delta:1
				})
			}
		},
		// 监听搜索框文本变化
		onNavigationBarSearchInputChanged(e) {
			console.log(e.text)
		},
		// 监听搜索按钮事件
		onNavigationBarSearchInputConfirmed(e) {
			console.log(e.text)
		}
	}
</script>

<style>

</style>
