<template>
  <div class="selfdom">
    <h3>个性化推荐</h3>
    <a href="javascript:;">根据你的阅读口味或自定义偏好生成 <span>设置偏好<i class="iconfont icon-changyongtubiao-xianxingdaochu-zhuanqu-75"></i></span></a>
  </div>
</template>

<script>
export default {
  name: 'Selfdom'
}
</script>

<style lang="scss" scoped>
.selfdom{
  width: 100%;
  height: 70px;
  margin-top: 12px;
  background-image: url(../../../../public/img/choiceness/selfdom.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  padding: 12px;
  box-sizing: border-box;
  h3{
    font-family: 'Courier New', Courier, monospace;
    color: white;
    margin-bottom: 2px;
  }
  a{
    color: white;
    font-size: 12px;
    span{
      color: rgb(235, 75, 75);
      i{
        font-size: 12px;
      }
    }
  }
}
</style>