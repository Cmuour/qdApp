<template>
  <div class="tabbar_item">
    <router-link :to="path" class="tabbar_item_path">
      <slot name="icon"></slot>
      <slot name="title"></slot>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'TabbarItem',
  props: {
    path:String
  }
}
</script>

<style lang="scss">
.tabbar_item{
  flex: 1;
  height: 50px;
  text-align: center;
  font-size: 12px;
  .tabbar_item_path{
    display: inline-block;
    width: 100%;
    color: black;
  }
}
.tabbar_item i{
  font-size: 28px;
}
.tabbar_item_path.router-link-active{
  color: red;
}
</style>