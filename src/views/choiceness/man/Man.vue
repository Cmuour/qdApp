<template>
  <div class="choman">
    <Man-Slider></Man-Slider>
    <Class-Sort></Class-Sort>
    <Man-Book name="畅销精选" path="javascript:;" :chobook="choAllData[0].list"></Man-Book>
    <Book-Time :timedata="choAllData[1].list"></Book-Time>
    <NewBook></NewBook>
    <Left-Slider name="专题"></Left-Slider>
    <Selfdom></Selfdom>
  </div>
</template>

<script>

import ManSlider from './ManSlider'
import ClassSort from './ClassSort'
import ManBook from './ManBook'
import BookTime from './BookTime'
import NewBook from './NewBook'
import LeftSlider from './LeftSlider'
import Selfdom from './Selfdom'

import {chodata} from '@/network/choiceness.js'

export default {
  name: 'ChoMan',
  components:{
    ManSlider,ClassSort,ManBook,BookTime,NewBook,LeftSlider,Selfdom
  },
  data() {
    return {
      choAllData: [ // 存放数据
        { name: 'chobook', list: [] },
        { name: 'timedata', list: [] },
      ]
    }
  },
  created() {
    // 请求数据
    chodata({
      url: '/chodata.json',
    }).then(res=>{
      this.choAllData[0].list.push(...res.chobook)
      this.choAllData[1].list.push(...res.booktime)
    })
  },
}
</script>

<style lang="scss" scoped>
.choman{
  width: 100%;
  overflow: hidden;
}
</style>