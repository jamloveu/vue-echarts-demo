import Vue from 'vue'
import App from './App.vue'

//引入echart
import echarts from 'echarts'
Vue.prototype.$echarts = echarts 

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
