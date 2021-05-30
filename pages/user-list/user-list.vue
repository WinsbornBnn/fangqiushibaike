<template>
	<view class="body">
		<!-- tab切换 -->
		<swiperTabHead :tabBars="tabBars" :tabIndex="tabIndex" @tabtap="tabtap" scrollStyle="border-bottom:0;"
			scrollItemStyle="width:33%;"></swiperTabHead>
		<view class="uni-tab-bar">
			<swiper class="swiper-box" :style="{height:swiperheight + 'px'}" :current="tabIndex" @change="tabChange">
				<swiper-item v-for="(items,index) in newsList" :key="index">
					<scroll-view scroll-y="true" class="list" @scrolltolower="loadMore(index)">
						<template v-if="items.list.length>0">
							<!-- 好友列表 -->
							<block v-for="(item,index1) in items.list" :key="index1">
								<userList :item="item" :index="index1"></userList>
							</block>
							<!-- 上拉加载更多 -->
							<loadMore :loadtext="items.loadtext"></loadMore>
						</template>
						<template v-else>
							<!-- 默认无数据 -->
							<noThing></noThing>
						</template>
					</scroll-view>
				</swiper-item>
			</swiper>
		</view>
	</view>
</template>

<script>
	import swiperTabHead from '../../component/index/swiper-tab-head.vue'
	import userList from '../../component/user-list/user-list.vue'
	import loadMore from '../../component/common/load-more.vue'
	import noThing from '../../component/common/no-thing.vue'
	export default {
		components: {
			swiperTabHead,
			userList,
			loadMore,
			noThing
		},
		data() {
			return {
				swiperheight: 500, // 屏幕高度
				tabIndex: 0, // 当前所在滑块的 index
				tabBars: [{
						name: "互关",
						id: "huguan",
						num: 10
					},
					{
						name: "关注",
						id: "guanzhu",
						num: 20
					},
					{
						name: "粉丝",
						id: "fensi",
						num: 30
					}
				],
				newsList: [{
						loadtext: "上拉加载更多",
						list: [{
								userpic: "../../static/demo/userpic/8.jpg",
								username: "我是昵称",
								age: 20,
								sex: 1,
								isGuanzhu: true
							},
							{
								userpic: "../../static/demo/userpic/6.jpg",
								username: "我是昵称",
								age: 20,
								sex: 0,
								isGuanzhu: false
							},
							{
								userpic: "../../static/demo/userpic/6.jpg",
								username: "我是昵称",
								age: 20,
								sex: 0,
								isGuanzhu: false
							},
							{
								userpic: "../../static/demo/userpic/6.jpg",
								username: "我是昵称",
								age: 20,
								sex: 0,
								isGuanzhu: false
							},
							{
								userpic: "../../static/demo/userpic/6.jpg",
								username: "我是昵称",
								age: 20,
								sex: 0,
								isGuanzhu: false
							},
							{
								userpic: "../../static/demo/userpic/6.jpg",
								username: "我是昵称",
								age: 20,
								sex: 0,
								isGuanzhu: false
							},
							{
								userpic: "../../static/demo/userpic/6.jpg",
								username: "我是昵称",
								age: 20,
								sex: 0,
								isGuanzhu: false
							},
							{
								userpic: "../../static/demo/userpic/6.jpg",
								username: "我是昵称",
								age: 20,
								sex: 0,
								isGuanzhu: false
							},
							{
								userpic: "../../static/demo/userpic/6.jpg",
								username: "我是昵称",
								age: 20,
								sex: 0,
								isGuanzhu: false
							}
						]
					},
					{
						loadtext: "上拉加载更多",
						list: [{
								userpic: "../../static/demo/userpic/8.jpg",
								username: "我是昵称",
								age: 20,
								sex: 1,
								isGuanzhu: true
							},
							{
								userpic: "../../static/demo/userpic/6.jpg",
								username: "我是昵称",
								age: 20,
								sex: 0,
								isGuanzhu: false
							}
						]
					},
					{
						loadtext: "上拉加载更多",
						list: [{
								userpic: "../../static/demo/userpic/8.jpg",
								username: "我是昵称",
								age: 20,
								sex: 1,
								isGuanzhu: true
							},
							{
								userpic: "../../static/demo/userpic/6.jpg",
								username: "我是昵称",
								age: 20,
								sex: 0,
								isGuanzhu: false
							}
						]
					},
				],
			}
		},
		methods: {
			// 改变当前所在滑块的 index
			tabtap(index) {
				this.tabIndex = index
			},
			//  current 改变时会触发 tabChange 事件
			tabChange(e) {
				this.tabIndex = e.detail.current
			},
			// 上拉加载更多
			loadMore(index) {
				if (this.newsList[index].loadtext != "上拉加载更多") {
					return;
				}
				// 修改状态
				this.newsList[index].loadtext = "加载中。。。"
				// 获取数据
				setTimeout(() => {
					// 获取完成
					const obj = {
								userpic: "../../static/demo/userpic/8.jpg",
								username: "我是昵称",
								age: 20,
								sex: 1,
								isGuanzhu: true
							}
					this.newsList[index].list.push(obj)
					this.newsList[index].loadtext = "上拉加载更多"
				}, 1000)
				// this.newsList[index].loadtext = "没有更多数据了"
			}
		},
		onLoad() {
			uni.getSystemInfo({
				success: (res) => {
					const height = res.windowHeight - uni.upx2px(100)
					this.swiperheight = height
				}
			});
		},
		onNavigationBarButtonTap(e) {
			if (e.index == 0) {
				uni.navigateBack({
					delta: 1
				});
			}
		}
	}
</script>

<style>
</style>
