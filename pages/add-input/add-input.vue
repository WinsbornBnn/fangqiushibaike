<template>
	<view>
		<!-- 自定义导航栏 -->
		<uni-nav-bar :statusBar="true" left-icon="arrowleft" rightText="发布" @clickLeft="back" @clickRight="submit">
				<view class="u-f-ac" @click="changelook">
					{{secret}}
					<view class="icon iconfont icon-xialazhankai"></view>
				</view>
		</uni-nav-bar>
		<!-- 多行输入框 -->
		<view class="uni-textarea">
			<textarea v-model="text" placeholder="说一句话吧~" />
			</view>
		<!-- 上传多图并预览 -->
		<upload-images @upload="upload"></upload-images>
		<!-- 弹出公告 -->
		<uni-popup ref="popupDialog" @hidePopup="hidePopup">
			<view class="popup-content">
				<view class="u-f-ajc">
					<image src="../../static/common/addinput.png" mode="widthFix"></image>
				</view>
				<view>1、涉及黄色，政治，广告及骚扰信息</view>
				<view>2、涉及人身攻击</view>
				<view>3、留联系方式，透露他人隐私</view>
				<view>一经核实将被封禁，情节严重者永久封禁</view>
				<button hover-class="none" type="default" @click="hidePopup">朕知道了</button>
			</view>
		</uni-popup>
	</view>
</template>

<script>
	import uniNavBar from '../../components/uni-nav-bar/uni-nav-bar.vue'
	import uploadImages from '../../component/common/upload-images.vue'
	import uniPopup from '../../components/uni-popup/uni-popup.vue'
	export default {
		components: {
			uniNavBar,
			uploadImages,
			uniPopup
		},
		data() {
			return {
				isget:false,
				secret: "所有人可见",
				text:"",
				imagelist:[]
			}
		},
		onBackPress() {
			// 判断用户是否有输入内容
			if(!this.text && this.imagelist.length < 1){ return ; }
			if(!this.isget){
			this.save()
			return true;
			}
		},
		onReady() {
			this.showDialog()
		},
		methods: {
			// 是否保存草稿
			save(){
				uni.showModal({
					content:"是否要保存为草稿",
					cancelText:"不保存",
					confirmText:"保存",
					success: res => {
						if(res.cancel){
							console.log('不保存')
						}else{
							console.log('保存')
						}
						this.isget = true
						uni.navigateBack({
							delta:1
						})
					}
				})
			},
			// 返回上一级
			back() {
				uni.navigateBack({
					delta: 1
				})
			},
			// 发布事件
			submit() {
				console.log('发布')
			},
			// 修改可见隐私
			changelook() {
				const itemList = ['所有人可见', '仅自己可见']
				uni.showActionSheet({
					itemList,
					success: (res) => {
						this.secret = itemList[res.tapIndex]
					}
				});
			},
			// 上传图片
			upload(arr) {
				this.imagelist = arr
			},
			// 隐藏弹出层
			hidePopup(){
				this.$refs.popupDialog.close()
			},
			// 显示弹出层
			showDialog(){
				this.$refs.popupDialog.open()
			}
		}
	}
</script>

<style lang="less">
	/* .uni-navbar__header-container,.uni-navbar__content_view{
		display: flex;
		justify-content: center;
		align-items: center;
	} */
	.uni-textarea{
		border: 1upx solid #eee;
	}
	.popup-content {
		background-color: #fff;
		padding: 15px;
		border-radius: 10upx;
		image{
			width: 75%;
			margin-bottom: 20upx;
		}
		button{
			margin-top: 20upx;
			background-color: #ffe934;
			color: #171610;
			-webkit-tap-highlight-color: transparent;
		}
		.button::after{
			border: none;
			background-color: none;
		}
	}
</style>
