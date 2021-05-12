import Vue from 'vue'
import App from './App.vue'

// 产品构建的时候现实提示信息
// 在开发阶段不需要现显示提示信息
// 在发布项目的时候可以打开
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
