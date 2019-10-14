<template>
  <div class="swiper-container" id="choSlider">
    <div class="swiper-wrapper" ref="moveIndex">
      <div class="swiper-slide" ref="manSlider">
        <Scroll class="man_content" ref="manScroll">
          <Man></Man>
        </Scroll>
      </div>
      <div class="swiper-slide">Slide 2</div>
      <div class="swiper-slide" ref="cartoonSlider">
        <Scroll class="man_content" ref="cartoonScroll">
          <Cartoon></Cartoon>
        </Scroll>
      </div>
      <div class="swiper-slide">Slide 4</div>
      <div class="swiper-slide">Slide 5</div>
    </div>
  </div>
</template>

<script>

import {swiperInstance} from '@/../public/js/tools.js'
import '@/../node_modules/swiper/css/swiper.min.css'

import Man from '@/views/choiceness/man/Man'
import Cartoon from '@/views/choiceness/cartoon/Cartoon'

import Scroll from '@/components/common/scroll/Scroll'

export default {
  name: 'Slider',
  components:{
    Scroll,Man,Cartoon
  },
  data() {
    return {
      saveManY: 0,
      saveCartoonY: 0
    }
  },
  methods: {
  },
  created() {
    // 监听header发送过来的频道下标
    let width = document.documentElement.clientWidth; //获得视窗宽度
    this.$bus.$on("moveChannel",index => {
      this.$refs.moveIndex.style.transform = "translate3d("+ (( -width * index ) + "px") +",0,0)"
    })

    //监听向左滑动的轮播图事件
    this.$bus.$on('stopMove',()=>{
      this.$refs.manSlider.classList.add('stop-swiping')
      this.$refs.cartoonSlider.classList.add('stop-swiping')
    })
    this.$bus.$on('startMove',()=>{
      this.$refs.manSlider.classList.remove('stop-swiping')
      this.$refs.cartoonSlider.classList.remove('stop-swiping')
    })
  },
  mounted() {
    let self = this;
    //设置5个轮播图 对应男生、女生、漫画...等等   
    this.choSwiper = swiperInstance('#choSlider',{
      direction: 'horizontal',
      resistanceRatio : 0,
      noSwiping: true,
      noSwipingClass : 'stop-swiping',
      on: {
        slideChange(){
          //  滑动轮播图结束 调用此函数 发送事件 传当前下标过去
          self.$bus.$emit('moveline',this.activeIndex)
        }
      }
    })
  },
  activated() {
    this.$refs.manScroll.scroll.refresh()
    this.$refs.manScroll.topValue(0,this.saveManY,0)
    this.$refs.cartoonScroll.scroll.refresh()
    this.$refs.cartoonScroll.topValue(0,this.saveCartoonY,0)
  },
  deactivated() {
    this.saveManY = this.$refs.manScroll.scroll.y
    this.saveCartoonY = this.$refs.cartoonScroll.scroll.y
  },
}
</script>

<style lang="scss">
.man_content{
  width: 100%;
  height: calc(100vh - 100px);
  overflow: hidden;
}
</style>