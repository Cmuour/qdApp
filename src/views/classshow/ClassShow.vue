<template>
  <transition name="class-sh" mode="out-in">
    <div class="class_show">
      <Header></Header>
      <Scroll class="class_show_content" ref="classShow">
        <Sibuxiang></Sibuxiang>
        <Module-A title="小编力推" :xhdata="xhData[0].list"></Module-A>
        <Module-B title="小编力推" :xhdata="xhData[1].list"></Module-B>
        <Module-B title="新书精选" :xhdata="xhData[2].list"></Module-B>
        <Module-A title="人气连载" :xhdata="xhData[3].list"></Module-A>
        <Module-B title="完本精品" :xhdata="xhData[4].list"></Module-B>
      </Scroll>
    </div>
  </transition>
</template>

<script>

import Header from './Header'
import Sibuxiang from './Sibuxiang'
import ModuleA from './ModuleA'
import ModuleB from './ModuleB'

import {chodata} from '@/network/choiceness.js'

import Scroll from '@/components/common/scroll/Scroll'

export default {
  name: 'ClassShow',
  components:{
    Header,Scroll,Sibuxiang,ModuleA,ModuleB
  },
  data() {
    return {
      xhData: [ // 存放数据
        { name: 'xhlt', list: [] },
        { name: 'bzqtdata', list: [] },
        { name: 'xsjxdata', list: [] },
        { name: 'rqlzdata', list: [] },
        { name: 'wbjpdata', list: [] },
      ],
      saveClassShowY: 0
    }
  },
  created() {
    // 请求数据
    chodata({
      url: '/xhdata.json',
    }).then(res=>{
      this.xhData[0].list.push(...res.xbltdata)
      this.xhData[1].list.push(...res.bzqtdata)
      this.xhData[2].list.push(...res.xsjxdata)
      this.xhData[3].list.push(...res.rqlzdata)
      this.xhData[4].list.push(...res.wbjpdata)
    })
  },
  activated() {
    this.$refs.classShow.refresh()
    this.$refs.classShow.topValue(0,this.saveClassShowY,0)
  },
  deactivated() {
    this.saveClassShowY = this.$refs.classShow.scroll.y
  },
}
</script>

<style lang="scss" scoped>

// .class-sh-enter,.class-sh-leave-to{ transform: translateX(100%); }
// .class-sh-enter-active,.class-sh-leave-active{ transition: all .3s ease; }
// .class-sh-enter-to,.class-sh-leave{ transform: translateX(0); }

.class_show{
  width: 100%;
  height: 100vh;
  background-color: white;
  overflow: hidden;
}
.class_show_content{
  width: 100%;
  height: calc(100vh - 50px);
  overflow: hidden;
  margin-top: 50px;
}
</style>