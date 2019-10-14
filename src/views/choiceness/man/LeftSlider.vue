<template>
<div class="leftWrap">
  <p class="title">{{name}}
    <a :href="path">更多
      <i class="iconfont icon-changyongtubiao-xianxingdaochu-zhuanqu-75"></i>
    </a>
  </p>
  <div class="swiper-container" id="LeftSlider">
    <div class="swiper-wrapper" ref="moveWidth">
      <div class="swiper-slide">
        <img src="@/../public/img/choiceness/leftSlider_1.jpg" alt="">
      </div>
      <div class="swiper-slide">
        <img src="@/../public/img/choiceness/leftSlider_2.jpg" alt="">
      </div>
      <div class="swiper-slide">
        <img src="@/../public/img/choiceness/leftSlider_3.png" alt="">
      </div>
      <div class="swiper-slide">
        <img src="@/../public/img/choiceness/leftSlider_4.jpg" alt="">
      </div>
      <div class="swiper-slide">
        <img src="@/../public/img/choiceness/leftSlider_5.jpg" alt="">
      </div>
      <div class="swiper-slide">
        <img src="@/../public/img/choiceness/leftSlider_6.jpg" alt="">
      </div>
      <div class="swiper-slide">
        <img src="@/../public/img/choiceness/leftSlider_7.jpg" alt="">
      </div>
    </div>
  </div>
</div>
</template>

<script>

import {swiperInstance} from '@/../public/js/tools.js'
import '@/../node_modules/swiper/css/swiper.min.css'

export default {
  name: 'LeftSlider',
  data() {
    return {
      LeftSlider:null,
      index:0
    }
  },
  props:{
    name:{
      type: String,
      default(){
        return "name"
      }
    },
    path: String,
    default(){
      return "javascript:;"
    }
  },
  mounted() {
    let self = this;
    this.LeftSlider = swiperInstance('#LeftSlider',{
      slidesPerView: 'auto',
      // spaceBetween: 10,
      noSwiping : false,
      on:{
        touchStart(e){
          self.$bus.$emit("stopMove")
        },
        touchEnd(){
          self.$bus.$emit("startMove")
        },
        // transitionStart: function(){
        //   self.$refs.moveWidth.style.transform = "translate3D("+ ((-361 * self.index) + "px" )+",0,0)"
        // },
        // slideNextTransitionStart: function(){
        //   self.index++
        //   self.$refs.moveWidth.style.transform = "translate3D("+ ((-361 * self.index) + "px" )+",0,0)"
        //   console.log(1)
        // },
        // slidePrevTransitionStart(){
        //   self.index--
        //   self.$refs.moveWidth.style.transform = "translate3D("+ ((-361 * self.index) + "px" )+",0,0)"
        // }
      },
    })
  },
}
</script>

<style lang="scss" scoped>
.leftWrap{
  margin-bottom: 32px;
  .title{
    position: relative;
    left: 0;
    top: 0;
    line-height: 30px;
    font-size: 18px;
    font-weight: bold;
    padding: 12px;
    a{
      display: inline-block;
      float: right;
      font-size: 14px;
      color: rgba(172, 172, 172, 0.925);
      i{
        position: relative;
        top: -1px;
        font-size: 12px;
      }
    }
  }
}
#LeftSlider{
  width: 100%;
  height: 100%;
  margin: 0;
  padding-left: 12px;
  box-sizing: border-box;
  .swiper-wrapper{
    transition: all .3s ease;
  }
  .swiper-slide {
    width: calc(100% - 12px);
    height: 120px;
    margin-right: 10px !important;
    img{
      width: 100%;
      height: 100%;
    }
  }
}
</style>