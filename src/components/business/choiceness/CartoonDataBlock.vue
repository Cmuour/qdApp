<template>
  <CartoonModule>
    <p class="tl_cho" slot="title">{{title}}
      <a :href="morePath">更多
        <i class="iconfont icon-changyongtubiao-xianxingdaochu-zhuanqu-75"></i>
      </a>
    </p>
    <div class="contentA" slot="contentA">
      <slot name="carContentA"></slot>
    </div>
    <div class="contentB" slot="contentB">
      <slot name="carContentB"></slot>
    </div>
  </CartoonModule>
</template>

<script>

import CartoonModule from './CartoonModule'

export default {
  name: 'CartoonDataBlock',
  components:{
    CartoonModule
  },
  props:{
    title: {
      type: String,
      default(){
        return "name"
      }
    },
    morePath:{
      type: String,
      default(){
        return 'javascript:;'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.cho_cartoon_wrap{
  width: 100%;
  border-bottom: 1px solid var(--border-color);
}
.tl_cho{
  position: relative;
  left: 0;
  top: 0;
  line-height: 30px;
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 8px;
  a{
    display: inline-block;
    float: right;
    font-size: 14px;
    color: rgba(172, 172, 172, 0.925);
    i{
      position: relative;
      top: -1px;
      font-size: 12px;
    }
  }
}
.contentA,.contentB{
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
}
</style>

