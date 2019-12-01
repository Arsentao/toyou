<template>
  <div class="index">
      <div class="touch" @click="alert1()">
      </div>
       <div class="reject" @click="reject()">
      </div>
  </div>
</template>

<script>
export default {
  methods:{
  reject(){
    this.$dialog.confirm({
        message: '竟然拒绝我∪﹏∪你是猪ˋ△ˊ',
        cancelButtonText: '对对对我是猪●▽●',
        confirmButtonText: '对对对我是大笨猪●▽●',
        cancelButtonColor: 'red',
        confirmButtonColor: 'red'
        }).then(() => {
    }).catch(() => {
    })
    },



    alert1(){
        this.$dialog.confirm({
        message: '你是不是猪猪￣▽￣',
        cancelButtonText: '是又怎么样ˋ︿ˊ',
        confirmButtonText: '被你发现了╯△╰',
        cancelButtonColor: 'red',
        confirmButtonColor: 'red'
        }).then(() => {
    this.alert2()
    }).catch(() => {
    this.alert2()
    })
    },


      alert2(){
    this.$dialog.confirm({
      message: '嘻嘻~那我可不可爱￣▽￣',
      cancelButtonText: '可爱≧▽≦',
      confirmButtonText: '太可爱了≧▽≦',
      cancelButtonColor: 'red',
      confirmButtonColor: 'red'
    }).then(() => {
   this.alert3()
}).catch(() => {
  this.alert3()
})
},


alert3(){
    this.$dialog.confirm({
      message: '嘻嘻嘻嘻~那你喜欢我吗￣▽￣',
      cancelButtonText: '喜欢呀◐ω◑',
      confirmButtonText: '爱你哟● 3●',
      cancelButtonColor: 'red',
      confirmButtonColor: 'red'
    }).then(() => {
   this.alert4()
}).catch(() => {
  this.alert4()
})
},


alert4(){
    this.$dialog.confirm({
      message: '嘿嘿~我就知道你喜欢我￣▽￣\n那我就送你样礼物吧￣▽￣',
      cancelButtonText: '(*^・_・)',
      confirmButtonText: '(〃・ｏ・〃)',
      cancelButtonColor: 'red',
      confirmButtonColor: 'red'
    }).then(() => {
   this.$router.push('/day')
}).catch(() => {
   this.$router.push('/day')
})
},
}
}

</script>

<style scoped>
.index{ 
width: 100%;
height: 100%;
display: block;
position: fixed;
background: url("../assets/index/call.jpg");
background-size: 100% 100%;
z-index: -100;
overflow: auto;
}
.touch{
width: 150px;
height: 150px;
position: absolute;
bottom: 8%;
right: 5%;
}
.reject{
width: 150px;
height: 150px;
position: absolute;
bottom: 8%;
left: 5%;
}
</style>

<style>
.van-dialog__message{
font-size: 18px
}
</style>