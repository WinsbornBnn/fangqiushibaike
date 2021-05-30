<template>
	<view>
		<!-- 滑动tab导航 -->
		<swiperTabHead :tabBars="tabBars" :tabIndex="tabIndex" @tabtap="tabtap"></swiperTabHead>
		<view class="uni-tab-bar">
			<swiper class="swiper-box" :style="{height:swiperheight + 'px'}" :current="tabIndex" @change="tabChange">
				<swiper-item v-for="(items,index) in newsList" :key="index">
					<scroll-view scroll-y="true" class="list" @scrolltolower="loadMore(index)">
						<template v-if="items.list.length>0">
							<!-- 话题列表 -->
							<block v-for="(item,index1) in items.list" :key="index1">
								<view class="topic-view">
									<topic-list :item="item" :index="index1"></topic-list>
								</view>
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
	import noThing from '../../component/common/no-thing.vue'
	import loadMore from '../../component/common/load-more.vue'
	import topicList from '../../component/news/topic-list.vue'
	export default {
		components: {
			swiperTabHead,
			noThing,
			loadMore,
			topicList
		},
		data() {
			return {
				swiperheight: 500,
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
							},
							{
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
								},
								{
									titlepic: "../../static/demo/topicpic/14.jpeg",
									title: "话题名称",
									desc: "话题描述",
									totalnum: 1000,
									todaynum: 50
								},
								{
									titlepic: "../../static/demo/topicpic/14.jpeg",
									title: "话题名称",
									desc: "话题描述",
									totalnum: 1000,
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
					}, {
						loadtext: "上拉加载更多",
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
					}, {
						loadtext: "上拉加载更多",
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
					},
					{
						loadtext: "上拉加载更多",
						list: []
					}, {
						loadtext: "上拉加载更多",
						list: []
					}, {
						loadtext: "上拉加载更多",
						list: []
					}
				],
			}
		},
		methods: {
			//  current 改变时会触发 tabChange 事件
			tabChange(e) {
				this.tabIndex = e.detail.current
			},
			// 改变当前所在滑块的 index
			tabtap(index) {
				this.tabIndex = index
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
								titlepic: "../../static/demo/topicpic/13.jpeg",
								title: "话题名称",
								desc: "话题描述",
								totalnum: 100,
								todaynum: 50
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
		}
	}
</script>

<style>
.topic-view{
	padding-left: 20upx;
}
</style>
