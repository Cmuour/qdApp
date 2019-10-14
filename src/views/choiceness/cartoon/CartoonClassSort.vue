<template>
  <div class="class_sort">
    <div class="wrap_class_sort">
      <router-link tag="a" to="/allclass/man" v-for="(item,index) in sortArr" :key="index">
        <i :class="item.icon"></i>
        <p>{{item.name}}</p>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name:'Classsort',
  data() {
    return {
      sortArr: [
        { name: '分类', icon: 'iconfont icon-changyongtubiao-xianxingdaochu-zhuanqu-38', to:'/allclass/man' },
        { name: '排行', icon: 'iconfont icon-changyongtubiao-xianxingdaochu-zhuanqu-16', to:'/allclass/man' },
        { name: '免费', icon: 'iconfont icon-changyongtubiao-xianxingdaochu-zhuanqu-94', to:'/allclass/man' },
        { name: '专题', icon: 'iconfont icon-icon_bangzhuwendang', to:'/allclass/man' },
      ]
    }
  },
}
</script>

<style lang="scss" scoped>
.class_sort{
  width: 100%;
  box-sizing: border-box;
  padding: 12px 24px;
  .wrap_class_sort{
    width: 100%;
    position: relative;
    top: 0;
    left: 0;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    a{
      flex: 0 0 12%;
      text-align: center;
      color: rgb(110, 110, 110);
      i{
        font-size: 34px;
      }
      p{
        font-size: 12px;
      }
    }
  }
}
</style>