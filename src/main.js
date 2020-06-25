import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false
//Vue.prototype.$urlAPI = 'http://127.0.0.1:5000'
Vue.prototype.$urlAPI = 'https://edeciofernando.pythonanywhere.com'

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
