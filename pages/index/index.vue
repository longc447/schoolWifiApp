<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view class="text-area">
			<text class="title">{{`${netState?'有网':'没网'} 账号：${title} 登录时间：${time}`}}</text>
		</view>
	</view>
</template>

<script>
	import net from '../../lib/net.js'
	import log from '../../lib/log.js'
	import phone from '../../lib/phone.js'
	export default {
		data() {
			return {
				title: '不是通过本软件或上次登录的账号',
				time:'',
				netState:false
			}
		},
		onLoad() {
			setInterval(() => {
				net.hasNet()
					.then(res => {
						this.netState=true;
						this.time=new Date().toString();
					}).catch(err => {
						let p = phone.get()
						// log.set(p)
						this.title=p;
						net.connectWifi(p).then(phone=>{
							this.title=phone+"";
						})
					})
			}, 2000);
		},
		methods: {

		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
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
