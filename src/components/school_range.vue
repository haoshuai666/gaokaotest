<template>
    <div class="school-range">
        <div class="left-title">高校层次：</div>
        <div class="right-area">
            <filter-item v-for="(value,index) in schoolRangeList" :key="index" :index="index" :range-object="value" :catagory="'高校层次'"></filter-item>
        </div>
</div>

</template>
<script>
import school_subjectlist from '../pages/subject _analysis';
import filter_item from './filter_item';
export default {
    name:'school_range',
    components:{
        "filter-item":filter_item
    },
    props:["schoolRangeList","catagory","index","rangeObj"],
}
</script>
<style scoped>
    .school-range{
        overflow: hidden;
    }
</style>


