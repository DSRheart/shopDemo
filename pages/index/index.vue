<template>
	<view>
		<scroll-view class="content">
			<view class="home_top_bg">
				
			</view>
		</scroll-view>
		<!-- 顶部标题 -->
		<view class="home_top_title_bar">
			<view class="home_top_title_bar_content">
				<image src="/static/home_search.png"></image>
				<view class="home_top_title_bar_text">
					<text>输入商品名称</text>
				</view>
			</view>
			<view class="home_top_title_bar_message">
				<image src="/static/home_message.png"></image>
			</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
			
			}
		},
		onLoad() {

		},
		methods: {
		
		}
	}
</script>

<style lang="scss">
	.content {
		display: flex;
		flex-direction: column;
	}
	.home_top_bg{
		height: 350upx;
		width: 100%;
		background-image: linear-gradient(to right, #FF6243 , #D8083A);
	}
	.home_top_title_bar{
		width: 100%;
		height: 200upx;
		position: fixed;
		left: 0;
		top: 0;
		display: flex;
		flex-direction: row;
		padding-top: var(--status-bar-height);
		.home_top_title_bar_content{
			height: 60upx;
			width: 85%;
			image{
				width: 40upx;
				height: 40upx;
				margin-left: 20upx;
				margin-top: 13upx;
				float: left;
			}
			.home_top_title_bar_text{
				height: 60upx;
				line-height: 60upx;
				font-size: 27upx;
				color: #707070;
			}
			background-color: #FFFFFF;
			margin: 20upx;
			border-radius: 60upx;
		}
		.home_top_title_bar_message{
			height: 60upx;
			justify-content: center;
			image{
				margin-right: 25upx;
				margin-top: 20upx;
				width: 50upx;
				height:50upx;
			}
		}
	}
	
</style>
