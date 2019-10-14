<template>
  <LeftRight>
    <div slot="left" class="class_channel">
      <Channel-Block></Channel-Block>
    </div>
    <div slot="right" class="class_book">
      <Scroll class="class_content">
        <Man-Content></Man-Content>
      </Scroll>
    </div>
  </LeftRight>
</template>

<script>

import LeftRight from '@/components/business/leftright/LeftRight'
import ChannelBlock from './ChannelBlock'
import ManContent from './ManContent'

import Scroll from '@/components/common/scroll/Scroll'

export default {
  name: 'BookChannel',
  components:{
    LeftRight,ManContent,ChannelBlock,Scroll
  }
}
</script>

<style lang="scss" scoped>
.class_content{
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.class_channel{
  width: 22%;
  height: 100%;
  border-right: 1px solid #eee;
  box-sizing: border-box;
}
.class_book{
  width: 78%;
  height: 100%;
}
</style>