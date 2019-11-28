<template>
  <div class="footer">
    <footer>
      <ul class="foot-nav clearfix">
        <li :class="{'curr':navIndex==1}">
          <router-link to="/index">
            <i class="foot-nav-icon foot-nav-index"></i>
            <span class="foot-nav-text">历程</span>
          </router-link>
        </li>
        <li :class="{'curr':navIndex==2}">
          <router-link to="/talk">
            <i class="foot-nav-icon foot-nav-talk"></i>
            <span class="foot-nav-text">撩我</span>
          </router-link>
        </li>
        <li :class="{'curr':navIndex==3}">
          <router-link to="/trace">
            <i class="foot-nav-icon foot-nav-trace"></i>
            <span class="foot-nav-text">足迹</span>
          </router-link>
        </li>
         <li :class="{'curr':navIndex==4}">
          <router-link to="/photo">
            <i class="foot-nav-icon foot-nav-photo"></i>
            <span class="foot-nav-text">相册</span>
          </router-link>
        </li>
      </ul>

    </footer>
  </div>
</template>

<script>
export default {
    props: {
    navIndex: {
      type: Number,
      default: 0
    }
  },
 
  data () {
    return {
     currindex: 0,
     nowindex: [0,1,2,3]
    }
  }
}


</script>


<style scoped>
footer {
  z-index: 1000;
}
ul.foot-nav {
  position: fixed;
  bottom: 0;
  width: 100%;
  background: #fff;
}
ul.foot-nav::before {
  content: "";
  display: block;
  width: 100%;
  height: 1px;
  background: #f7f7f7;
}
.clearfix:after {
  content: "";
  display: block;
  clear: both;
}
ul.foot-nav > li {
  width: 25%;
  float: left;
  padding: 0.5em 0;
}
.foot-nav-icon {
  display: block;
  width: 2em;
  height: 2em;
  margin: 0 auto;
}
.curr .foot-nav-text {
  color: #e61a01;
}

.foot-nav-index {
  background: url("../assets/foot/index.png") no-repeat;
  background-size: 100%;
}
.curr .foot-nav-index {
  background: url("../assets/foot/index1.png") no-repeat;
  background-size: 100%;
}

.foot-nav-talk {
  background: url("../assets/foot/talk.png")
    no-repeat;
  background-size: 100%;
}
.curr .foot-nav-talk {
  background: url("../assets/foot/talk1.png")
    no-repeat;
  background-size: 100%;
}

.foot-nav-trace {
  background: url("../assets/foot/trace.png") no-repeat;
  background-size: 100%;
}
.curr .foot-nav-trace {
  background: url("../assets/foot/trace1.png") no-repeat;
  background-size: 100%;
}

.foot-nav-photo {
  background: url("../assets/foot/photo.png") no-repeat;
  background-size: 100%;
}
.curr .foot-nav-photo {
  background: url("../assets/foot/photo1.png") no-repeat;
  background-size: 100%;
}

</style>
