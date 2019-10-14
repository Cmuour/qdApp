<template>
  <div class="leftright">
    <slot name="left"></slot>
    <slot name="right"></slot>
  </div>
</template>

<script>
export default {
  name:'LeftRight'
}
</script>

<style lang="scss" scoped>
.leftright{
  width: 100%;
  height: calc(100vh - 70px);
  margin-top: 50px;
  display: flex;
  padding-top: 20px;
}
</style>