import Vue from 'vue'
import VueRouter from 'vue-router'
import app from './App.vue'
import router from './router.js'
import VueResource from 'vue-resource'
import './static/css/index.css'
import './static/lib/MUI/css/mui.min.css'
import './static/lib/MUI/css/icons-extra.css'
import { Header, Swipe, SwipeItem } from 'mint-ui'

Vue.use(VueRouter).use(VueResource)
Vue.component(Header.name,Header)
Vue.component(Swipe.name,Swipe)
Vue.component(SwipeItem.name,SwipeItem)

var vm = new Vue({
  el: '#app',
  router,
  render: p => p(app)
})
