<template>
  <div class="top_slider">
    <div class="bor_t">
      <div class="ts_wrap" ref="tops">
        <a href="javascript:;" class="ts_con">
          <span>乐园</span>
          <p>猎杀轮回者</p>
        </a>
        <a href="javascript:;" class="ts_con">
          <span>重生</span>
          <p>重生1994成为小学生,但有志不在年高,看重新的...</p>
        </a>
      </div>
    </div>
    <i class="iconfont icon-changyongtubiao-xianxingdaochu-zhuanqu-75"></i>
  </div>
</template>

<script>
export default {
  name: 'TopSlider'
}
</script>

<style lang="scss" scoped>
.top_slider{
  width: 100%;
  position: relative;
  left: 0;
  top: 0;
  margin-top: 8px;
  margin-bottom: 16px;
  padding: 0 12px 0 12px;
  box-sizing: border-box;
  overflow: hidden;
  .bor_t{
    width: 100%;
    height: 100%;
    border-top: 1px solid rgba(204, 204, 204, 0.473);
    border-bottom: 1px solid rgba(204, 204, 204, 0.473);
    .ts_wrap{
      width: 100%;
      height: 40px;
      position: relative;
      left: 0;
      top: 0;
      transition: top 0.5s ease;
      .ts_con{
        display: block;
        width: 100%;
        height: 100%;
        font-size: 12px;
        span{
          display: inline-block;
          background-color: rgb(248, 112, 112);
          color: white;
          padding: 4px 6px;
          border-radius: 6px;
          letter-spacing: 2px;
          margin-left: 10px;
          margin-top: 8px;
        }
        p{
          width: 74%;
          position: relative;
          top: 5px;
          display: inline-block;
          font-size: 16px;
          color: rgb(61, 61, 61);
          margin-left: 10px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      }
    }
  }
  i{
    position: absolute;
    right: 16px;
    top: 15px;
    color: rgb(100, 100, 100);
    font-weight: bold;
    font-size: 14px;
  }
}
</style>