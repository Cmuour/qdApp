<template>
  <div class="cho_book">
    <div class="wrap_cho">
      <p class="tl_cho">{{name}}
        <a :href="path">更多
          <i class="iconfont icon-changyongtubiao-xianxingdaochu-zhuanqu-75"></i>
        </a>
      </p>
      <div class="book_cho" v-for="(item,index) in chobook" :key="index">
        <a href="javascript:;">
          <img :src="item.img" @load="imgLoad">
          <div class="book_info_content">
            <h4>{{item.title}}</h4>
            <p>{{item.author}}&nbsp;·&nbsp;{{item.class}}&nbsp;·&nbsp;{{item.serialize}}&nbsp;·&nbsp;{{item.howmany}}</p>
            <span>{{item.recommend}}</span>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>


export default {
  name: "ManBook",
  props: {
    name: String,
    path: String,
    chobook: {
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
}
</script>

<style lang="scss" scoped>
.cho_book{
  width: 100%;
  box-sizing: border-box;
  padding: 14px;
  .wrap_cho{
    width: 100%;
    .tl_cho{
      position: relative;
      left: 0;
      top: 0;
      line-height: 30px;
      font-size: 18px;
      font-weight: bold;
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
    .book_cho{
      width: 100%;
      height: 100px;
      padding: 12px 0;
      border-bottom: 1px solid rgba(204, 204, 204, 0.473);
      // overflow: hidden;
      a{
        display: inline-block;
        width: 100%;
        height: 100px;
        img{
          width: 22%;
          height: 100px;
          font-size: 0;
          float: left;
        }
        .book_info_content{
          width: 78%;
          height: 100px;
          display: inline-block;
          float: left;
          padding-left: 10px;
          box-sizing: border-box;
          overflow: hidden;
          h4,p{
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
          }
          h4{
            font-size: 16px;
            color: rgb(73, 73, 73);
          }
          p{
            margin: 5px 0;
            color: rgb(167, 167, 167);
            font-size: 16px;
          }
          span{
            display: -webkit-box;
            color: rgb(94, 94, 94);
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            overflow: hidden;
            text-overflow: ellipsis;
            font-size: 17px;
          }
        }
      }
    }
  }
}
</style>