<template>
    <div>
      <section v-for="(item,key,index) in category" :key="index">
        <p class="category-type">{{categoryType[key]}}</p>
        <ul>
          <li v-for="(cat,index) in item" :key="index" @click="$router.push({path:'/bookcatdetail/detail',query:{gender:key,major:cat.name}})">
            <h3 class="category">{{cat.name}}</h3>
            <span class="book-cout">{{cat.bookCount}}</span>
          </li>
        </ul>
      </section>
    </div>
</template>

<script>
  //分类页面
    import api from '../../api/api'
    export default {
        name: "Category",
      data:function(){
        return{
          category : null,
          categoryType:{
            male: "男生",
            female:'女生',
            press:'出版'
          }
        }
    },
      created() {
          var that = this;
          api.getCategory().then(function (response) {
            that.category =response.data;
          }).catch(function (err) {
            console.log(err);
          })
      },
      methods:{

      }
    }
</script>

<style scoped>
  .category-type{
    line-height: 2.3rem;
    font-size: 1rem;
    border-bottom: 0.001rem solid #555555;
    margin: 0 1rem
  }
  ul{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin: 0 1rem;
  }
  ul:nth-last-child(n){
    margin: 0 0 2.5rem 0;
  }
  li{
    width: 33.3%;
    text-align: center;
    font-size: .8rem;
    margin-top: 1rem;
  }
</style>
