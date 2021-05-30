<template>
	<view>
		<!-- 话题介绍 -->
		<topicInfo :topicInfo="topicInfo"></topicInfo>
		<!-- tabbar切换 -->
		<swiperTabHead :tabBars="tabBars" :tabIndex="tabIndex" @tabtap="tabtap" scrollStyle="border-bottom:0;"
		 scrollItemStyle="width:50%;"></swiperTabHead>
		<!-- 列表 -->
		<view class="topic-detail-list">
			<block v-for="(item,index) in tablist" :key="index">
				<template v-if="tabIndex==index">
<!-- 列表 -->
					<block v-for="(list,listindex) in item.list" :key="listindex">
						<commonList :item="list" :index="listindex"></commonList>
					</block>
					<!-- 上拉加载 -->
					<loadMore :loadtext="item.loadtext"></loadMore>
				</template>
			</block>
		</view>
	</view>
</template>

<script>
	import commonList from '../../component/common/common-list.vue'
	import swiperTabHead from '../../component/index/swiper-tab-head.vue'
	import topicInfo from '../../component/topic/topic-info.vue'
	import loadMore from '../../component/common/load-more.vue'
	export default {
		components: {
			topicInfo,
			swiperTabHead,
			commonList,
			loadMore
		},
		data() {
			return {
				tabIndex: 0, // 当前所在滑块的 index
				tabBars: [{
						name: "默认",
						id: "moren"
					},
					{
						name: "最新",
						id: "zuixin"
					}
				],
				tablist: [{
						loadtext: "上拉加载更多",
						list: [
							// 文字
							{
								userpic: "../../static/demo/userpic/14.jpg",
								username: "昵称",
								sex: 1, // 0 男 1女
								age: 25,
								isGuanzhu: true,
								title: "这是一个寂寞的天，下着有些伤心的雪",
								titlepic: "",
								video: false,
								share: false,
								path: "成都 武侯",
								sharenum: 64, // 转发数
								commentnum: 128, // 评论数
								goodnum: 200, // 点赞数
							},
							// 图文
							{
								userpic: "../../static/demo/userpic/14.jpg",
								username: "昵称",
								sex: 0, // 0 男 1女
								age: 25,
								isGuanzhu: true,
								title: "这是一个寂寞的天，下着有些伤心的雪",
								titlepic: "../../static/demo/datapic/15.jpg",
								video: false,
								share: false,
								path: "成都 武侯",
								sharenum: 64, // 转发数
								commentnum: 128, // 评论数
								goodnum: 200, // 点赞数
							}
						]
					},
					{
						loadtext: "上拉加载更多",
						list: [
							// 视频
							{
								userpic: "../../static/demo/userpic/14.jpg",
								username: "昵称",
								sex: 0, // 0 男 1女
								age: 25,
								isGuanzhu: true,
								title: "这是一个寂寞的天，下着有些伤心的雪",
								titlepic: "../../static/demo/datapic/15.jpg",
								video: {
									looknum: "20w",
									time: "8:45"
								},
								share: false,
								path: "成都 武侯",
								sharenum: 64, // 转发数
								commentnum: 128, // 评论数
								goodnum: 200, // 点赞数
							},
							// 分享
							{
								userpic: "../../static/demo/userpic/14.jpg",
								username: "昵称",
								sex: 1, // 0 男 1女
								age: 25,
								isGuanzhu: true,
								title: "这是一个寂寞的天，下着有些伤心的雪",
								titlepic: "",
								video: false,
								share: {
									title: "我是你用来分享的标题",
									titlepic: "../../static/demo/datapic/1.jpg"
								},
								path: "成都 武侯",
								sharenum: 64, // 转发数
								commentnum: 128, // 评论数
								goodnum: 200, // 点赞数
							}
						]
					}
				],
				topicInfo: {
					titlepic: "../../static/demo/topicpic/13.jpeg",
					title: "话题标题",
					desc: "话题描述",
					totalnum: 1000,
					todaynum: 500
				}
			}
		},
		methods: {
			// 下拉刷新
			getData(){
				setTimeout(()=> {
					// 获取数据
					const array = 
						// 分享
						{
							userpic: "../../static/demo/userpic/14.jpg",
							username: "刷新昵称",
							sex: 1, // 0 男 1女
							age: 25,
							isGuanzhu: true,
							title: "这是一个寂寞的天，下着有些伤心的雪",
							titlepic: "",
							video: false,
							share: {
								title: "我是你用来刷新的标题",
								titlepic: "../../static/demo/datapic/1.jpg"
							},
							path: "成都 武侯",
							sharenum: 64, // 转发数
							commentnum: 128, // 评论数
							goodnum: 200, // 点赞数
						}
					// 赋值
					this.tablist[this.tabIndex].list.unshift(array)
					// 关闭下拉刷新
					uni.stopPullDownRefresh()
				}, 2000);
			},
			// 上拉加载
			loadMore(index) {
				if (this.tablist[this.tabIndex].loadtext != "上拉加载更多") {
					return;
				}
				// 修改状态
				this.tablist[this.tabIndex].loadtext = "加载中。。。"
				// 获取数据
				setTimeout(() => {
					// 获取完成
					const obj = {
						userpic: "../../static/demo/userpic/14.jpg",
						username: "昵称",
						sex: 1, // 0 男 1女
						age: 25,
						isGuanzhu: true,
						title: "这是一个寂寞的天，下着有些伤心的雪",
						titlepic: "../../static/demo/datapic/15.jpg",
						video: false,
						share: false,
						path: "成都 武侯",
						sharenum: 64, // 转发数
						commentnum: 128, // 评论数
						goodnum: 200, // 点赞数
					}
					this.tablist[this.tabIndex].list.push(obj)
					this.tablist[this.tabIndex].loadtext = "上拉加载更多"
				}, 1000)
				// this.tablist[this.tabIndex].loadtext = "没有更多数据了"
			},
			// 改变当前所在滑块的 index
			tabtap(index) {
				this.tabIndex = index
			}
		},
		// 上拉触底
		onReachBottom() {
			// 上拉加载
			this.loadMore()
		},
		// 下拉刷新
		onPullDownRefresh() {
			this.getData()
		}
	}
</script>

<style lang="less">

</style>
