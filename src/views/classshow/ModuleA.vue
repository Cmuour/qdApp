<template>
  <Cartoon-Data-Block :title="title">
    <a slot="carContentA" class="cartoonToggle xblt" @click="skipPage(item.id)" href="javscript:;" v-for="(item,index) in xhdata" :key="index">
      <img :src="item.img" alt="" >
      <h5 class="">{{item.title}}</h5>
      <p class="zt_content">{{item.author}}</p>
    </a>
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
    bookid(id){
      
    },
    skipPage(id){
      this.$router.push('/productpage/'+id)
    }
  },
}
</script>

<style lang="scss" scoped>
.xblt{
  flex: 0 0 22%;
  img{
    width: 100%;
  }
  h5{
    color: var(--title-color);
    font-weight: 500;
  }
}
</style>