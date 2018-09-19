import Vue from 'vue/dist/vue.js'
import App from './App.vue'
// import xesKatex from './index'
import xesKatex from '../dist/katex'

Vue.config.productionTip = false
Vue.use(xesKatex)

new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})