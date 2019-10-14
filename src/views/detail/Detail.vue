<template>
  <div class="detail" :style="'background-image: url('+resData.bookimg+')'">
    <div class="detail_header" :class="{shColor:flag}">
      <div class="left" @click="routeBack">
        <i class="iconfont icon-changyongtubiao-xianxingdaochu-zhuanqu-74"></i>
      </div>
      <div class="middle">
        <p class="booktitle" v-show="flag" >{{resData.title}}</p>
        <p v-show="flag" >{{resData.author}}&nbsp;·&nbsp;{{resData.class}}</p>
      </div>
      <div class="right">
        <i class="iconfont icon-changyongtubiao-xianxingdaochu-zhuanqu-29"></i>
      </div>
    </div>
    <Scroll class="detail_content" ref="detail" @shTitle="shTitle">
      <div class="itac_header" >
        <div class="wrap_itac">
          <img :src="resData.bookimg">
          <h4>{{resData.title}}</h4>
          <p>{{resData.author}}&nbsp;·{{resData.class}}&nbsp;·&nbsp;{{resData.towclass}}</p>
        </div>
      </div>
      <div class="wrap_detail">
        <div class="zishu_tuijian_yuepiao" ref="getElTopVal">
          <div class="zs_tj_yp_wrap">
            <div>
              <p>{{resData.countfont}}</p>
              <span>{{resData.islianzai}}</span>
            </div>
            <div>
              <p>{{resData.ztp}}</p>
              <span>推荐票</span>
            </div>
            <div>
              <p>{{resData.mouth}}</p>
              <span>月票</span>
            </div>
          </div>
        </div>
        <div class="book_recommend" @click="showMore" ref="recommend">
          <p v-html="resData.recommend"></p>
          <i v-show="!isShowMore" class="click_more iconfont icon-changyongtubiao-xianxingdaochu-zhuanqu-77"></i>
        </div>
        <div class="catalog">
          <a href="javascript:;" class="catalog_wrap">
            <h5>目录
              <span>连载至{{resData.curzs}}章
                <i class="iconfont icon-changyongtubiao-xianxingdaochu-zhuanqu-75"></i>
              </span>
            </h5>
          </a>
        </div>
        <p class="line_wrap"></p>
        <div class="author_ry">
          <div class="left_author">
            <div class="author_xt">
              <img :src="resData.authorimg" @load="loadImg" alt="">
            </div>
            <div class="author_name">
              <p>{{resData.author}}</p>
              <span>著有{{resData.countworks}}部作品</span>
            </div>
          </div>
          <div class="right_ry">
            <div class="author_xt">
              <img :src="resData.rongyuimg" alt="">
            </div>
            <div class="author_name">
              <p>作品荣誉</p>
              <span>共{{resData.country}}项</span>
            </div>
          </div>
        </div>
        <p class="line_wrap"></p>
        <div class="new_book_tzr">
          <a href="javascript:;">
            新书投资人
            <span>已有{{resData.xstzr}}名投资人
              <i class="iconfont icon-changyongtubiao-xianxingdaochu-zhuanqu-75"></i>
            </span>
          </a>
        </div>
        <p class="line_wrap"></p>
        <Module-A title="同类作品推荐" :xhdata="xhData[0].list"></Module-A>
        <p class="line_wrap"></p>
        <div class="shouwei" ref="shouwei"></div>
      </div>
    </Scroll>
    <footer class="footer"></footer>
  </div>
</template>

<script>

import {chodata} from '@/network/choiceness.js'

import ModuleA from '@/views/classshow/ModuleA'

import Scroll from '@/components/common/scroll/Scroll'

export default {
  name: "Detail",
  components:{
    Scroll,ModuleA
  },
  data() {
    return {
      id: null,
      resData:{},
      flag:false,
      isShowMore:false,
      xhData: [ // 存放数据
        { name: 'xhlt', list: [] },
      ]
    }
  },
  methods: {
    showMore(){
      // 作品介绍 展开与收起
      let recommend = this.$refs.recommend.style
      if(!this.isShowMore){
        recommend.height = "auto";
        recommend.overflow = "none";
      }else{
        this.shRecommend()
      }
      this.recordHeight()
      this.isShowMore = !this.isShowMore
    },
    routeBack(){
      this.$router.back(-1)
      this.shRecommend()
      this.resData = {}
    },
    shRecommend(){  // 介绍内容的显示隐藏
      let recommend = this.$refs.recommend.style
      recommend.height = "76px";
      recommend.overflow = "hidden";
    },
    loadImg(){
      // 因为点击进入作品页  大家不会马上直接拉到最下面 可以延迟200毫秒 等数据加载完后 再获取scroll高度 给shouwei这个白布这是top值
      this.$refs.detail.refresh()
      setTimeout(()=>{
        let shouwei = this.$refs.shouwei.style;
        let height = this.$refs.detail.returnHeight();
        shouwei.top = height + "px";
        shouwei.display = "block";
      },200)
      let scrollTop = this.$refs.getElTopVal.offsetTop - 70
      this.$refs.detail.getScrollTop(scrollTop)
    },
    shTitle(flag){
      this.flag = flag
    },
    recordHeight(){
      // 显示作品更多介绍内容时 高度会发生改变 我们需要重新计算一次scroll高度 把shouwei这个白布重新设置top值
      this.$refs.detail.refresh()
      let shouwei = this.$refs.shouwei.style;
      let height = this.$refs.detail.returnHeight();
      shouwei.top = height + "px";
    }
  },
  created() {
    chodata({
      url: '/xhdata.json',
    }).then(res=>{
      this.xhData[0].list.push(...res.xbltdata)
    })
  },
  watch: {
    "$route":{
      handler(newVal,oldVal){
        let pathArr = this.$route.path.split('/')
        if(pathArr[1] == "productpage"){
          this.isShowMore = false;
          this.id = this.$route.params.id
          chodata({
            url: '/bookdata.json'
          }).then(res=>{
            this.resData = res[this.id]
          })
        }
      },
      immediate: true
    },
    resData(){
      this.shRecommend()
    }
  },
}
</script>

<style lang="scss" scoped>
.shColor{
  background: rgba(0, 0, 0, 0.877);
}
.line_wrap{
  width: 100%;
  height: 12px;
  background: rgba(236, 236, 236, 0.493);
  box-shadow: 0 0 1px 1px rgb(241, 241, 241);
}
.detail:after{
  content: "";
    width:100%;
    height:100%;
    position: absolute;
    left:0;
    top:0;
    background: inherit;
    filter: blur(100px);
    // z-index: 2;
  // filter: blur(40px);
}
.detail:before{
  content: "";
    width:100%;
    height:100%;
    position: absolute;
    left:0;
    top:0;
    background: inherit;
    filter: blur(10px);
    // z-index: 2;
  // filter: blur(40px);
}
.detail{
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background-size: cover;
  background-repeat: no-repeat;
  .detail_header{
    width: 100%;
    height: 60px;
    box-sizing: border-box;
    padding: 20px 12px 0 12px;
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    display: flex;
    z-index: 6;
    .left,.right{
      width: 30px;
      height: 40px;
      i{
        font-size: 24px;
        font-weight: bold;
        line-height: 40px;
        display: block;
        color: white;
      }
    }
    .middle{
      flex: 1;
      text-align: center;
      color: white;
      .booktitle{
        font-size: 16px;
        font-weight: bold;
      }
      P{
        font-size: 14px;
      }
    }
  }
}
.detail_content{
  position: relative;
  z-index: 5;
  width: 100%;
  height: calc(100vh - 50px);
  overflow: hidden;
}
.itac_header{
  width: 100%;
  padding: 30px 0 10px 0;
  color: white;
  .wrap_itac{
    width: 80%;
    text-align: center;
    margin: 0 auto;
    img{
      width: 30%;
    }
  }
}
.wrap_detail{
  background: white;
  .zishu_tuijian_yuepiao{
    width: 100%;
    height: 60px;
    padding: 10px 12px;
    box-sizing: border-box;
    margin-bottom: 16px;
    background-color: white;
    .zs_tj_yp_wrap{
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: space-around;
      border-bottom: 1px solid rgba(204, 204, 204, 0.226);
      padding-bottom: 12px;
      div{
        flex: 0 0 20%;
        text-align: center;
        span{
          font-size: 14px;
        }
      }
    }
  }
  .book_recommend{
    position: relative;
    left: 0;
    top: 0;
    right: 0;
    width: 100%;
    padding: 0 12px;
    box-sizing: border-box;
    line-height: 26px;
    font-size: 15px;
    height: 76px;
    overflow: hidden;
    background-color: white;
    i{
      padding: 0 6px;
      background-color: rgba(255, 255, 255, .9);
      position: absolute;
      right: 12px;
      bottom: 0;
      font-weight: bold;
    }
  }
  .catalog{
    width: 100%;
    height: 60px;
    box-sizing: border-box;
    padding: 8px 12px;
    margin-top: 12px;
    background-color: white;
    .catalog_wrap{
      display: block;
      border-top: 1px solid rgba(204, 204, 204, 0.226);
      line-height: 38px;
      h5{
        color: var(--title-color);
        font-size: 16px;
        span{
          float: right;
          font-size: 14px;
          color: var(--content-color);
          i{
            font-size: 12px;
          }
        }
      }
    }
  }
  .author_ry{
    width: 100%;
    padding: 12px;
    box-sizing: border-box;
    display: flex;
    div{
      flex: 0 0 50%;
    }
    .left_author,.right_ry{
      display: flex;
      .author_xt{
        flex: 0 0 46px;
        height: 46px;
        img{
          width: 100%;
          height: 46px;
          border-radius: 50%;
        }
      }
      .author_name{
        flex: 1;
        padding-left: 10px;
        span{
          font-size: 14px;
          color: var(--content-color);
        }
      }
    }
    .right_ry{
      padding-left: 20px;
      box-sizing: border-box;
      border-left: 1px solid rgba(204, 204, 204, 0.226);
    }
  }
  .new_book_tzr{
    width: 100%;
    padding: 12px;
    box-sizing: border-box;
    a{
      display: block;
      color: var(--title-color);
      font-size: 16px;
      font-weight: bold;
      span{
        float: right;
        font-weight: 500;
        font-size: 14px;
        color: var(--content-color);
        i{
          font-size: 14px;
        }
      }
    }
  }
  .shouwei{
    position: absolute;
    width: 100%;
    height: 500px;
    top: 500px;
    background: white;
    display: none;
  }
}
.footer{
  width: 100%;
  height: 50px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: white;
  z-index: 6;
}
</style>