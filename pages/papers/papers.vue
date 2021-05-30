<template>
	<view class="body">
		<!-- 操作菜单 -->
		<parpersLeftPopup
		:isPopup="isPopup"
		@hidepopup="hidepopup"
		@addFrends="addFrends"
		@clear="Qingchu"
		></parpersLeftPopup>
		<!-- 小纸条列表 -->
		<block v-for="(item,index) in list" :key="index">
			<papers-list :item="item" :index="index"></papers-list>
		</block>
		<!-- 上拉加载更多 -->
		<load-more :loadtext="loadtext"></load-more>
	</view>
</template>

<script>
	import uniBadge from '../../components/uni-badge/uni-badge.vue'
	import papersList from '../../component/papers/papers-list.vue'
	import loadMore from '../../component/common/load-more.vue'
	import parpersLeftPopup from '../../component/papers/papers-left-popup.vue'
	export default {
		components: {
			uniBadge,
			papersList,
			loadMore,
			parpersLeftPopup
		},
		data() {
			return {
				isPopup: false,
				loadtext: "上拉加载更多",
				list: [{
						userpic: "../../static/demo/topicpic/16.jpeg",
						username: "我是昵称",
						time: "16:34",
						data: "我是信息",
						noreadnum: 11
					},
					{
						userpic: "../../static/demo/topicpic/16.jpeg",
						username: "我是昵称1",
						time: "15:34",
						data: "我是信息1",
						noreadnum: 0
					},
					{
						userpic: "../../static/demo/topicpic/16.jpeg",
						username: "我是昵称2",
						time: "13:44",
						data: "我是信息2",
						noreadnum: 14
					},
					{
						userpic: "../../static/demo/topicpic/16.jpeg",
						username: "我是昵称2",
						time: "13:44",
						data: "我是信息2",
						noreadnum: 0
					}
				]
			}
		},
		// 监听原生标题导航栏按钮事件
		onNavigationBarButtonTap(e) {
			switch (e.index) {
				case 0:
					uni.navigateTo({
						url: '../user-list/user-list',
					});
					break;
				case 1:
					this.showpopup()
					break;
			}
		},
		// 监听下拉刷新
		onPullDownRefresh() {
			this.getData()
		},
		onReachBottom() {
			this.loadMore()
		},
		methods: {
			// 下拉刷新
			getData() {
				setTimeout(() => {
					// 获取数据
					const obj = {
						userpic: "../../static/demo/topicpic/6.jpeg",
						username: "我是昵称",
						time: "16:34",
						data: "我是信息",
						noreadnum: 51
					}
					// 赋值
					this.list.unshift(obj)
					// 关闭下拉刷新
					uni.stopPullDownRefresh()
				}, 2000);
			},
			// 上拉加载更多
			loadMore(index) {
				if (this.loadtext != "上拉加载更多") {
					return;
				}
				// 修改状态
				this.loadtext = "加载中。。。"
				// 获取数据
				setTimeout(() => {
					// 获取完成
					const obj = {
						userpic: "../../static/demo/topicpic/6.jpeg",
						username: "我是昵称",
						time: "16:34",
						data: "我是信息",
						noreadnum: 51
					}
					this.list.push(obj)
					this.loadtext = "上拉加载更多"
				}, 1000)
				// this.loadtext = "没有更多数据了"
			},
			// 操作菜单
			addFrends() {
				console.log('1')
				this.hidepopup()
			},
			Qingchu() {
				console.log('2')
				this.hidepopup()
			},
			hidepopup() {
				this.isPopup = false
			},
			showpopup() {
				this.isPopup = true
			},
		}
	}
</script>

<style lang="less">
	.body {
		padding: 0 20upx;
	}

	.paper-left-popup-mask {
		position: fixed;
		right: 0;
		left: 0;
		top: 0;
		bottom: 0;
		z-index: 1999;
	}
</style>
