
class net {
	constructor() {

	}
	maxtime() {

	}
	connectWifi(phone) {
		return new Promise((resolve, reject) => {
			uni.request({
				url: 'http://172.16.18.6/a70.htm',
				method: "POST",
				header: {
					// 'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',

					// 'Accept-Encoding': 'gzip, deflate',
					// 'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8',
					// 'Cache-Control': 'max-age=0',
					// 'Connection': 'keep-alive',
					'Content-Length': '153',
					'Content-Type': 'application/x-www-form-urlencoded',
					'Host': '172.16.18.6',
					'Origin': 'http://172.16.18.6',
					'Referer': 'http://172.16.18.6/a70.htm',
					'Upgrade-Insecure-Requests': '1',
					'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.82 Safari/537.36',
				},
				data: {
					"DDDDD": phone,
					"upass": '88888',
					'R1': '0',
					'R2': '',
					'R3': '0',
					'R6': '0',
					'para': '00',
					'0MKKey': '123456',
					'buttonClicked': '',
					'redirect_url': '',
					'err_flag': '',
					'username': '',
					'password': '',
					'user': '',
					'cmd': '',
					'Login': '',
					'v6ip': ''
				},
				success(res) {
					// res.data=0
					// console.log(res)
					// console.log(JSON.stringify(res.data));
					if (res.statusCode == 200) {
						resolve(phone)
						console.log('登录完毕。。。') // 请求成功的处理逻辑
					}
					// console.log(body)
				}
			})

		})

	}
	hasNet() {
		return new Promise((resolve, reject) => {
			uni.request({
				url: "http://www.baidu.com",
				method: "GET",
				// header: {
				// 	'Content-Type': 'application/x-www-form-urlencoded',
				// },
				success(res) {
					// res.data='0'
					// console.log(decodeURI(JSON.stringify(res.data)))
					if (res.statusCode == 200 && res.data.match("百度") || false) {
						resolve()
					} else {
						// console.error('error:', error);
						reject()
					}
				}
			})
		})
	}
}
export default new net();
