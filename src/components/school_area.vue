<template>
    <div class="school-area ">
        <div class="left-title">高校地区：</div>
        <div class="right-area">
            <filter-item v-for="(value,index) in schoolAreaList" :catagory="'高校地区'" :index="index" :key="index" :range-object="value"></filter-item>
        </div>    
    </div>
</template>
<script>
import filter_item from './filter_item';
export default {
    name:'area',
    components:{
        "filter-item":filter_item
    },
    props:["schoolAreaList",],
        
}
</script>
<style>
   .school-area{
       overflow: hidden;
   }
</style>


