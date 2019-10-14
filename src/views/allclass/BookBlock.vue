<template>
  <div class="book_block">
    <p class="count_book">共36,086部</p>
    <slot name="content"></slot>
  </div>
</template>

<script>
export default {
  name: 'BookBlock'
}
</script>

<style lang="scss" scoped>
.book_block{
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 0 12px;
  .count_book{
    font-size: 14px;
    margin-bottom: 16px;
  }
}
</style>