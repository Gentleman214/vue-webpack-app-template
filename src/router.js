import VueRouter from 'vue-router'
import login from './components/login.vue'
import register from './components/register.vue'

var router = new VueRouter({
    routes:[
        { path:'/login', component: login },
        { path:'/register', component: register }
    ]
})

export default router //导出路由模块