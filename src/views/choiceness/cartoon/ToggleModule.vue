<template>
  <CartoonDataBlock :title="title">
    <a href="javascript" class="cartoonToggle ApotheosisItem" slot="carContentA" v-for="(item,index) in animeData" :key="index" ref="ApotheosisItem">
      <img :src="item.img" @load="imgLoad" class="cartoonImg" alt="">
      <h5 class="zt_title">{{item.title}}</h5>
      <p class="zt_content">{{item.content}}</p>
    </a>
  </CartoonDataBlock>
</template>

<script>

import CartoonDataBlock from "@/components/business/choiceness/CartoonDataBlock"

export default {
  name:'Apotheosis',
  components:{
    CartoonDataBlock
  },
  data() {
    return {
      isDoneLoad: false
    }
  },
  props:{
    animeData: {
      type: Array,
      default(){
        return []
      }
    },
    title:{
      type: String,
      default(){
        return ""
      }
    }
  },
  methods: {
    imgLoad(){
      if(!this.isDoneLoad){
        let recommend = this.$refs.ApotheosisItem;
        let height = recommend[0].offsetWidth, length = recommend.length;
        for(let i = 0, leng = length; i < leng; i++){
          recommend[i].children[0].style.height = height + "px"
        }
        this.isDoneLoad = !this.isDoneLoad
      }
    }
  },
}
</script>

<style lang="scss" scoped>
 .ApotheosisItem{
  flex: 0 0 48%;
}
</style>