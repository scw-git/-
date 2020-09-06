<template>
<div class="container">
    <router-link to='/' ><span class='iconfont icon-back'> 返回</span></router-link>
    <h1 v-myColor>修改用户</h1>
    <!-- 不写submit，系统也会添加。现在写了，就是调用自己写的方法 -->
    <form @submit='update'>
        <div class='well '>
            <h4 v-myColor>用户信息</h4>
            <div class='form-group'>
                <label v-myColor>姓名</label>
                <!-- customer.name是动态添加对象属性。name是key值，input是value值 -->
                <input type='text' required class="form-control" placeholder='name' v-model='customer.name'>
            </div>
            <div class='form-group'>
                <label v-myColor>电话</label>
                <input type='number' required class="form-control" placeholder='phone' v-model='customer.phone'>
            </div>
            <div class='form-group'>
                <label v-myColor>邮箱</label>
                <input type='email' class="form-control" placeholder='email' v-model='customer.email'>
            </div>
            <div class='form-group'>
                <label v-myColor>年龄</label>
                <input type='number' class="form-control" placeholder='age' v-model='customer.age'>
            </div>
            <div class='form-group'>
                <label v-myColor>学校</label>
                <input type='text' class="form-control" placeholder='school' v-model='customer.school'>
            </div>
            <div class='form-group'>
                <label v-myColor>个人简介</label>
                <textarea rows='10' class="form-control" placeholder='profile' v-model='customer.profile'></textarea>
            </div>
            <div class="flex"><button type="submit" class="btn btn-primary btn-lg">修改</button></div>
        </div>
    </form>
</div>
</template>

<script>
    export default {
        data() {
            return {
                customer: {},
            }
        },
        methods: { //修改内容
            update: function(e) {
                this.axios.put("http://localhost:3000/users/" + this.$route.params.id, this.customer)
                    .then((res) => {
                        this.$router.push({
                            path: '/',
                            query: {
                                alert: '修改成功'
                            }
                        });
                    })
                    // 必须要加阻止默认的事件
                e.preventDefault();

            }
        },
        created() { //回显数据
            this.axios.get("http://localhost:3000/users/" + this.$route.params.id)
                .then((res) => {
                    this.customer = res.data
                })
        }
    }
</script>

<style scoped>
    .flex {
        /* width: 100%; */
        display: flex;
        justify-content: center;
    }
    
    h1 {
        text-align: center;
    }
    
    a {
        text-decoration: none;
    }
</style>