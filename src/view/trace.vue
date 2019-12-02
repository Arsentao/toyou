<template>
  <div class="trace">

   <vue-event-calendar :events="demoEvents"  @month-changed="handleMonthChanged"  @day-changed="handleDayChanged"></vue-event-calendar>

   <foot-nav :navIndex="3"></foot-nav>
   </div>
</template>

<script>
import footNav from '../components/footer'
export default {
    components: {
        footNav
        },
        
  data () {
    return {
      demoEvents: [{
        date: '2019/10/3',
        title: '第一次见面-密室逃脱'
      },
      {
        date: '2019/10/7',
        title: '在一起'
      },
      {
        date: '2019/10/10',
        title: '看电影-攀登者'
      },
        {
        date: '2019/10/13',
        title: '长隆欢乐世界-鬼屋-过山车'
      },
         {
        date: '2019/10/16',
        title: '华工-瞎逛逛'
      },
         {
        date: '2019/10/19',
        title: '正佳广场-溜冰'
      },
          {
        date: '2019/10/20',
        title: '医科大-瞎逛逛'
      },
          {
        date: '2019/10/23',
        title: '医科大-瞎逛逛'
      },
          {
        date: '2019/10/25',
        title: '珠江新城-吃探鱼'
      },
        {
        date: '2019/10/26',
        title: '石牌桥-吃小面'
      },
        {
        date: '2019/10/31',
        title: '华工-一起学习'
      },
        {
        date: '2019/11/1',
        title: '华工-瞎逛逛'
      },
        {
        date: '2019/11/2',
        title: '沙面-北京路-拍黑照-吃烤肉'
      },
        {
        date: '2019/11/6',
        title: '医科大-瞎逛逛'
      },
        {
        date: '2019/11/11',
        title: '医科大-瞎逛逛'
      },
         {
        date: '2019/11/13',
        title: '医科大-一起剪头'
      },
        {
        date: '2019/11/16',
        title: '江南西-打游戏'
      },
         {
        date: '2019/11/24',
        title: '医科大-宿舍打机'
      },
        {
        date: '2019/11/26',
        title: '医科大-瞎逛逛'
      },
          {
        date: '2019/11/30',
        title: '海珠湖-晒太阳'
      },
      ]

    }
  },
 

methods:{
   handleDayChanged(day) {
      console.log(day)
    },
   handleMonthChanged(month) {
      console.log(month)
    },
}


}

</script>


<style scoped>

</style>

<style>
.__vev_calendar-wrapper .events-wrapper .date{
display: none;
}
.__vev_calendar-wrapper .events-wrapper .event-item .time{
position: relative;
right: 0px;
top: 10px;
font-size: 16px;
color: crimson;
}
.__vev_calendar-wrapper .cal-wrapper .cal-header .title{
font-size: 18px;
}
</style>

