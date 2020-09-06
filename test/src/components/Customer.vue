<template>
<div class="Customer container">
    <alert v-if='alert' :message='alert'></alert>
    <h1 v-myColor class='page-header'>用户管理 </h1>
    <input type='text' class="form-control" placeholder="search name or phone number" v-model='searchValue'>
    <table class="table">
        <thead>
            <tr>
                <th v-myColor>姓名</th>
                <th v-myColor>电话</th>
                <th v-myColor>邮箱</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            <tr v-for='(item,index) in searchCustomer' :key="index">
                <td v-myColor>{{item.name}}</td>
                <td v-myColor>{{item.phone}}</td>
                <td v-myColor>{{item.email}}</td>
                <td>
                    <router-link class="btn btn-primary" :to="/Customer/ + item.id ">详情</router-link>
                </td>
            </tr>
        </tbody>
    </table>
</div>
</template>

<script>
import Alert from './Alert.vue'

export default {
    components: {
        Alert
    },
    data() {
        return {
            customer: [],
            alert: '',
            searchValue: ''

        }
    },
    methods: {
        getData: function () {
            this.axios.get("  http://localhost:3000/users")
                .then((res) => {
                    this.customer = res.data
                    // console.log(this.customer);
                })
        }
    },
    created() {
        this.alert = this.$route.query.alert;
        this.getData()
    },
    computed: {
        searchCustomer: function () {
            return this.customer.filter((res) => {
                // let reg = new RegExp('xxx')
                let reg = /^\d+$/; //印证是否输入为数字
                if (reg.test(this.searchValue)) { //如果是数字，就匹配手机号码
                    return res.phone.match(this.searchValue)
                } else {
                    return res.name.match(this.searchValue)
                }

            })
        }
    }
}
</script>

<style scoped>
input {
    margin-bottom: 20px;
}
</style>
