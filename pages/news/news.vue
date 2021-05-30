<template>
	<view>
		<!-- 自定义导航栏 -->
		<news-nav-bar :tabBars="tabBars" :tabIndex="tabIndex" @tabChange="Changetab"></news-nav-bar>
		<view class="uni-tab-bar">
			<swiper class="swiper-box" :style="{height:swiperheight + 'px'}" :current="tabIndex" @change="tabChange">
				<!-- 关注 -->
				<swiper-item>
					<scroll-view scroll-y="true" class="list" @scrolltolower="loadMore()">
						<block v-for="(item,index) in guanzhu.list" :key="index">
							<commonList :item="item" :index="index"></commonList>
						</block>
						<!-- 上拉加载 -->
						<loadMore :loadtext="guanzhu.loadtext"></loadMore>
					</scroll-view>
				</swiper-item>
				<!-- 话题 -->
				<swiper-item>
					<scroll-view scroll-y="true" class="list">
						<!-- 搜索 -->
						<view class="search-input">
							<input class="uni-input" type="text" placeholder-class="icon iconfont icon-sousuo topic-search" placeholder="搜索内容" />
						</view>
						<!-- 轮播图 -->
						<swiper class="swiper" :indicator-active-color="indicatorActiveColor" :indicator-color="indicatorColor"
						 :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
							<block v-for="(item,index) in topic.swiper" :key="index">
								<swiper-item>
									<image :src="item.src" mode="widthFix" lazy-load></image>
								</swiper-item>
							</block>
						</swiper>
						<!-- 热门分类 -->
						<topic-nav :nav="topic.nav"></topic-nav>
						<!-- 最近更新 -->
					
						<view class="topic-news">
							<view class="topic-flesh">最近更新</view>
							<block v-for="(item,index) in topic.list" :key="index">
								<topic-list :item="item" :index="index"></topic-list>
							</block>
						</view>
					</scroll-view>
				</swiper-item>
			</swiper>
		</view>
	</view>
</template>

<script>
	import commonList from '../../component/common/common-list.vue'
	import newsNavBar from '../../component/news/news-nav-bar.vue'
	import loadMore from '../../component/common/load-more.vue'
	import topicNav from '../../component/news/topic-nav.vue'
	import topicList from '../../component/news/topic-list.vue'
	export default {
		components: {
			commonList,
			newsNavBar,
			loadMore,
			topicNav,
			topicList
		},
		data() {
			return {
				indicatorColor: "#999",
				indicatorActiveColor: "#f00",
				swiperheight: 500,
				tabIndex: 0,
				tabBars: [{
						name: "关注",
						id: "guanzhu"
					},
					{
						name: "话题",
						id: "huati"
					}
				],
				guanzhu: {
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
						},
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
				},
				topic: {
					swiper: [{
							src: "../../static/demo/banner1.jpg"
						},
						{
							src: "../../static/demo/banner3.jpg"
						},
						{
							src: "../../static/demo/banner2.jpg"
						}
					],
					nav: [{
							name: "最新"
						},
						{
							name: "游戏"
						},
						{
							name: "情感"
						},
						{
							name: "打卡"
						},
						{
							name: "故事"
						},
						{
							name: "喜爱"
						}
					],
					list: [{
							titlepic: "../../static/demo/topicpic/13.jpeg",
							title: "话题名称",
							desc: "话题描述",
							totalnum: 100,
							todaynum: 50
						},
						{
							titlepic: "../../static/demo/topicpic/14.jpeg",
							title: "话题名称",
							desc: "话题描述",
							totalnum: 1000,
							todaynum: 50
						}
					]
				}
			}
		},
		methods: {
			Changetab(index) {
				this.tabIndex = index
			},
			//  current 改变时会触发 tabChange 事件
			tabChange(e) {
				this.tabIndex = e.detail.current
			},
			// 上拉加载更多
			loadMore(index) {
				if (this.guanzhu.loadtext != "上拉加载更多") {
					return;
				}
				// 修改状态
				this.guanzhu.loadtext = "加载中。。。"
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
					this.guanzhu.list.push(obj)
					this.guanzhu.loadtext = "上拉加载更多"
				}, 1000)
				// this.guanzhu.loadtext = "没有更多数据了"
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
	}
</script>

<style lang="less">
	.search-input {
		padding: 20upx;

		input {
			background-color: #f4f4f4;
			border-radius: 10upx;
		}

		.topic-search {
			display: flex;
			justify-content: center;
			font-size: 25upx;
		}
	}

	.swiper {
		/deep/.uni-swiper-wrapper {
			border-radius: 15upx;
		}

		padding: 0 20upx 20upx 20upx;

		image {
			width: 100%;

		}
	}

	.topic-news {
		padding: 20upx;
		font-size: 32upx;

		.topic-flesh {
			padding-bottom: 10upx;
		}


	}
</style>
