<template>
  <Nav-Bar lf="30px" rg="30px">
    <div slot="left" class="left">
      <router-link to="/allclass/man" class="exit iconfont icon-changyongtubiao-xianxingdaochu-zhuanqu-74"></router-link>
    </div>
    <div slot="middle" class="middle">
      <p>玄幻</p>
    </div>
  </Nav-Bar>
</template>

<script>

import NavBar from '@/components/common/navbar/NavBar'

export default {
  name: "ClassShowHeader",
  components:{
    NavBar
  }
}
</script>

<style lang="scss" scoped>
.left{
  width: 100%;
  height: 100%;
  line-height: 30px;
  .exit{
    display: block;
    width: 100%;
    height: 100%;
    color: var(--title-color);
    font-weight: bold;
  }
}
.middle{
  line-height: 28px;
  text-align: center;
  font-size: 18px;
}
</style>