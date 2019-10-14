<template>
  <transition name='filter-sh'>
    <div id="show_filter" v-show="issh">
      <div class="filter_book">
        <p>筛选书架作品
          <i class="close iconfont icon-guanbi" @click="show"></i>
        </p>
      </div>
      <div class="all_book">
        <p>全部
          <span>4</span>
        </p>
      </div>
      <div class="book_status">
        <h5>状态</h5>
        <div class="all_sta">
          <div>
            <p>连载
              <span>4</span>
            </p>
          </div>
          <div>
            <p class="zero">完本
              <span>0</span>
            </p>
          </div>
          <div>
            <p>超过50章未读
              <span>4</span>
            </p>
          </div>
          <div>
            <p>超过100章未读
              <span>4</span>
            </p>
          </div>
          <div>
            <p class="zero">未读过
              <span>0</span>
            </p>
          </div>
          <div>
            <p class="zero">已读完
              <span>0</span>
            </p>
          </div>
        </div>
      </div>
      <div class="book_class">
        <h5>类型</h5>
        <div class="all_class">
          <div class="class_left">
            <p>男生
              <span>4</span>
            </p>
            <p class="zero">听书
              <span>0</span>
            </p>
          </div>
          <div class="class_middle">
            <p class="zero">女生
              <span>0</span>
            </p>
            <p class="zero">出版
              <span>0</span>
            </p>
          </div>
          <div class="class_right">
            <p class="zero">漫画
              <span>0</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'ShowFilter',
  data() {
    return {
      issh: false
    }
  },
  methods: {
    show(){
      this.issh = !this.issh
      console.log(this.issh)
    },
  },
}
</script>

<style lang="scss" scoped>

.filter-sh-enter,.filter-sh-leave-to{ transform: translateY(100%); }
.filter-sh-enter-active,.filter-sh-leave-active{ transition: all .3s ease; }
.filter-sh-enter-to,.filter-sh-leave{ transform: translateY(0); }

#show_filter{
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background-color: white;
  padding: 20px 12px 0 12px;
  box-sizing: border-box;
  z-index: 7;
  .filter_book{
    position: relative;
    left: 0;
    top: 0;
    height: 20px;
    p{
      text-align: center;
      font-size: 18px;
      font-weight: bold;
      .close{
        position: absolute;
        left: 0;
        top: 2px;
        font-size: 18px;
      }
    }
  }
  .all_book{
    margin-top: 26px;
    margin-bottom: 26px;
    background-color: rgba(255, 211, 224, 0.267);
    padding: 6px;
    border-radius: 4px;
    p{
      color: rgb(199, 28, 28);
      span{
        float: right;
        font-size: 12px;
        margin-top: 2px;
      }
    }
  }
  .book_status{
    margin-bottom: 26px;
    h5{
      font-size: 16px;
      margin-bottom: 12px;
    }
    .all_sta{
      display: flex;
      flex-flow: row wrap;
      justify-content: space-between;
      div{
        flex: 0 0 48%;
        padding: 8px;
        box-sizing: border-box;
        background-color: rgba(226, 225, 225, 0.281);
        margin-bottom: 6px;
        border-radius: 4px;
        color: rgb(88, 88, 88);
        span{
          float: right;
          font-size: 12px;
          margin-top: 2px;
        }
      }
    }
  }
  .book_class{
    h5{
      font-size: 16px;
      margin-bottom: 12px;
    }
    .all_class{
      display: flex;
      flex-flow: row wrap;
      justify-content: space-between;
      div{
        flex: 0 0 31%;
        p{
          padding: 8px;
          background-color: rgba(226, 225, 225, 0.281);
          margin-bottom: 8px;
          border-radius: 4px;
          span{
            font-size: 12px;
            float: right;
            margin-top: 2px;
          }
        }
      }
    }
  }
}
.zero{
  color: rgb(185, 185, 185);
}

</style>