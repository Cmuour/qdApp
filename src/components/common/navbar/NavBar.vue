<template>
  <div id="navbar" :style="bgcolor">
    <div class="left" :style="leftwh"><slot name="left"></slot></div>
    <div class="middle" ><slot name="middle"></slot></div>
    <div class="right" :style="rightwh"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  props: {
    color: {
      type: String,
      default(){
        return "white"
      }
    },
    lf: {
      type: String,
      default(){
        return "40px"
      }
    },
    rg: {
      type: String,
      default(){
        return "40px"
      }
    },
  },
  computed: {
    bgcolor(){
      return {
        'background': this.color
      }
    },
    leftwh(){
      return {
        'width': this.lf
      }
    },
    rightwh(){
      return {
        'width': this.rg
      }
    },
  },
}
</script>

<style lang="scss">

#navbar{
  width: 100%;
  height: 50px;
  position: fixed;
  display: flex;
  left: 0;
  right: 0;
  top: 0;
  box-sizing: border-box;
  padding: 20px 12px 0 12px;
  .middle{
    flex: 1;
  }
}
</style>