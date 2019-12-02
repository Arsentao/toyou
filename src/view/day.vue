<template>
  <div class="day">
   <div class="logo">
       <img src="../assets/day/love.jpg" width="100px" height="100px">
   </div>

   <div class="rabbit">
     <img src="../assets/day/rabbit.gif" width="150px" height="150px">
   </div>

<div class="dear">
  <transition name = "fade">
    <p v-show = "show1">亲爱的</p>
  </transition>
  <transition name = "fade">
    <p v-show = "show2">这是我们</p>
  </transition>
  <transition name = "fade">
    <p v-show = "show3">相爱在一起</p>
  </transition>
  <transition name = "fade">
    <p v-show = "show4">的时光</p>
  </transition>
</div>

<div class="time">
  <transition name = "fade">
    <p v-show = "show5"><span class="big">{{days}} </span><span class="small">days</span></p>
  </transition>
  <transition name = "fade">
    <p v-show = "show6"> <span class="big">{{hours}} </span><span class="small">hours</span></p>
  </transition>
  <transition name = "fade">
    <p v-show = "show7"><span class="big">{{minutes}} </span><span class="small">minutes</span></p>
  </transition>
  <transition name = "fade">
    <p v-show = "show8"><span class="big">{{seconds}} </span><span class="small">seconds</span></p>
  </transition>
</div>

<div class="type">
<p><span id="one"></span></p>
<p><span id="two"></span></p>
<p><span id="three"></span></p>
<p><span id="four"></span></p>
<p><span id="five"></span></p>
<p><span id="six"></span></p>
</div>
 
  <foot-nav :navIndex="1"></foot-nav>
   </div>
</template>

<script>
import {init} from 'ityped';
import footNav from '../components/footer'
export default {
    components: {
        footNav
        },
  data () {
    return {
       days: 0,
       hours: 0,
       minutes: 0,
       seconds: 0,
       show1: false,
       show2: false,
       show3: false,
       show4: false,
       show5: false,
       show6: false,
       show7: false,
       show8: false,
    }
  },

  
mounted(){
  setInterval(this.timedown, 1000)
  setTimeout(this.setshow1, 1000)
  setTimeout(this.setshow2, 2000)
  setTimeout(this.setshow3, 3000)
  setTimeout(this.setshow4, 4000)
  setTimeout(this.setshow5, 5000)
  setTimeout(this.setshow6, 6000)
  setTimeout(this.setshow7, 7000)
  setTimeout(this.setshow8, 8000)
  setTimeout(this.one, 9000)
},

methods:{
    timedown(){
    var nowDate = new Date();
    var loveDate = new Date("2019/10/7 0:00:00");
    var totalSeconds = parseInt((nowDate - loveDate) / 1000);
    this.days = Math.floor(totalSeconds / (60 * 60 * 24));
    var modulo = totalSeconds % (60 * 60 * 24);
    this.hours = Math.floor(modulo / (60 * 60));
    modulo = modulo % (60 * 60);
    this.minutes = Math.floor(modulo / 60);
    this.seconds = modulo % 60;
},

   setshow1(){
     this.show1 = true;
   },
   setshow2(){
     this.show2 = true;
   },
   setshow3(){
     this.show3 = true;
   },
   setshow4(){
     this.show4 = true;
   },
   setshow5(){
     this.show5 = true;
   },
   setshow6(){
     this.show6 = true;
   },
   setshow7(){
     this.show7 = true;
   },
   setshow8(){
     this.show8 = true;
   },
   one(){
      window.two = this.two
      var oneElement = document.querySelector('#one')
      init(oneElement,  {cursorChar:"♥", strings:['我不懂山盟海誓'], loop:false, onFinished:function(){window.two()}})
  },
  two(){
      window.three = this.three
      var twoElement = document.querySelector('#two')
      init(twoElement, {cursorChar:"♥", strings:['也不懂甜言蜜语'], loop: false, onFinished:function(){window.three()}});
  },
   three(){
      window.four = this.four
      var threeElement = document.querySelector('#three')
      init(threeElement, {cursorChar:"♥", strings:['我只希望跟我在一起你能够开心快乐'], loop: false, onFinished:function(){window.four()}});
  },
   four(){
      window.five= this.five
      var fourElement = document.querySelector('#four')
      init(fourElement, {cursorChar:"♥", strings:['我会陪你吃陪你玩'], loop: false, onFinished:function(){window.five()}});
  },
   five(){
      window.six = this.six
      var fiveElement = document.querySelector('#five')
      init(fiveElement, {cursorChar:"♥", strings:['陪你开心陪你难过'], loop: false, onFinished:function(){window.six()}});
  },
  six(){
      var sixElement = document.querySelector('#six')
      init(sixElement, {cursorChar:"♥", strings:['陪着你一路走下去'], loop: false});
  },
}
}


</script>

<style scoped>
.day{ 
width: 100%;
height: 100%;
display: block;
position: fixed;
background: url("https://preview.qiantucdn.com/58pic/34/86/96/19f58PICBpP5Zprn8UgyK.gif!qt324new_nowater");
background-size: 100% 100%;
z-index: -100;
overflow: auto;
}
.logo{
width: 100px;
height: 100px;
border-radius: 50%;
overflow: hidden;
margin: 0 auto;
margin-top: 5%;
}
.dear{
font-size: 20px;
font-weight: bold;
margin-top: 33%;
color: #666;
text-align: left;
line-height: 200%;
margin-left: 17%;
}
.big{
font-size: 25px;
font-weight: bold;
color: rgb(216, 27, 27)  
}
.small{
font-size: 20px;
color: #666  
}
.time{
text-align: right;
right: 17%;
line-height: 200%;
position: absolute;
top: 53%
}
.type{
font-family: "FangSong";
position: absolute;
bottom: 10%;
font-size: 16px;
color: #205a15;
margin: 0 auto;
width: 80%;
left: 10%;
font-weight: bold;
}
.rabbit{
position: absolute;
top: 18%;
right: 3%;
}
.fade-enter-active, .fade-leave-active {
transition: opacity 1s
}
.fade-enter, .fade-leave-to {
opacity: 0
}
@font-face {
font-family:'WebSymbols';
src: url('../assets/font/WebSymbols-Regular.otf');
}
</style>