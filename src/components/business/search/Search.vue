<template>
  <transition name="search-sh">
    <div class="search" v-show="flag">
      <Navbar lf="30px">
        <i slot="left" class="iconSearch iconfont icon-changyongtubiao-xianxingdaochu-zhuanqu-81"></i>
        <input type="text" value="搜索你感兴趣的内容" slot="middle" class="middle">
        <span slot="right" class="right" @click="flag = !flag">取消</span>
      </Navbar>
      <Scroll class="content">
        <Hot-Search></Hot-Search>
      </Scroll>
    </div>
  </transition>
</template>

<script>

import Navbar from '@/components/common/navbar/NavBar'
import Scroll from '@/components/common/scroll/Scroll'

import HotSearch from '@/components/business/search/HotSearch'

export default {
  name:"Search",
  components:{
    Navbar,Scroll,HotSearch
  },
  data() {
    return {
      flag: false
    }
  },
  methods: {
    show(){
      this.flag = !this.flag
    }
  },
}
</script>

<style lang="scss" scoped>
.search-sh-enter,.search-sh-leave-to{ transform: translateX(100%); }
.search-sh-enter-active,.search-sh-leave-active{ transition: all .3s ease; }
.search-sh-enter-to,.search-sh-leave{ transform: translateX(0); }

.search{
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 9;
  background: white;
  overflow: hidden;
  box-sizing: border-box;
}
.iconSearch{
  display: block;
  height: 100%;
  font-size: 30px;
  color: rgb(141, 141, 141);
}
.middle{
  width: 100%;
  height: 100%;
  border: 0;
  outline: none;
  font-size: 18px;
}
.right{
  float: right;
  line-height: 30px;
}

.content{
  position: absolute;
  top: 50px;
  width: 100%;
  height: calc(100% - 50px);
  overflow: hidden;
}
</style>