<template>
  <Cartoon-Data-Block title="名作改编">
    <a href="javascript" slot="carContentA" class="masterpiece cartoonToggle">
      <img src="@/../public/img/choiceness/masterpiece.jpg" class="cartoonImg" alt="">
      <h5 class="zt_title">排球少年</h5>
      <p class="zt_content">小时候，日向翔阳从电视上看见排球比赛，乌野高中的一名小个子在球上的英姿，简直就是个“小巨人”，对此非常深刻，并开始迷上排球，一直想成为“小巨人”一样的人。初中时排球社不够人数，只好默默等待，后来才终于有新成员后，参与了第一次也是最后一赛的比赛，不幸对决了最强队伍，结果当然落败。单凭自己的话，是绝对无法看见那景色的，不是自己一人的话，或许就能看见了...为了能够打出“胜利”的比赛，翔阳努力考入乌野高中，为了实现成为“小巨人”的排球梦想</p>
      <span>超级内容&nbsp;·&nbsp;都市&nbsp;·&nbsp;193话&nbsp;·&nbsp;4.1万人读过</span>
    </a>
  </Cartoon-Data-Block>
</template>

<script>

import CartoonDataBlock from "@/components/business/choiceness/CartoonDataBlock"

export default {
  name: "Masterpiece",
  components:{
    CartoonDataBlock
  }
}
</script>

<style lang="scss" scoped>
.masterpiece{
  flex: 0 0 100%;
  img{
    height: 200px;
  }
  span{
    color: var(--content-color);
    font-size: 12px;
  }
}
</style>