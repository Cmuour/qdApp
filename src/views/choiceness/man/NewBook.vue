<template>
  <div class="ql_yz">
    <a href="javascript:;" class="ql_yz_left">
      <img src="@/../public/img/choiceness/new_1.jpg" alt="">
      <p>潜力新书</p>
    </a>
    <a href="javascript:;" class="ql_yz_right">
      <img src="@/../public/img/choiceness/new_2.jpg" alt="">
      <p>优质精品</p>
    </a>
  </div>
</template>

<script>
export default {
  name: 'NewBook'
}
</script>

<style lang="scss" scoped>
.ql_yz{
  padding: 12px;
  box-sizing: border-box;
  width: 100%;
  height: 100px;
  a{
    display: inline-block;
    width: 48%;
    height: 76px;
    position: relative;
    left: 0;
    top: 0;
    img{
      width: 100%;
      height: 76px;
      background-size: cover;
    }
    p{
      width: 100%;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%,-50%);
      color: white;
      font-size: 18px;
      text-align: center;
    }
  }
  .ql_yz_left{
    float: left;
  }
  .ql_yz_right{
    float: right;
  }
}
</style>