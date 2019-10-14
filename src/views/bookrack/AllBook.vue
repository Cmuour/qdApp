<template>
  <div class="allbook">
    <div class="wrap">
      <div class="book">
        <a href="javascript:;" class="res_book">
          <img src="@/../public/img/bookrack/book2.jpg" alt="">
        </a>
      </div>
      <div class="book">
        <a href="javascript:;" class="res_book">
          <img src="@/../public/img/bookrack/book3.jpg" alt="">
        </a>
      </div>
      <div class="book">
        <a href="javascript:;" class="res_book">
          <img src="@/../public/img/bookrack/book4.jpg" alt="">
        </a>
      </div>
      <div class="book">
        <a href="javascript:;" class="res_book">
          <img src="@/../public/img/bookrack/book5.jpg" alt="">
        </a>
      </div>
      <div class="book">
        <a href="javascript:;" class="res_book">
          <img src="@/../public/img/bookrack/book6.jpg" alt="">
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AllBook'
}
</script>

<style lang="scss" scoped>
.allbook{
  width: 100%;
  padding: 24px;
  box-sizing: border-box;
  .wrap{
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    .book{
      flex: 0 0 100px;
      .res_book{
        display: block;
        width: 100%;
        img{
          width: 100%;
        }
      }
    }
  }
}

.wrap .book:nth-last-child(1){
  align-self: flex-start;
}
</style>