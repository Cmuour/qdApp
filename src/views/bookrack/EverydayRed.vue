<template>
  <div class="every_red">
    <div class="wrap">
      <a href="javascript:;" class="left">
        <img src="@/../public/img/bookrack/book1.jpg" alt="">
      </a>
      <div class="middle">
        <p>每日导读</p>
        <h4>功法修改器</h4>
        <span>因你读过《从大佬到武林盟主》</span>
      </div>
      <div class="right">
        <div class="wrap_right">
          <p class="clock_in">已签到</p>
          <p class="day">0 天</p>
          <div>签到奖励</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EverydayRed'
}
</script>

<style lang="scss">
.every_red{
  width: 100%;
  height: 90px;
  padding: 12px;
  box-sizing: border-box;
  background-color: rgba(250, 223, 223, 0.253);
  .wrap{
    display: flex;
    .left{
      width: 50px;
      height: 66px;
      img{
        width: 100%;
        height: 100%;
      }
    }
    .middle{
      flex: 1;
      box-sizing: border-box;
      border-right: 1px solid #ccc;
      overflow: hidden;
      padding-left: 10px;
      p{
        font-size: 12px;
        color: var(--red-color);
      }
      h4{
        padding: 2px 0;
      }
      span{
        display: block;
        font-size: 12px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        color: var(--color)
      }
    }
    .right{
      width: 90px;
      .wrap_right{
        width: 70px;
        height: 66px;
        margin: 0 auto;
        text-align: center;
        font-size: 14px;
        .clock_in{
          font-size: 12px;
        }
        .day{
          color: var(--red-color);
          padding: 3px 0;
        }
        div{
          padding: 2px;
          background-color: var(--head-bg-color);
          box-sizing: border-box;
          border-radius: 14px;
          color: white;
        }
      }
    }
  }
}
</style>