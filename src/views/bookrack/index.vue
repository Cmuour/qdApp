<template>
  <div id="bookrack">
    <Bookrack-Navbar @filtration="showfilter" @search="searchSh"></Bookrack-Navbar>
    <Show-Filter class="filter" ref="filterChild"></Show-Filter>
    <Search ref="scsh"></Search>
    <Scroll class="content">
      <Everyday-Red></Everyday-Red>
      <All-Book></All-Book>
      <!-- <ul>
        <li>hahah1</li>
        <li>hahah2</li>
        <li>hahah3</li>
        <li>hahah4</li>
        <li>hahah5</li>
        <li>hahah6</li>
        <li>hahah7</li>
        <li>hahah8</li>
        <li>hahah9</li>
        <li>hahah10</li>
        <li>hahah11</li>
        <li>hahah12</li>
        <li>hahah13</li>
        <li>hahah14</li>
        <li>hahah15</li>
        <li>hahah16</li>
        <li>hahah17</li>
        <li>hahah18</li>
        <li>hahah19</li>
        <li>hahah20</li>
        <li>hahah21</li>
        <li>hahah22</li>
        <li>hahah23</li>
        <li>hahah24</li>
        <li>hahah25</li>
        <li>hahah26</li>
        <li>hahah27</li>
        <li>hahah28</li>
        <li>hahah29</li>
        <li>hahah30</li>
        <li>hahah31</li>
        <li>hahah32</li>
        <li>hahah33</li>
        <li>hahah34</li>
        <li>hahah35</li>
        <li>hahah36</li>
        <li>hahah37</li>
        <li>hahah38</li>
        <li>hahah39</li>
        <li>hahah40</li>
        <li>hahah41</li>
        <li>hahah42</li>
        <li>hahah43</li>
        <li>hahah44</li>
        <li>hahah45</li>
        <li>hahah46</li>
        <li>hahah47</li>
        <li>hahah48</li>
        <li>hahah49</li>
        <li>hahah50</li>
      </ul> -->
    </Scroll>
    <Main-Tab-Bar></Main-Tab-Bar>
  </div>
</template>

<script>

import BookrackNavbar from '@/components/business/navbar/BookrackNavbar'
import MainTabBar from "@/components/business/tabbar/MainTabBar";
import Search from '@/components/business/search/Search'

import ShowFilter from '@/components/common/showfilter/ShowFilter'
import Scroll from '@/components/common/scroll/Scroll'

import EverydayRed from './EverydayRed'
import AllBook from './AllBook'


export default {
  name: 'Bookrack',
  data() {
    return {
      // issh: false
    }
  },
  components: {
    BookrackNavbar,ShowFilter,Search,Scroll,EverydayRed,AllBook,MainTabBar
  },
  methods: {
    showfilter(){
      this.$refs.filterChild.show()
    },
    searchSh(){
      this.$refs.scsh.show()
    }
  },
}
</script>

<style lang="scss" scoped>
#bookrack{
  position: relative;
  top: 0;
  left: 0;
  right: 0;
  height: 100vh;
  .content{
    position: absolute;
    top: 50px;
    left: 0;
    right: 0;
    width: 100%;
    height: calc(100vh - 100px);
    overflow: hidden;
  }
}
</style>