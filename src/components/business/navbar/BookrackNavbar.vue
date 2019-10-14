<template>
  <NavBar color="rgb(248, 54, 54)" lf="60px" rg="60px">
    <div slot="left" class="filtration" @click="filtration">
      <i class="iconfont icon-changyongtubiao-xianxingdaochu-zhuanqu-17"></i>
      <span>筛选</span>
    </div>
    <div slot="middle" class="book_attention">
      <p @click="lineMove">书架</p>
      <p @click="lineMove">关注</p>
      <i class="line" ref="line"></i>
    </div>
    <div slot="right" class="search_operation">
      <i class="iconfont icon-changyongtubiao-xianxingdaochu-zhuanqu-81" @click="search"></i>
      <i class="iconfont icon-changyongtubiao-xianxingdaochu-zhuanqu-29"></i>
    </div>
  </NavBar>
</template>

<script>

import NavBar from '@/components/common/navbar/NavBar'

export default {
  name: 'BookrackNavbar',
  data() {
    return {
      flag: true
    }
  },
  components:{
    NavBar
  },
  methods: {
    lineMove(){
      if(this.flag){
        this.$refs.line.style.left = '68px';
      }else{
        this.$refs.line.style.left = '19px';
      }
      this.flag = !this.flag;
    },
    filtration(){
      this.$emit('filtration')
    },
    search(){
      this.$emit('search')
    }
  },
}
</script>

<style lang="scss" scoped>
.filtration{
  width: 60px;
  height: 20px;
  border: 1px solid white;
  border-radius: 16px;
  position: relative;
  text-align: center;
  color: white;
  i{
    position: absolute;
    left: 6px;
    top: 0;
    font-size: 18px;
  }
  span{
    position: absolute;
    right: 6px;
    top: 1px;
    font-size: 14px;
  }
}
.book_attention{
  position: relative;
  left: 0;
  top: 0;
  width: 100px;
  margin: 0 auto;
  color: white;
  display: flex;
  text-align: center;
  p{
    flex: 1;
    height: 30px;
    letter-spacing: 2px;
  }
  .line{
    width: 10px;
    height: 2px;
    background-color: white;
    position: absolute;
    bottom: 5px;
    left: 19px;
    transition: left .5s ease;
  }
}
.search_operation{
  width: 100%;
  height: 24px;
  color: white;
  display: flex;
  text-align: center;
  i{
    flex: 1;
    font-size: 20px;
  }
}
</style>