<template>
  <div class="sibuxiang">
    <div class="sibuxiang_wrap">
      <div class="zt_four">
        <a href="javascript:;">
          <img src="@/../public/img/choiceness/class_channel_man_jp.png" alt="">
          <p>全部</p>
        </a>
        <a href="javascript:;">
          <img src="@/../public/img/choiceness/class_channel_man_tj.png" alt="">
          <p>排行</p>
        </a>
        <a href="javascript:;">
          <img src="@/../public/img/choiceness/class_channel_man_jp.png" alt="">
          <p>书单</p>
        </a>
        <a href="javascript:;">
          <img src="@/../public/img/choiceness/class_channel_man_tj.png" alt="">
          <p>讨论</p>
        </a>
      </div>
      <div class="taolun">
        <span>讨论</span>
        <p>玄幻圈|所有玄幻江湖，风雨相逢！</p>
        <i class="iconfont icon-changyongtubiao-xianxingdaochu-zhuanqu-75"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'SiBuXiang'
}
</script>

<style lang="scss" scoped>
.sibuxiang{
  padding: 12px;
  box-sizing: border-box;
  width: 100%;
  .sibuxiang_wrap{
    width: 100%;
    padding-bottom: 10px;
    border-bottom: 1px solid #ccc;
    .zt_four{
      width: 100%;
      display: flex;
      flex-flow: row wrap;
      justify-content: space-between;
      margin-bottom: 16px;
      a{
        position: relative;
        top: 0;
        left: 0;
        flex: 0 0 23%;
        height: 60px;
        img{
          width: 100%;
          height: 100%;
          border-radius: 6px;
        }
        p{
          width: 100%;
          position: absolute;
          top: 50%;
          left: 50%;
          color: rgb(37, 248, 255);
          transform: translate(-50%,-50%);
          text-align: center;
          letter-spacing: 2px;
        }
      }
    }
    .taolun{
      width: 100%;
      span{
        padding: 2px 4px;
        background-color: red;
        color: white;
        border-radius: 6px;
        font-size: 14px;
      }
      p{
        margin-left: 8px;
        display: inline;
      }
      i{
        float: right;
        margin-top: 3px;
      }
    }
  }
}
</style>