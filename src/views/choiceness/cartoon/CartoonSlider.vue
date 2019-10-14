<template>
  <div class="cartoon_wrap">
    <div class="swiper-container" id="cartoonSlider">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img src="@/../public/img/choiceness/cartoonSlider_1.jpg">
        </div>
        <div class="swiper-slide">
          <img src="@/../public/img/choiceness/cartoonSlider_2.jpg">
        </div>
        <div class="swiper-slide">
          <img src="@/../public/img/choiceness/cartoonSlider_3.jpg">
        </div>
      </div>
      <div class="swiper-pagination" id="cartoonPage"></div>
    </div>
  </div>
</template>

<script>

import {swiperInstance} from '@/../public/js/tools.js'
import '@/../node_modules/swiper/css/swiper.min.css'

export default {
  name: 'CartoonSlider',
  data() {
    return {
      cartoonSlider:null
    }
  },
  mounted() {
    this.cartoonSlider = new swiperInstance("#cartoonSlider",{
      pagination: {
        el: '#cartoonPage'
      },
      direction: 'horizontal',
      loop: true,
      autoplay: true
    })
  },
}
</script>

<style lang="scss" scoped>
.cartoon_wrap{
  width: 100%;
  height: 220px;
  padding: 0 12px;
  box-sizing: border-box;
  overflow: hidden;
}
#cartoonSlider{
  border-radius: 6px;
  .swiper-wrapper{
    width: 100%;
    height: 220px;
    .swiper-slide{
      img{
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>