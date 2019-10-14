<template>
  <div class="cartoon_module">
    <div class="cho_cartoon_wrap">
      <slot name="title"></slot>
      <slot name="contentA"></slot>
      <slot name="contentB"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CartoonModule'
}
</script>

<style lang="scss" scoped>
.cartoon_module{
  width: 100%;
  padding: 16px 12px;
  box-sizing: border-box;
  overflow: hidden;
  .cho_cartoon_wrap{
    width: 100%;
    border-bottom: 1px solid var(--border-color);
  }
}
</style>