<template>
  <Navbar color="rgb(248, 54, 54)" lf="30px" rg="30px">
    <div class="mid_content" slot="middle">
      <router-link :to="item.path" class="book_class" v-for="(item,index) in classItem" :key="index" @click.native="moveLine(index)">{{item.name}}</router-link>
      <i class="cho_line" ref="choline"></i>
    </div>
    <div slot="right" class="search_operation">
      <i class="search_operation_search iconfont icon-changyongtubiao-xianxingdaochu-zhuanqu-81" @click="search"></i>
    </div>
  </Navbar>
</template>

<script>

import Navbar from '@/components/common/navbar/NavBar.vue'


export default {
  name: 'ChoicenessNavbar',
  components:{
    Navbar,
  },
  data() {
    return {
      classItem: [
        { name: "男生", path: '/choiceness/man' },
        { name: "女生", path: '/choiceness/man' },
        { name: "漫画", path: '/choiceness/man' },
        { name: "听书", path: '/choiceness/man' },
        { name: "对话", path: '/choiceness/man' }
      ],
      index: 0
    }
  },
  methods: {
    moveLine(index){
      this.$refs.choline.style.left = (index * 20) + 8 + "%";
      this.$bus.$emit('moveChannel',index)
    },
    search(){
      this.$emit('search')
    }
  },
  created() {
    this.$bus.$on('moveline',index => {
      this.moveLine(index)
    })
  },
}
</script>

<style lang="scss" scoped>
.mid_content{
  width: 100%;
  height: 100%;
  display: flex;
  position: relative;
  left: 0;
  top: 0;
  .book_class{
    flex: 1;
    text-align: center;
    letter-spacing: 1px;
  }
  .cho_line{
    position: absolute;
    left: 8%;
    bottom: 5px;
    width: 10px;
    height: 2px;
    background: white;
    transition: left .3s ease;
  }
}
.search_operation_search{
  font-size: 22px;
  float: right;
  color: white;
}
</style>