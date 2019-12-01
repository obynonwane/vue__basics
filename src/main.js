import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(VueRouter)
Vue.use(BootstrapVue)

Vue.filter('snippet', val => {
  if(!val || typeof(val) != 'string') return ''
  val = val.slice(0,50)
  return val
})


Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
