import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Customer from './components/Customer'
import CustomerDetail from './components/CustomerDetail'
import Edit from './components/Edit'
import Add from './components/Add'
import About from './components/About'
import Axios from 'axios'

Vue.prototype.axios = Axios
Vue.config.productionTip = false
Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    routes: [
        { path: '/', component: Customer },
        { path: '/about', component: About },
        { path: '/add', component: Add },
        { path: '/Customer/:id', component: CustomerDetail },
        { path: '/edit/:id', component: Edit },
    ]
})

// 全局注册指令
Vue.directive('myColor', {
    bind(el, binding, vnode) {
        el.style.color = '#' + Math.random().toString(16).slice(2, 8)
    }
})

new Vue({ //页面的入口
    render: h => h(App),
    router: router,
}).$mount('#app')