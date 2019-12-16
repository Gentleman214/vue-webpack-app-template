import Vue from 'vue'
import VueRouter from 'vue-router'
import app from './app.vue'
import router from './router.js'
import './static/css/index.css'

Vue.use(VueRouter)

var vm = new Vue({
    el: '#app',
    router,
    render: p => p(app)
})