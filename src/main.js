import  Vue from 'vue';
import VueRouter from 'vue-router';
import app from './app.vue';
//import './css/index'
import routes from './routes/routes.config';
Vue.use(VueRouter)
import Vuex from 'vuex';
Vue.use(Vuex)
var router = new VueRouter({
    routes
})
var store = new Vuex.Store({
    state:{
        school_range_obj:[],
        school_area_obj:[]
    },
    mutations:{
        update_range:function (state,data) {
            state.school_range_obj = data
        },
        update_area:function (state, data) {
            state.school_area_obj = data
        },
        update_subject:function (state, data) {
            state.school_subject_obj = data
        },
        reset_school_range:function (state,item) {
            let arr;
            arr = state.school_range_obj.map((val,index) => {
                if (index == item.index) {
                    val.selected = item.selected
                } else {
                    val.selected = false
                }
                return val
            })
            let selected_none = true;
            arr.forEach((val,index) => {
                if (val.selected) {
                    selected_none = false
                }
            })
            if (selected_none) {
                arr[0].selected = true
            }
            state.school_range_obj = arr
        },
        reset_school_area:function (state, item) {
            state.school_area_obj[0].selected = false;
            if (item.index == 0) {
                state.school_area_obj.map((val, index) => {
                    val.selected = (index == 0)
                    return val
                })
                return
            }
            state.school_area_obj.map((val, index) => {
                if (index == item.index) {
                    val.selected = item.selected
                }
                return val
            })
            let selected_none = true;
            state.school_area_obj.forEach((val, index) => {
                if (val.selected) {
                    selected_none = false
                }
            })
            if (selected_none) {
                state.school_area_obj[0].selected = true
            }
        },
        clear_range:function (state) {
            state.school_range_obj.map((val, index) =>{
                val.selected = (index == 0)
            })
        },
        clear_area: function (state) {
            state.school_area_obj.map((val, index) => {
                val.selected = (index == 0)
            })
        }
    },
    getters:{
        selected_range:function (state) {
            let str = ''
            state.school_range_obj.forEach((val,index) => {
                if (val.selected) {
                    str += val.value
                }
            })
            return str
        },
        selected_area: function (state) {
            let arr = [];
            state.school_area_obj.forEach((val, index) => {
                if (val.selected) {
                    arr.push(val.value)
                }
            })
            return arr.join(',')
        }
    }
})
var vm = new Vue({
    el:".container_wrap",
    router,
    store,
    render:function (createElement) {
        return createElement(app)
    }
})
