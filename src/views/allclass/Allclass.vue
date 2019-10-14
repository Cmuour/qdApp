<template>
  <transition name="allclass-sh">
    <div class="allclass">
      <All-Class-Navbar lf='30px' rg="60px" >
        <router-link slot="left" to="/choiceness/man" class="exit iconfont icon-changyongtubiao-xianxingdaochu-zhuanqu-74"></router-link>
        <p slot="middle" class="class">分类</p>
        <a href="javascript:;" slot="right" class="allbook">全部作品</a>
      </All-Class-Navbar>
      <Book-Channel></Book-Channel>
    </div>
  </transition>
</template>

<script>

import AllClassNavbar from "@/components/common/navbar/NavBar"

import BookChannel from "./BookChannel"

export default {
  name: 'Allclass',
  data() {
    return {
    }
  },
  components:{
    AllClassNavbar,BookChannel
  },
  created() {
  },
}
</script>

<style lang="scss" scoped>
// .allclass-sh-enter{
//   transform: translate(100%,0);
// }
// .allclass-sh-enter-active{
//   transition: all .3s;
// }
// .allclass-sh-enter-to{
//   transform: translate(0,0);
// }
// .allclass-sh-enter,.allclass-sh-leave-to{ transform: translateX(100%); }
// .allclass-sh-enter-active,.allclass-sh-leave-active{ transition: all .3s ease; }
// .allclass-sh-enter-to,.allclass-sh-leave{ transform: translateX(0); }


.allclass{
  position: relative;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  background: white;
  z-index: 23;
  overflow: hidden;
}
.exit{
  font-weight: bold;
  font-size: 20px;
  color: var(--title-color);
}
.class{
  text-align: center;
  font-size: 18px;
  font-weight: bold;
}
.allbook{
  font-size: 14px;
  color: rgb(61, 113, 224);
  line-height: 30px;
}
</style>