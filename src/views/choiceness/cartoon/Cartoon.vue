<template>
  <div class="cartoon">
    <Screen></Screen>
    <Cartoon-Slider></Cartoon-Slider>
    <Cartoon-Class-Sort></Cartoon-Class-Sort>
    <Welfare></Welfare>
    <ToggleModule :animeData="cartoonData[0].list" title="小编推荐"></ToggleModule>
    <Masterpiece></Masterpiece>
    <ToggleModule :animeData="cartoonData[1].list" title="封神之作"></ToggleModule>
    <Sit-Up :situp="cartoonData[2].list"></Sit-Up>
    <Mange :mange="cartoonData[3].list" title="日漫馆"></Mange>
    <Mange :mange="cartoonData[4].list" title="热血推荐"></Mange>
    <ToggleModule :animeData="cartoonData[5].list" title="条漫君"></ToggleModule>
  </div>
</template>

<script>

import Screen from './Screen'
import CartoonSlider from './CartoonSlider'
import CartoonClassSort from './CartoonClassSort'
import Welfare from './Welfare'
import ToggleModule from './ToggleModule'
import Masterpiece from './Masterpiece'
import SitUp from './SitUp'
import Mange from './Mange'

import {chodata} from '@/network/choiceness.js'

export default {
  name: "Cartoon",
  components:{
    Screen,CartoonSlider,CartoonClassSort,Welfare,ToggleModule,Masterpiece,SitUp,Mange
  },
  data() {
    return {
      cartoonData:[
        { name:"zhuanti", list:[] },
        { name:"fengshen", list:[] },
        { name:"situp", list:[] },
        { name:"carMange", list:[] },
        { name:"burn", list:[] },
        { name:"tiaomanjun", list:[] },
      ]
    }
  },
  created() {
    chodata({
      url: "/choCartoon.json"
    }).then(res=>{
      this.cartoonData[0].list.push(...res.cartoonzhuanti)
      this.cartoonData[1].list.push(...res.fengshen)
      this.cartoonData[2].list.push(...res.sitUp)
      this.cartoonData[3].list.push(...res.carMange)
      this.cartoonData[4].list.push(...res.burn)
      this.cartoonData[5].list.push(...res.tiaomanjun)
    })
  },
}

</script>

<style lang="scss" scoped>
.cartoon{
  width: 100%;
  overflow: hidden;
}
</style>