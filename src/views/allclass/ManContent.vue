<template>
  <Book-Block>
    <div slot="content" class="allclass_book_wrap">
      <div class="jp_tj">
        <a href="javascript:;">
          <img src="@/../public/img/choiceness/class_channel_man_jp.png" alt="">
          <p>精品</p>
        </a>
        <a href="javascript:;">
          <img src="@/../public/img/choiceness/class_channel_man_tj.png" alt="">
          <p>推荐</p>
        </a>
      </div>
      <div class="allbook_class">
        <router-link class="class_count_book" :to="item.path" v-for="(item,index) in classData" :key="index">
          <div class="wrap_img">
            <img :src="item.img" alt="">
          </div>
          <div class="class_name_count">
            <h5 class="title">{{item.title}}</h5>
            <p class="count">{{item.count}}</p>
          </div>
        </router-link>
      </div>
    </div>
  </Book-Block>
</template>

<script>

import BookBlock from './BookBlock'

import {chodata} from '@/network/choiceness'

export default {
  name: 'ManContent',
  components:{
    BookBlock
  },
  data() {
    return {
      classData:[]
    }
  },
  created() {
    chodata({
      url: "/manchannel.json"
    }).then(res=>{
      this.classData.push(...res.manchannel)
    })
  },
}
</script>

<style lang="scss" scoped>
.allclass_book_wrap{
  width: 100%;
  height: 100%;
}
.jp_tj{
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  margin-bottom: 16px;
  a{
    position: relative;
    top: 0;
    left: 0;
    flex: 0 0 48%;
    height: 80px;
    img{
      width: 100%;
      height: 100%;
    }
    p{
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
.allbook_class{
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  .class_count_book{
    flex: 0 0 48%;
    margin-bottom: 12px;
    .wrap_img{
      width: 40%;
      height: 70px;
      float: left;
      img{
        width: 100%;
        height: 70px;
        background-image: cover;
      }
    }
    .class_name_count{
      float: left;
      width: 60%;
      height: 70px;
      padding: 6px;
      box-sizing: border-box;
      .title{
        color: var(--title-color);
        margin-bottom: 10px;
      }
      .count{
        color: var(--content-color);
        font-size: 14px;
      }
    }
  }
}
</style>