<template>
  <div id="app">
    <keep-alive>
      <router-view/>
    </keep-alive>
    <!-- <Main-Tab-Bar></Main-Tab-Bar> -->
  </div>
</template>

<script>

import MainTabBar from "@/components/business/tabbar/MainTabBar";

export default {
  name: 'App',
  components: {
    MainTabBar
  },
}

</script>


<style lang="scss">
</style>
