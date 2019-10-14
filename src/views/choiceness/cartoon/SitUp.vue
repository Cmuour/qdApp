<template>
  <Cartoon-Data-Block title="熬夜追更">
    <a href="javascript" class="cartoonToggle sit_up" slot="carContentA">
      <img src="https://manhua.qpic.cn/operation/0/16_11_57_bd3c3e86540fc0eea07556bac814a12d_1557979054214.jpg/0" class="cartoonImg" alt="">
      <h5 class="zt_title">降灵记</h5>
      <p class="zt_content">傲娇除灵师和中二灵的逗逼之旅.........</p>
    </a>
    <a href="javascript:;" slot="carContentB" class="sit_up_more cartoonToggle" v-for="(item,index) in situp" :key="index">
      <img :src="item.img" alt="" class="cartoonImg">
      <h5 class="zt_title">{{item.title}}</h5>
      <p class="zt_content">{{item.content}}</p>
    </a>
  </Cartoon-Data-Block>
</template>

<script>

import CartoonDataBlock from "@/components/business/choiceness/CartoonDataBlock"

export default {
  name:'SitUp',
  components:{
    CartoonDataBlock
  },
  props:{
    situp:{
      type: Array,
      default(){
        return []
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.sit_up{
  flex: 0 0 100%;
}
.sit_up_more{
  flex: 0 0 30%;
  img{
    height: 120px;
  }
}
</style>