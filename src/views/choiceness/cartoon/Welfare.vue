<template>
  <div class="welfare">
    <div class="welfare_wrap">
      <div class="fl_left">
        <span>5</span>
      </div>
      <div class="fl_middle">
        <p>全场漫画劵</p>
        <span>每张漫画劵可免费订阅 1 话</span>
      </div>
      <div class="fl_right">
        <a href="javascript:;">
          <p>立即领取</p>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Welfare'
}
</script>

<style lang="scss" scoped>
.welfare{
  width: 100%;
  padding: 4px 12px;
  margin-bottom: 22px;
  box-sizing: border-box;
  .welfare_wrap{
    width: 100%;
    border-top: 1px solid rgb(236, 236, 236);
    border-bottom: 1px solid rgb(236, 236, 236);
    display: flex;
    .fl_left{
      // width: 100px;
      // height: 100px;
      // float: left;
      width: 40px;
      span{
        font-size: 40px;
        font-weight: bold;
        text-shadow: black 1px 1px 5px;
      }
    }
    .fl_middle{
      // margin-left: 100px;
      // margin-right: 100px;
      flex: 1;
      p{
        margin-top: 8px;
      }
      span{
        color: rgb(141, 141, 141);
      }
    }
    .fl_right{
      // width: 100px;
      // height: 100px;
      // float: right;
      width: 100px;
      a{
        display: block;
        width: 80px;
        padding: 6px;
        background-color: rgb(204, 54, 54);
        margin-top: 10px;
        border-radius: 30px;
        p{
          color: white;
          text-align: center;
        }
      }
    }
  }
}
</style>