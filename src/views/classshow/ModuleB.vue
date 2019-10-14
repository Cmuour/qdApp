<template>
  <Cartoon-Data-Block :title="title">
    <router-link slot="carContentA" class="cartoonToggle xblt" to="javascript:;" v-for="(item,index) in xhdata" :key="index">
      <div class="book_img">
        <img :src="item.img" alt="" @load="imgLoad">
      </div>
      <div class="book_recommend">
        <h4>{{item.title}}</h4>
        <p>{{item.author}}&nbsp;·&nbsp;{{item.class}}&nbsp;·&nbsp;{{item.serialize}}&nbsp;·&nbsp;{{item.howmany}}</p>
        <span class="texthide">{{item.recommend}}</span>
      </div>
    </router-link>
  </Cartoon-Data-Block>
</template>

<script>

import CartoonDataBlock from "@/components/business/choiceness/CartoonDataBlock"

export default {
  name: 'XHModuleA',
  components:{
    CartoonDataBlock
  },
  props:{
    xhdata: {
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
  },
  methods: {
    imgLoad(){
      this.$bus.$emit('refresh')
    }
  },
}
</script>

<style lang="scss" scoped>
.xblt{
  flex: 0 0 100%;
  .book_img{
    width: 20%;
    float: left;
    img{
      width: 100%;
    }
  }
  .book_recommend{
    float: left;
    width: 70%;
    padding: 0 10px;
    box-sizing: border-box;
    h4{
      color: var(--title-color);
      font-size: 15px;
    }
    p{
      font-size: 13px;
      color: var(--content-color);
      margin-top: 2px;
      margin-bottom: 4px;
    }
  }
}
</style>