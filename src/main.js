import Vue from 'vue'
import App from './App.vue'
import router from './router'  //'./router/index.js' 인데 생략 가능
import store from './store'

import axios from './apis/axiosConfig';

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
