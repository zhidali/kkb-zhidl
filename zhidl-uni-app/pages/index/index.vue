<template>
	<view class="content">
		<view class="view">文字</view>
		<image class="logo" src="/static/logo.png"></image>
		<view class="text-area">
			<text class="title">{{title}}</text>
		</view>
		<abc />
	</view>
</template>

<script>
	const app = getApp();
	import abc from '@/components/abc/abc.vue';
	export default {
		components:{
			abc
		},
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {
			console.log(app.globalData, this.$scope);
		},
		methods: {
			aa() {

			}
		}
	}
</script>

<style lang="less">
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;

		.view {
			color: red;
		}
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
