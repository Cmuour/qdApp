<template>
  <div class="hotSearch">
    <p>热门搜索 <i class="iconfont icon-shuaxin"></i></p>
    <div class="sort_search">
      <a href="javascript:;" class="hot_color">漫威</a>
      <a href="javascript:;" class="hot_color">火影</a>
      <a href="javascript:;">斗罗</a>
      <a href="javascript:;">重生</a>
      <a href="javascript:;">系统</a>
      <a href="javascript:;">木叶</a>
      <a href="javascript:;">美漫</a>
      <a href="javascript:;">超神</a>
      <a href="javascript:;">三国</a>
      <a href="javascript:;">武侠</a>
      <a href="javascript:;">无限</a>
      <a href="javascript:;">无敌</a>
      <a href="javascript:;">科技</a>
      <a href="javascript:;" class="last_a hot_color">热搜作品榜</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HotSearch',
}
</script>

<style lang="scss" scoped>
.hotSearch{
  width: 100%;
  padding: 0 12px 0 12px;
  box-sizing: border-box;
  margin-top: 20px;
  p{
    margin-bottom: 12px;
    i{
      float: right;
      font-size: 18px;
    }
  }
  .sort_search{
    display: flex;
    flex-flow: row wrap;
    a{
      flex: 0 0 16%;
      background-color: rgb(238, 238, 238);
      margin-right: 8px;
      margin-bottom: 8px;
      padding: 4px;
      box-sizing: border-box;
      border-radius: 14px;
      text-align: center;
      color: black;
    }
    .last_a{
      flex: 0 0 34%;
      box-sizing: border-box;
    }
  }
}
.hotSearch .sort_search .hot_color{
  background-color: rgba(255, 172, 172, 0.616);
  color: rgb(170, 20, 20);
}
</style>