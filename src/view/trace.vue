<template>


  <div class="trace">
<p><span id="one"></span></p>
<p><span id="two"></span></p>
<p><span id="three"></span></p>
<p><span id="four"></span></p>
<p><span id="five"></span></p>
<p><span id="six"></span></p>





   <foot-nav :navIndex="3"></foot-nav>
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
         

    }
  },
 
 mounted(){
this.one()
 },
methods:{
  one(){
      window.two = this.two
      var oneElement = document.querySelector('#one')
      init(oneElement,  {cursorChar:"♥", strings:['嘻嘻'], loop:false, onFinished:function(){window.two()}})
      
  },
  two(){
      window.three = this.three
      var twoElement = document.querySelector('#two')
      init(twoElement, {cursorChar:"♥", strings:['你是猪'], loop: false, onFinished:function(){window.three()}});
  },
   three(){
      window.four = this.four
      var threeElement = document.querySelector('#three')
      init(threeElement, {cursorChar:"♥", strings:['是吗'], loop: false, onFinished:function(){window.four()}});
  },
   four(){
      window.five= this.five
      var fourElement = document.querySelector('#four')
      init(fourElement, {cursorChar:"♥", strings:['是呀'], loop: false, onFinished:function(){window.five()}});
  },
   five(){
      window.six = this.six
      var fiveElement = document.querySelector('#five')
      init(fiveElement, {cursorChar:"♥", strings:['你就是猪'], loop: false, onFinished:function(){window.six()}});
  },
}


}

</script>


<style scoped>

</style>

<style>
.ityped-cursor {
    font-size: 1em;
    opacity: 1;
    -webkit-animation: blink 0.3s infinite;
    -moz-animation: blink 0.3s infinite;
    animation: blink 0.3s infinite;
    animation-direction: alternate;
}
 
@keyframes blink {
    100% {
        opacity: 0;
    }
}
</style>