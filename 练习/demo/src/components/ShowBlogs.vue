<template>

    <div id="ShowBlogs" v-theme:column=" 'Zhai' ">
        <h1>博客总览</h1>
      <input type="text" v-model="search" placeholder="搜索">
      <div v-for="blog in filt" class="single-blog">
        <router-link v-bind:to="'/blog/' + blog.id " exact>
             <h2 v-clak>{{blog.title | toup}}</h2>
        </router-link>
        <div>
          {{blog.body | snippet}}
        </div>
      </div>
    </div>
</template>

<script>
    export default {
      name: "ShowBlogs",
      data : function () {
        return {
            blogs:[],
            search:""
        }
      },
      created() {
          this.$http.get("https://jsonplaceholder.typicode.com/posts")
            .then(function (data) {
              // console.log(data)
                this.blogs = data.body.slice(0,10);
                console.log(this.blogs);
            })
        // // 初始化
        // Bmob.initialize("afd3198160cbe2961553876fe67beaa8", "18d33b71559bb966f201bd6a0a0880f4");
        // const query = Bmob.Query("Blog");
        // query.find().then(res => {
        //   console.log(res)
        //
        // });
      },
      computed : {
        filt : function () {
          return this.blogs.filter((blog)=>{
            return blog.title.match(this.search);
          })
        }
      }
    }
</script>

<style scoped>
  *{
    margin: 0;padding: 0;
  }
  #ShowBlogs{
    max-width: 811px;
    margin: auto;
    padding: 5px 10px;
    overflow: hidden;
  }
  #ShowBlogs h1{
    width: 100%;
    font-size: 18px;
    font-weight: bolder;
  }
  #ShowBlogs input[type="text"]{
    margin-top: 10px;
    padding: 8px;
    width: 100%;
    box-sizing: border-box;
  }
  #ShowBlogs a{
    color: #444;
    text-decoration: none;
  }
  #ShowBlogs .single-blog{
    width: 800px;
    border: #000000;
    margin: 20px auto;
    background: #cccccc;
    font-size: 15px;
    padding: 5px 5px;
    border-radius: 5px;
  }
  #ShowBlogs .single-blog h2{
    font-weight: lighter;
  }
</style>
