<template>
  <div class="screen">
    <div></div>
  </div>
</template>

<script>
export default {
  name: 'CartoonScreen'
}
</script>

<style lang="scss" scoped>
.screen{
  position: absolute;
  top: -276px;
  left: 0px;
  right: 0px;
  width: 100%;
  height: 300px;
  overflow: hidden;
  div{
    position: relative;
    left: -5%;
    top: 0;
    width: 110%;
    border-radius: 10%;
    height: 300px;
    background: var(--head-bg-color);
  }
}
</style>