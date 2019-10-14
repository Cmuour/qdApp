<template>
  <Tabbar>
    <TabbarItem path="/bookrack">
      <i slot="icon" class="iconfont icon-changyongtubiao-xianxingdaochu-zhuanqu-64"></i>
      <p slot="title">书架</p>
    </TabbarItem>
    <TabbarItem path="/choiceness/man">
      <i slot="icon" class="iconfont icon-changyongtubiao-xianxingdaochu-zhuanqu-14"></i>
      <p slot="title">精选</p>
    </TabbarItem>
    <TabbarItem path="/find">
      <i slot="icon" class="iconfont icon-icon_yulan"></i>
      <p slot="title">发现</p>
    </TabbarItem>
    <TabbarItem path="/mine">
      <i slot="icon" class="iconfont icon-icon_zhanghao"></i>
      <p slot="title">我</p>
    </TabbarItem>
  </Tabbar>
</template>

<script>

import Tabbar from "@/components/common/tabbar/Tabbar";
import TabbarItem from "@/components/common/tabbar/TabbarItem";

export default {
  name: 'MainTabBar',
  components: {
    Tabbar,TabbarItem
  }
}
</script>