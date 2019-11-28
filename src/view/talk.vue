<template>
  <div class="talk">
        <ul class="content">
            <li v-for="(item, index) in messageList" >
                <img :src="(item.isSelf?require('../assets/talk/me.jpg'):require('../assets/talk/she.jpg'))" :class="'img'+(item.isSelf?'right':'left')">
                <span :class="'span'+(item.isSelf?'right':'left')">{{item.message}}</span>
            </li>
        </ul>
        <div class="foot">
            <input id="text" type="text" placeholder="和我聊天呗" v-model="inputValue">
            <span id="btn" @click="chat" :class="{'span1':inputValue == '','span2':inputValue != ''}">发送</span>
        </div>

   <foot-nav :navIndex="2"></foot-nav>
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
        inputValue: '',
        messageList: [ {message: "和我聊天呗",
                        isSelf: false}
                      ]
    }
  },

  methods:{
    chat() {
    
    if(this.inputValue == ''){
        return
    }
        this.messageList.push({
            message: this.inputValue,
            isSelf: true
        })

      
        this.axios.get(
            url = 'http://www.tuling123.com/openapi/api',
            parmas = {
                userid:1,
                key:'b6ef78a0c1f24fee90d2317139b9c3d5',
                info:this.inputValue
            }.then(res => {
            this.messageList.push({
                message: res.text,
                isSelf: false
            })
            },res => {
              this.messageList.push({
                message: '发送失败',
                isSelf: false
            })
            }
            )
        )
        this.inputValue=''; 
    }

  }

  

}

</script>

<style scoped>
.foot {
width: 100%;
height: 8%;
background: white;
position: absolute;
bottom: 52px;
position: fixed;
}

.foot input {
display: inline-block;
width: 60%;
height: 60%;
outline: none;
font-size: 16px;
text-indent: 10px;
border-radius: 6px;
position: absolute;
left: 5%;
top: 20%;
}

.span2 {
display: inline-block;
width: 15%;
height: 60%;
background: rgb(22, 175, 221);
font-weight: bold;
font-size: 16px;
cursor: pointer;
text-align: center;
border-radius: 6px;
position: absolute;
right: 10%;
top: 20%;
line-height: 37px;
color: white;
}

.span1 {
display: inline-block;
width: 15%;
height: 60%;
background: rgb(201, 200, 193);
font-weight: bold;
font-size: 16px;
cursor: pointer;
text-align: center;
border-radius: 6px;
position: absolute;
right: 10%;
top: 20%;
line-height: 37px;
color: white;
}


img {
width: 50px;
height: 50px;
}

.content {
font-size: 16px;
width: 100%;
height: 620px;
overflow-y: scroll;
}

.content li {
width: 100%;
display: block;
clear: both;
overflow: hidden;
margin-top: 20px;
}

.content li img {
float: left;
}

.content li span {
background: #7cfc00;
padding: 10px;
border-radius: 10px;
margin: 6px 10px 0 10px;
max-width: 250px;
border: 1px solid #ccc;
box-shadow: 0 0 3px #ccc;
text-align: left;
}

.content li img.imgleft {
float: left;
margin-left: 5px;
}

.content li img.imgright {
float: right;
margin-right: 5px;
}

.content li span.spanleft {
float: left;
background: #fff;
}

.content li span.spanright {
float: right;
background: #7cfc00;
}

</style>