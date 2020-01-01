import VueRouter from 'vue-router'
import home from './components/tabs/home.vue'
import member from './components/tabs/member.vue'
import cart from './components/tabs/cart.vue'
import search from './components/tabs/search.vue'


var router = new VueRouter({
  routes:[
    { path:'/', redirect: 'home' },
    { path:'/home', component: home },
    { path:'/member', component: member },
    { path:'/cart', component: cart },
    { path:'/search', component: search }
    ],
  linkActiveClass:'mui-active'
})

export default router //导出路由模块
