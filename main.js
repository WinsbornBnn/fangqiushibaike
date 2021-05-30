import Vue from 'vue'
import App from './App'

import request from 'common/config.js'
Vue.prototype.$http = request
console.log(request)

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
	...App
})
app.$mount()
