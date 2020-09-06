<template>
<div class="CustomerDetail container">
    <router-link to="/"><span class='iconfont icon-back '> 返回</span></router-link>
    <h1 v-myColor class="page-header">
        {{data.name}}
        <button class="btn btn-warning pull-right " @click="deleteCustomer(data.id)">删除</button>
        <router-link :to='/edit/ + data.id' class="btn btn-primary pull-right jg ">编辑</router-link>
    </h1>
    <ul class="list-group">
        <li class="list-group-item">
            <span v-myColor class="glyphicon glyphicon-earphone jg"></span>
            {{ data.phone}}
            <span class="badge red">new</span>
        </li>
        <li class="list-group-item">
            <span v-myColor class="glyphicon glyphicon-envelope jg"></span>
            {{ data.email}}
        </li>
    </ul>

    <ul class="list-group">
        <li class="list-group-item">
            <span v-myColor class="iconfont icon-age jg "></span>
            {{data.age}}岁
        </li>
        <li class="list-group-item">
            <span v-myColor class="iconfont icon-school jg "></span>
            {{data.school}}
        </li>
        <li class="list-group-item">
            <span v-myColor class="iconfont icon-PROFILE jg "></span>
            {{data.profile}}
        </li>
    </ul>
</div>
</template>

<script>
    export default {
        name: 'CustomerDetail',
        data() {
            return {
                data: {}
            }
        },

        methods: {
            deleteCustomer: function(id) {
                prompt('ok');
                this.axios.delete("http://localhost:3000/users/" + id)
                    .then((res) => {
                        this.$router.push({ //路由跳转，并且可以携带参数
                            path: "/",
                            query: {
                                alert: "删除成功"
                            }
                        })
                    })
            }
        },
        created() {
            // this.getData(this.$route.params.id);
            this.axios.get('http://localhost:3000/users/' + this.$route.params.id) //获取路由参数
                .then((res) => {
                    this.data = res.data;
                });
        },
        // 局部注册指令
        // directives: {
        //     "myColor": {
        //         bind(el, binding, vnode) {
        //             el.style.color = '#' + Math.random().toString().slice(2, 8);
        //         }
        //     }
        // }
    }
</script>

<style scoped>
    .jg {
        margin-right: 15px;
    }
    
    .red {
        background-color: red;
    }
    
    a {
        text-decoration: none;
    }
</style>