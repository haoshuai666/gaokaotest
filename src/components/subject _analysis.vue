<template>
     <div class="subject">
         <span class="subject_title" >选考科目分析</span>
         <p class="subject_proportion">科目比例：要求所选选考科目的专业总数/条件范围内专业总数。以专业为例：经济统计学专业历史所占比例为66.7%，意为选考历史，66.7%的经济统计学专业均可报考。</p>
        <div class="subject_table">
            <table class="table">
                <thead>
                       <tr>
                           <td>选考科目</td>
                           <td>高校数</td>
                           <td>专业（类）数</td>
                           <td>科目比例</td>
                       </tr>
                </thead>
                <tbody>
                       <tr v-for="(value,index) in schoolRangeList">
                           <td>value.</td>
                           <td>value.</td>
                           <td>value.</td>
                           <td>value.</td>
                       </tr>
                </tbody>
            </table>
        </div>
              <!-- <table >
                         <thead>
               <tr >
                 <th>课程名</th>
                 <th>课时(单位天)</th>
                 <th>授课老师</th>
                 <th>课程分类</th>
                 <th>班级号</th>
               </tr>
                         </thead>
                         <tbody>

                         </tbody> -->
       </table>
     </div>
</template>
<script>



export default {
   props:["schoolRangeList","catagory","index","rangeObj"],





}
</script>
<style>
   .subject_proportion{
       font-size: 14px;
       color: red;
       border-top:1px solid #ccc;
       line-height: 30px;
   }
   .subject{
       margin-top:15px;
   }
   .subject_form{
       border:1px solid #ccc;
   }
   .subject_table tr{
       height: 50px;
       color:#00A15C;

   }
   .subject_table thead{
       background:#00A15C;

   }
   .table{

   }
   .subject_table tr td{
       width: 145px;
       color:#fff;
       text-align: center;
   }
   .subject_table tbody tr td{
      border:1px solid #ccc;
       width: 145px;
       color:#000;
   }
</style>

