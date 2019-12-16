import Vue from 'vue'
import VueRouter from 'vue-router'
import app from './App.vue'
import router from './router.js'
import './static/css/index.css'
import './static/lib/MUI/css/mui.min.css'
import './static/lib/MUI/css/icons-extra.css'
import { Header } from 'mint-ui'

Vue.use(VueRouter)
Vue.component(Header.name,Header)

var vm = new Vue({
  el: '#app',
  router,
  render: p => p(app)
})
