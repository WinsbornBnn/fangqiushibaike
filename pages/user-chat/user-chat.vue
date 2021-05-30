<template>
	<view class="body">
		<!-- 聊天列表 -->
		<block v-for="(item,index) in list" :key="index">
			<user-chat-list :item="item" :index="index"></user-chat-list>
		</block>
		<!-- 输入框 -->
		<user-chat-bottom @submit="submit"></user-chat-bottom>
	</view>
</template>

<script>
	import userChatBottom from '../../component/user-chat/user-chat-bottom.vue'
	import userChatList from '../../component/user-chat/user-chat-list.vue'
	import time from '../../common/time.js'
	export default {
		components: {
			userChatBottom,
			userChatList
		},
		data() {
			return {
				list: []
			}
		},
		methods: {
			submit(data) {
				console.log(data)
			},
			// 获取聊天数据
			getData() {
				// 模拟数据
				let arr = [{
						isMe: false, //我发的true，好友发的是false
						userpic: "../../static/demo/topicpic/9.jpeg",
						type: "text", //img 表情
						data: "来看骚操作，你是不是傻，哈哈哈哈哈哈哈哈哈",
						time: "1555146414"
					},
					{
						isMe: true,
						userpic: "../../static/demo/topicpic/8.jpeg",
						type: "img",
						data: "../../static/demo/datapic/1.jpg",
						time: "1555146520"
					}

				]
				arr.forEach((item, index) => {
					arr[index].gstime = time.gettime.getChatTime(arr[index].time, index > 0 ? arr[index - 1].time :
						0)
				})
				this.list = arr
			}
		},
		onLoad() {
			this.getData()
		}
	}
</script>

<style>
	.body{
		padding: 0 20upx;
	}
</style>
