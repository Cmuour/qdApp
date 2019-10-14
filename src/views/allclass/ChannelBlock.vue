<template>
  <div class="channelblock">
    <router-link :to="item.to" class="channel" v-for="(item,index) in channelData" :key="index">
      <p class="channel_name">{{item.title}}</p>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'ChannelBlock',
  data() {
    return {
      channelData:[
        { title: "男生", to: "/allclass/man" },
        { title: "女生", to: "/allclass/woman" },
        { title: "漫画", to: "/allclass/cartoon" },
        { title: "听书", to: "/allclass/headbook" },
        { title: "出版", to: "/allclass/chuban" },
      ]
    }
  },
}
</script>

<style lang="scss" scoped>
.channelblock{
  width: 100%;
  height: 100%;
  .channel{
    display: block;
    color: var(--title-color);
    width: 100%;
    height: 40px;
    text-align: center;
    .channel_name{
      position: relative;
      top: 50%;
      transform: translateY(-50%);
      box-sizing: border-box;
      line-height: 16px;
      font-size: 14px;
    }
  }
}
.channelblock .channel.router-link-active .channel_name{
  color: var(--red-color);
  border-left: 1px solid var(--red-color);
}
</style>