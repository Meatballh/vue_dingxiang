import Vue from 'vue'
import App from './App.vue'
import router from './router'

//2.引入公告的初始化文件
import '@/assets/css/reset.css'
//引入js适配方案
import '@/assets/js/phone.js'
//引入vant
import './plugins/vant'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
