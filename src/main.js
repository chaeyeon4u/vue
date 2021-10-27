import Vue from 'vue'
import App from './App.vue'
import router from './router'  //'./router/index.js' 인데 생략 가능..!

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
