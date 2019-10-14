<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>

import BSscroll from 'better-scroll';

export default {
  name: "Scroll",
  data() {
    return {
      scroll: null,
      num: 0,
      timeOut:null,
    }
  },
  props:{
    
  },
  created() {
    this.$bus.$on('refresh',()=>{
      this.scroll.refresh()
    })
  },
  mounted() {
    this.scroll = new BSscroll(this.$refs.wrapper,{
      click: true,
      probeType: 3
    })
    this.scroll.on('scroll',(obj)=>{
      if(obj.x == 0){
        if(this.num == 1){
          clearTimeout(this.timeOut)
          return
        }
        this.num = 1
        this.$bus.$emit('stopMove')
      }
    })
    this.scroll.on('scrollEnd',(obj)=>{
      this.timeOut = setTimeout(()=>{
        this.num = 0
        this.$bus.$emit('startMove')
      },300)
    })
  },
  methods: {
    topValue(x,y,time){
      this.scroll.scrollTo(x,y,time)
    },
    returnHeight(){
      return this.scroll.scrollerHeight
    },
    refresh(){
      this.scroll.refresh()
    },
    getScrollTop(topVal){
      this.scroll.on('scroll',obj=>{
        if(obj.y < -topVal){
          this.$emit('shTitle',true)
        }else{
          this.$emit('shTitle',false)
        }
      })
    }
  },
}
</script>

<style lang="scss" scoped>
</style>