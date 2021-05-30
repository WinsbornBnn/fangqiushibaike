const baseUrl = 'http://192.168.2.112:8080/swsp'   
const request = (url = '', params = {}, type = 'GET') => {
    return new Promise((resolve, reject) => {
        uni.request({
            method: type,
            url: baseUrl + url,
            data: params,
            header: {
				'X-Access-Token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2MjE0MDY3MjQsInVzZXJuYW1lIjoiYWRtaW4ifQ.rON6yio2IkpJ64ouLbao-1jjjWp6fj6-i5yhkGvBzWg',
				'Content-Type': 'application/json;charset=UTF-8'
			},
            dataType: 'json',         
        }).then((response) => {
            setTimeout(function() {
                uni.hideLoading();
            }, 200);
            let [error, res] = response;        
            resolve(res.data);
        }).catch(error => {
            let [err, res] = error;
            reject(err)
        })
    });
}
export default request