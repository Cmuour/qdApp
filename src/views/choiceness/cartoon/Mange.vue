<template>
  <Cartoon-Data-Block :title="title">
    <a href="javascript:;" slot="carContentA" class="car_mange cartoonToggle" v-for="(item,index) in mange" :key="index">
      <img :src="item.img" alt="" class="cartoonImg">
      <h5 class="zt_title">{{item.title}}</h5>
      <p class="zt_content">{{item.content}}</p>
    </a>
  </Cartoon-Data-Block>
</template>

<script>

import CartoonDataBlock from "@/components/business/choiceness/CartoonDataBlock"

export default {
  name: 'Mange',
  components:{
    CartoonDataBlock
  },
  props:{
    mange: {
      type: Array,
      default(){
        return []
      }
    },
    title: {
      type: String,
      default(){
        return ""
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.car_mange{
  flex: 0 0 30%;
}
</style>