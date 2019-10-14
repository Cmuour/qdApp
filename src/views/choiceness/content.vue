<template>
  <div class="content">
    <Toggle></Toggle>
  </div>
</template>

<script>

import Toggle from './Toggle.vue'

export default {
  name: "ChoContent",
  components:{
    Toggle
  }
}
</script>

<style lang="scss" scoped>
.content{
  margin-top: 50px;
}
</style>