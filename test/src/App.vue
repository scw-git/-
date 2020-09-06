<template>
<div id="app">
    <!----<customer></customer>
    <about></about>-->

    <nav class="navbar navbar-default">
        <div class="container">
            <div>
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <router-link v-myColor to='/' class="navbar-brand" href="#">用户管理系统</router-link>
            </div>
            <div id="navbar" class="collapse navbar-collapse">
                <ul class="nav navbar-nav">
                    <li>
                        <router-link v-myColor to="/">主页</router-link>
                    </li>
                    <li>
                        <router-link v-myColor to="/about">关于我们</router-link>
                    </li>
                </ul>
                <ul class="nav navbar-nav navbar-right">
                    <li>
                        <router-link v-myColor to="/add">添加用户</router-link>
                    </li>
                </ul>
            </div>
            <!--/.nav-collapse -->
        </div>
    </nav>
    <router-view></router-view>
</div>
</template>

<script>
import Customer from './components/Customer.vue'
import About from './components/About.vue'
import Add from './components/Add.vue'

export default {
    name: 'App',
    components: {
        Customer,
        About,
        Add
    },
}
</script>

<style>
.router-lingk-exact-active {
    background: rgba(255, 255, 255, 0.8) !important;
}
</style>
