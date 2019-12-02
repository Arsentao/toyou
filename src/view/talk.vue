<template>
  <div class="talk">
    <audio autoplay ref='audio'></audio>
        <ul class="content">
            <li v-for="(item, index) in messageList" :key="index">
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

  mounted(){
    this.scrollwindow()
  },

  methods:{
    scrollwindow() {
        document.querySelector('.content').scrollTop = 99999
        setTimeout(this.scrollwindow, 10);
    },


    chat() {
    if(this.inputValue == ''){
        return
    }
        this.messageList.push({
            message: this.inputValue,
            isSelf: true
        })
    
        this.$ajax.post(
           '/proxy/openapi/api/v2',
            {
            perception: {
                inputText: {
                    text: this.inputValue
                }, 
            },
            userInfo: {
                apiKey: "53c0fd516aa549c08beed1665bb63a16",
                userId: "1"
            }
            }
              ).then(res => {
             this.messageList.push({
                message: res.data.results[0].values.text,
                isSelf: false
              }
            )

            var tex  = 'tex=' + res.data.results[0].values.text + '&'
            var tok  = 'tok=24.0127381a6bd9ec607850e2c38af04ad5.2592000.1577628367.282335-17894601&'
            var lan  = 'lan=zh&'
            var cuid = 'cuid=lin&'
            var ctp  = 'ctp=1&'
            var per  = 'per=103&'
            var pit  = 'pit=8&'
            var spd  = 'spd=5'
            var url  = 'http://tsn.baidu.com/text2audio?' + tex + tok + lan + cuid + ctp + per + pit + spd
            this.$refs.audio.src = url

            })
            this.inputValue=''; 
    },


  }
}

</script>

<style scoped>
.talk{
width: 100%;
height: 100%;
display: block;
position: fixed;
background: url("https://fengpu1351-1300303301.file.myqcloud.com/%E5%A5%87%E5%A6%99%E5%AD%A6%E7%90%B4%E8%AE%B0/bg.jpg");
background-size: 100% 100%;
z-index: -100;
overflow: auto;
}
.foot {
width: 100%;
height: 8%;
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
overflow: auto;
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