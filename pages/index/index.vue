<template>
	<view>
		<!-- 滑动tab导航 -->

		<swiperTabHead :tabBars="tabBars" :tabIndex="tabIndex" @tabtap="tabtap"></swiperTabHead>
		<!-- 图文，视频列表 -->
		<view class="uni-tab-bar">
			<swiper class="swiper-box" :style="{height:swiperheight + 'px'}" :current="tabIndex" @change="tabChange">
				<swiper-item v-for="(items,index) in newsList" :key="index">
					<scroll-view scroll-y="true" class="list" @scrolltolower="loadMore(index)">
						<template v-if="items.list.length>0">
							<!-- 图文，视频列表 -->
							<block v-for="(item,index1) in items.list" :key="index1">
								<indexList :item="item" :index="index1"></indexList>
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
	import indexList from '../../component/index/index-list.vue'
	import swiperTabHead from '../../component/index/swiper-tab-head.vue'
	import loadMore from '../../component/common/load-more.vue'
	import noThing from '../../component/common/no-thing.vue'
	export default {
		components: {
			indexList,
			swiperTabHead,
			loadMore,
			noThing
		},
		data() {
			return {
				one: 0,
				swiperheight: 500, // 屏幕高度
				tabIndex: 0, // 当前所在滑块的 index
				tabBars: [{
						name: "关注",
						id: "guanzhu"
					},
					{
						name: "推荐",
						id: "tuijian"
					},
					{
						name: "体育",
						id: "tiyu"
					},
					{
						name: "热点",
						id: "redian"
					},
					{
						name: "财经",
						id: "caijing"
					},
					{
						name: "娱乐",
						id: "yule"
					},
				],
				newsList: [{
					loadtext: "上拉加载更多",
					list: [{
							userpic: "../../static/demo/userpic/12.jpg",
							username: "昵称",
							isGuanzhu: true,
							title: "我是标题",
							type: "video", //img:图文，video:视频;
							titlepic: "../../static/demo/datapic/27.jpg",
							playnum: "20w",
							long: "2:47",
							infonum: {
								index: 1, //0:没有操作,1:顶,2:踩;
								dingnum: 11,
								cainum: 11,
							},
							commentnum: 10,
							sharenum: 10
						},
						{
							userpic: "../../static/demo/userpic/12.jpg",
							username: "昵称",
							isGuanzhu: true,
							title: "我是标题",
							type: "img", //img:图文，video:视频;
							titlepic: "../../static/demo/datapic/27.jpg",
							playnum: "20w",
							long: "2:47",
							infonum: {
								index: 2, //0:没有操作,1:顶,2:踩;
								dingnum: 11,
								cainum: 11,
							},
							commentnum: 10,
							sharenum: 10
						}
					]
				}, {
					loadtext: "上拉加载更多",
					list: [{
							userpic: "../../static/demo/userpic/12.jpg",
							username: "昵称",
							isGuanzhu: true,
							title: "我是标题",
							type: "video", //img:图文，video:视频;
							titlepic: "../../static/demo/datapic/27.jpg",
							playnum: "20w",
							long: "2:47",
							infonum: {
								index: 1, //0:没有操作,1:顶,2:踩;
								dingnum: 11,
								cainum: 11,
							},
							commentnum: 10,
							sharenum: 10
						},
						{
							userpic: "../../static/demo/userpic/12.jpg",
							username: "昵称",
							isGuanzhu: true,
							title: "我是标题",
							type: "img", //img:图文，video:视频;
							titlepic: "../../static/demo/datapic/27.jpg",
							playnum: "20w",
							long: "2:47",
							infonum: {
								index: 2, //0:没有操作,1:顶,2:踩;
								dingnum: 11,
								cainum: 11,
							},
							commentnum: 10,
							sharenum: 10
						}, {
							userpic: "../../static/demo/userpic/12.jpg",
							username: "昵称",
							isGuanzhu: true,
							title: "我是标题",
							type: "video", //img:图文，video:视频;
							titlepic: "../../static/demo/datapic/27.jpg",
							playnum: "20w",
							long: "2:47",
							infonum: {
								index: 1, //0:没有操作,1:顶,2:踩;
								dingnum: 11,
								cainum: 11,
							},
							commentnum: 10,
							sharenum: 10
						},
						{
							userpic: "../../static/demo/userpic/12.jpg",
							username: "昵称",
							isGuanzhu: true,
							title: "我是标题",
							type: "img", //img:图文，video:视频;
							titlepic: "../../static/demo/datapic/27.jpg",
							playnum: "20w",
							long: "2:47",
							infonum: {
								index: 2, //0:没有操作,1:顶,2:踩;
								dingnum: 11,
								cainum: 11,
							},
							commentnum: 10,
							sharenum: 10
						}
					]
				}, {
					loadtext: "上拉加载更多",
					list: [{
							userpic: "../../static/demo/userpic/12.jpg",
							username: "昵称",
							isGuanzhu: true,
							title: "我是标题",
							type: "video", //img:图文，video:视频;
							titlepic: "../../static/demo/datapic/27.jpg",
							playnum: "20w",
							long: "2:47",
							infonum: {
								index: 1, //0:没有操作,1:顶,2:踩;
								dingnum: 11,
								cainum: 11,
							},
							commentnum: 10,
							sharenum: 10
						},
						{
							userpic: "../../static/demo/userpic/12.jpg",
							username: "昵称",
							isGuanzhu: true,
							title: "我是标题",
							type: "img", //img:图文，video:视频;
							titlepic: "../../static/demo/datapic/27.jpg",
							playnum: "20w",
							long: "2:47",
							infonum: {
								index: 2, //0:没有操作,1:顶,2:踩;
								dingnum: 11,
								cainum: 11,
							},
							commentnum: 10,
							sharenum: 10
						}, {
							userpic: "../../static/demo/userpic/12.jpg",
							username: "昵称",
							isGuanzhu: true,
							title: "我是标题",
							type: "video", //img:图文，video:视频;
							titlepic: "../../static/demo/datapic/27.jpg",
							playnum: "20w",
							long: "2:47",
							infonum: {
								index: 1, //0:没有操作,1:顶,2:踩;
								dingnum: 11,
								cainum: 11,
							},
							commentnum: 10,
							sharenum: 10
						},
						{
							userpic: "../../static/demo/userpic/12.jpg",
							username: "昵称",
							isGuanzhu: true,
							title: "我是标题",
							type: "img", //img:图文，video:视频;
							titlepic: "../../static/demo/datapic/27.jpg",
							playnum: "20w",
							long: "2:47",
							infonum: {
								index: 2, //0:没有操作,1:顶,2:踩;
								dingnum: 11,
								cainum: 11,
							},
							commentnum: 10,
							sharenum: 10
						}, {
							userpic: "../../static/demo/userpic/12.jpg",
							username: "昵称",
							isGuanzhu: true,
							title: "我是标题",
							type: "video", //img:图文，video:视频;
							titlepic: "../../static/demo/datapic/27.jpg",
							playnum: "20w",
							long: "2:47",
							infonum: {
								index: 1, //0:没有操作,1:顶,2:踩;
								dingnum: 11,
								cainum: 11,
							},
							commentnum: 10,
							sharenum: 10
						},
						{
							userpic: "../../static/demo/userpic/12.jpg",
							username: "昵称",
							isGuanzhu: true,
							title: "我是标题",
							type: "img", //img:图文，video:视频;
							titlepic: "../../static/demo/datapic/27.jpg",
							playnum: "20w",
							long: "2:47",
							infonum: {
								index: 2, //0:没有操作,1:顶,2:踩;
								dingnum: 11,
								cainum: 11,
							},
							commentnum: 10,
							sharenum: 10
						}
					]
				}, {
					loadtext: "上拉加载更多",
					list: []
				}, {
					loadtext: "上拉加载更多",
					list: []
				}, {
					loadtext: "上拉加载更多",
					list: []
				}],
			}
		},
		methods: {
			getList() {
				this.$http('/industrialEnterprise/industrialEnterprise/list', {
				// 传参参数名：参数值,如果没有，就不需要传
				}).then(res => {
				// 打印调用成功回调
				console.log(res)
				})
			},
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
						userpic: "../../static/demo/userpic/12.jpg",
						username: "昵称",
						isGuanzhu: true,
						title: "我是标题",
						type: "video", //img:图文，video:视频;
						titlepic: "../../static/demo/datapic/27.jpg",
						playnum: "20w",
						long: "2:47",
						infonum: {
							index: 1, //0:没有操作,1:顶,2:踩;
							dingnum: 11,
							cainum: 11,
						},
						commentnum: 10,
						sharenum: 10
					}
					this.newsList[index].list.push(obj)
					this.newsList[index].loadtext = "上拉加载更多"
				}, 1000)
				// this.newsList[index].loadtext = "没有更多数据了"
			}
		},
		onLoad() {
			this.getList()
			uni.getSystemInfo({
				success: (res) => {
					const height = res.windowHeight - uni.upx2px(100)
					this.swiperheight = height
				}
			});
		},
		// 监听搜索框点击事件
		onNavigationBarSearchInputClicked() {
			uni.navigateTo({
				url: '../search/search'
			})
		},
		// 原生导航按钮点击事件
		onNavigationBarButtonTap(e) {
			switch (e.index) {
				case 1:
					// 打开发布页面
					uni.navigateTo({
						url: '../add-input/add-input'
					});
					break;
			}
		}
	}
</script>

<style>

</style>
