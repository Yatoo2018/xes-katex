import Vue from 'vue/dist/vue.js'
import App from './App.vue'
import xesKatex from './index'
// import xesKatex from '../dist/katex'
// import '../dist/katex.css'

Vue.config.productionTip = false
Vue.use(xesKatex,{flag:'$$'})

new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})