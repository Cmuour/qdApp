<template>
  <div class="book_time">
    <div class="wrap_time">
      <p class="tl_cho" ref="tlcho">
        限时免费
        <span class="sec_time">00</span>:
        <span class="sec_time">00</span>:
        <span class="sec_time">00</span>
        <a href="javascript:;">更多
          <i class="iconfont icon-changyongtubiao-xianxingdaochu-zhuanqu-75"></i>
        </a>
      </p>
      <div class="tb_wrap">
        <a href="javascrpt:;" v-for="(item,index) in timedata" :key="index">
          <span>免费</span>
          <img :src="item.img" @load="imgLoad">
          <p>{{item.title}}</p>
        </a>
      </div>
      <div class="re_book">
        <a href="javascript:;">
          <i class="iconfont icon-shuaxin">&nbsp;</i>换一批
        </a>
      </div>
    </div>
  </div>
</template>

<script>

import {seckill,countDown} from '@/../public/js/tools.js'

export default {
  name: "BookTime",
  props:{
    timedata: {
      type: Array,
      default(){
        return []
      }
    }
  },
  methods: {
    imgLoad(){
      this.$bus.$emit('refresh')
    }
  },
  mounted() {
    let tlcho = this.$refs.tlcho.children;
    let allC = tlcho.length;
    let res = [];
    for(let i = 0, len = allC; i < allC; i++){
      if(tlcho[i].nodeName == "SPAN"){
        res.push(tlcho[i])
      }
    }
    let countTime = seckill("23.30")
    setInterval(function(){
      countDown(countTime,res)
    },1000)
  },
}
</script>

<style lang="scss" scoped>
.book_time{
  width: 100%;
  padding: 12px;
  box-sizing: border-box;
  .wrap_time{
    width: 100%;
    border-bottom: 1px solid rgba(204, 204, 204, 0.473);
    .tl_cho{
      position: relative;
      left: 0;
      top: 0;
      height: 30px;
      font-size: 18px;
      font-weight: bold;
      .sec_time{
        height: 16px;
        font-size: 12px;
        font-weight: normal;
        display: inline-block;
        margin-right: 3px;
        background-color: rgb(41, 41, 41);
        color: white;
        padding: 1px 2px 1px 2px;
      }
      .sec_time:nth-child(1){
        background-color: rgb(207, 49, 49);
      }
      a{
        display: inline-block;
        float: right;
        font-size: 14px;
        color: rgba(172, 172, 172, 0.925);
        i{
          position: relative;
          top: -1px;
          font-size: 12px;
        }
      }
    }
    .tb_wrap{
      width: 100%;
      display: flex;
      flex-flow: row wrap;
      justify-content: space-between;
      margin-top: 8px;
      margin-bottom: 16px;
      a{
        flex: 0 0 20%;
        position: relative;
        left: 0;
        top: 0;
        overflow: hidden;
        span{
          position: absolute;
          left: -24px;
          top: 4px;
          color: white;
          width: 100%;
          text-align: center;
          background-color: rgb(247, 90, 90);
          font-size: 12px;
          transform: rotate(-45deg);
        }
        img{
          width: 100%;
          height: 90px;
        }
        p{
          color: rgb(73, 73, 73);
        }
      }
    }
    .re_book{
      text-align: center;
      margin-bottom: 12px;
      a{
        color: rgb(39, 122, 122);
        font-size: 16px;
      }
    }
  }
}
</style>