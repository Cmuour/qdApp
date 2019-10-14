<template>
  <transition name="cho-sh">
    <div id="choiceness">
      <Choiceness-Navbar ref="chonav" @search="searchSh"></Choiceness-Navbar>
      <Search ref="scsh"></Search>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
      <Main-Tab-Bar></Main-Tab-Bar>
    </div>
  </transition>
</template>

<script>

import ChoicenessNavbar from "@/components/business/navbar/ChoicenessNavbar"
import Search from '@/components/business/search/Search'
import MainTabBar from "@/components/business/tabbar/MainTabBar";

import Scroll from '@/components/common/scroll/Scroll'

export default {
  name: 'Choiceness',
  components:{
    ChoicenessNavbar,Scroll,Search,MainTabBar
  },
  methods: {
    searchSh(){
      this.$refs.scsh.show()
    }
  },
}
</script>

<style lang="scss" scoped>

.cho-sh-leave-to,.cho-sh-enter{ transform: translateX(0) }
.cho-sh-leave-active,.cho-sh-enter-active{ transition: all 0.01s ease }
.cho-sh-leave,.cho-sh-enter-to{ transform: translateX(0) }

#choiceness{
  width: 100%;
  height: 100vh;
  overflow: hidden;
}


</style>