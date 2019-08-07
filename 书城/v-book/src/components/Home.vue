<template>
<div>
<!--  //子页面展示-->
  <mt-tab-container v-model="selected">

    <mt-tab-container-item id="书架">
      <mt-header fixed :title="selected"></mt-header>
       <Bookshelf @addBook="addBook" class="run-shu"></Bookshelf>
    </mt-tab-container-item>
<!--    https://github.com/zimplexing/vue-nReader/blob/master/src/components/book/ReadBook.vue-->
    <mt-tab-container-item id="分类">
      <mt-header fixed :title="selected"></mt-header>
     <keep-alive>
         <Category class="tab-container"></Category>
     </keep-alive>
    </mt-tab-container-item>

    <mt-tab-container-item id="排行">
      <mt-header fixed :title="selected"></mt-header>
      <keep-alive>
          <rank-list class="run"></rank-list>
      </keep-alive>
    </mt-tab-container-item>

    <mt-tab-container-item id="搜索">
      <sou-suo></sou-suo>
    </mt-tab-container-item>
  </mt-tab-container>

<!--  //底部-->
  <mt-tabbar :fixed="true"  v-model="selected">
    <mt-tab-item id="书架">
      <img slot="icon" src="../assets/image/book.svg">
      书架
    </mt-tab-item>
    <mt-tab-item id="分类">
      <img slot="icon" src="../assets/image/category.svg">
      分类
    </mt-tab-item>
    <mt-tab-item id="排行">
      <img slot="icon" src="../assets/image/rank.svg">
      排行
    </mt-tab-item>
    <mt-tab-item id="搜索">
      <img slot="icon" src="../assets/image/search.svg">
      搜索
    </mt-tab-item>
  </mt-tabbar>
</div>
</template>

<script>
  import Category from './Category/Category'
  import Bookshelf from './Book/Bookshelf';
  import RankList from './Ranklist/RankList';
  import SouSuo from './SouSuo';
    export default {
        name: "Home",
       data : function () {
         return {
           selected : "书架",
         }
       },
      methods:{
        addBook(data) {
          this.selected = data;
        }
      },
      mounted(){
        this.selected = this.$store.state.previousPosition
      },
      components: {
          Bookshelf,
          Category,
          RankList,
          SouSuo
      }
    }

</script>

<style scoped>
.run-shu{
  padding: 2.5rem .55rem 0 .55rem;
  width: 100vw;
  min-height: 100vh;
  box-sizing: border-box;
  background: #fff;
  overflow: hidden;
}
.tab-container{
  margin-top:2.5rem;
}
.run{
  width: 100vw;
  min-height: 100vh;
  box-sizing: border-box;
  background: #fff;
  padding: 2.5rem 0 0 0;
}
</style>
