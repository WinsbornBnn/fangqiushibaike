<template>
	<view class="uni-tab-bar">
		<scroll-view scroll-x="true" class="uni-swiper-tab" :style="scrollStyle">
			<block v-for="(tab,index) in tabBars" :key="tab.id">
				<view class=" swiper-tab-list" :style="scrollItemStyle"
			 :class=" {'active':tabIndex==index}" @tap=tabtap(index)>
					{{tab.name}} {{tab.num?tab.num:''}}
					<view class="swiper-tab-line"></view>
				</view>
			</block>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		props: {
			tabBars: {
				type: Array,
				required: true
			},
			tabIndex: {
				type: Number,
				required: true
			},
			scrollStyle: {
				type: String,
				default: ""
			},
			scrollItemStyle: {
				type: String,
				default: ""
			}
		},
		methods: {
			// 改变当前所在滑块的 index
			tabtap(index) {
				this.$emit('tabtap', index)
			}
		}
	}
</script>

<style>
	.uni-swiper-tab {
		border-bottom: 1upx solid #eee;
	}

	.swiper-tab-list {
		color: #969696;
		font-weight: bold;
	}

	.uni-swiper-tab .active {
		color: #343434;
	}

	.active .swiper-tab-line {
		border-bottom: 6upx solid #fede33;
		width: 70upx;
		margin: auto;
		border-top: 6upx solid #fede33;
		border-radius: 20upx;
	}
</style>
