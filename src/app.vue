<template>
    <div class="container">
        <span class="text">*由于2020年拟在京招生普通高校专业（类）选考科目范围尚未公布，暂时调用2018年拟在浙招生普通高校专业（类）选考科目范围，该数据仅供参考，正式文件公布后会即时替换！
        </span>
        <div class="tab">
            <router-link :to="{name:'overall'}" tag="li">综合检索</router-link>
            <router-link :to="{name:'college'}" tag="li">高校检索</router-link>
            <router-link :to="{name:'major'}" tag="li">专业检索</router-link>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
import  Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter) 
import routes from './routes/routes.config';
    export default {
        name:'app',
        
    }  
</script>
<style scoped>
    *{
        margin:0;
        padding:0;
    }
    .container{
        width:1200px;
        min-width: 960px;
        margin:0 auto;
        box-sizing: border-box;
        font-family: '微软雅黑'
    }
    .text{
        font-size:14px;
        text-align: center;
        color:red;
        margin:10px 0 5px;
        display:inline-block;
    } 
    .tab{
         width: 1200px;
         font-size: 0;
         border-bottom:1px solid #ccc; 
      
    }

    .tab li{
        display: inline-block;
        padding:3px 10px;
        font-size:14px;
        height: 30px;
        line-height: 30px;
    }
    .tab li:hover{
        background: rgba(0, 160, 92, 1);
        color: #fff;
    }
</style>

