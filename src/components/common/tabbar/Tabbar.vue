<template>
  <div id="tabbar">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'Tabbar',
  }
</script>

<style lang="scss" scoped>
#tabbar{
  display: flex;
  position: fixed;
  width: 100%;
  height: 50px;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #f6f6f6;
  box-shadow:0px -3px 0px rgba(100,100,100,.1);
}
</style>