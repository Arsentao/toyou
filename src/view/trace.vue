<template>
  <div class="trace">

 你好

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
         

    }
  },
 
 mounted(){
 },
methods:{
 
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