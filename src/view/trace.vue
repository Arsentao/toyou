<template>
  <div class="trace">
    <div class="type">
      {{str2}}
    </div>
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
          str: ' 上古结绳而治,后世圣人易之以书契。千年来，数据始终影响着人们的生活。人类一直在探索，大数据时代来临之时使用何种工具用于改变用户利用数据的方式。',
          i: 0,
          timer: 0,
          str2: "",

    }
  },
 
 mounted(){
   this.typing()
 },

  methods:{
          typing() {
                    if (this.i <= this.str.length) {   
                        this.str2 = this.str.slice(0, this.i++) + '_';
                        this.timer = setTimeout(() => {
                            this.typing();
                        }, 200);   
                    } else {
                        clearTimeout(this.timer)
                    }
                }
            },

 }
  



</script>

<style scoped>

</style>