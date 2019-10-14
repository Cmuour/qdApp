<template>
  <div class="swiper-container" id="manSlider">
    <div class="swiper-wrapper">
      <div class="swiper-slide">
        <img src="@/../public/img/choiceness/slider1.jpg" alt="">
      </div>
      <div class="swiper-slide">
        <img src="@/../public/img/choiceness/slider2.jpg" alt="">
      </div>
      <div class="swiper-slide">
        <img src="@/../public/img/choiceness/slider3.jpg" alt="">
      </div>
    </div>
    <div class="swiper-pagination" id="manPage"></div>
  </div>
</template>

<script>

import {swiperInstance} from '@/../public/js/tools.js'
import '@/../node_modules/swiper/css/swiper.min.css'


export default {
  name: 'ManSlider',
  data() {
    return {
      ManSwiper: null,
      imgArr: [
        { imgPath: '@/../public/img/choiceness/slider1.jpg' },
        { imgPath: '@/../public/img/choiceness/slider2.jpg' },
        { imgPath: '@/../public/img/choiceness/slider3.jpg' },
      ]
    }
  },
  mounted() {
    this.ManSwiper = swiperInstance('#manSlider',{
      pagination:{
        el: "#manPage"
      },
      direction: 'horizontal',
      loop: true,
      autoplay: true
    })
  },
}
</script>

<style lang="scss" scoped>
.swiper-container{
  width: 100%;
  height: 200px;
}
.swiper-slide img{
  width: 100%;
  height: 200px;
}
</style>