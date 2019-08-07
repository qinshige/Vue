<template>
    <div id="app">
        <h2>添加博客</h2>
      <form v-if="!flag">
        <label for="">博客标题</label>
        <input type="text" v-model="blog.title" required />
        <label for="">博客内容</label>
        <textarea v-model="blog.content" name="" id="" cols="30" rows="10"></textarea>
        <div id="checkboxes">
          <label for="Vue">Vue.js</label>
          <input type="checkbox" id="Vue" value="Vue.js" v-model="blog.arr">
          <label for="Node">Node.js</label>
          <input type="checkbox" id="Node" value="Node.js"  v-model="blog.arr">
          <label for="Rect">React.js</label>
          <input type="checkbox" id="Rect" value="React.js"  v-model="blog.arr">
        </div>
        <label for="">作者：</label>
        <select v-model="blog.author">
          <option v-for="author in blog.authors">
            {{author}}
          </option>
        </select>
        <button @click.prevent="post">添加博客</button>
      </form>
      <div v-if="flag">
        <h3>您的博客发布成功！</h3>
      </div>
      <div id="add">
        <h3>博客总览</h3>
        <p>博客标题:{{blog.title}}</p>
        <p>博客内容：</p>
        <p>{{blog.content}}</p>
        <p>博客分类：</p>
        <ul>
          <li v-for="item in blog.arr">{{item}}</li>
        </ul>
        <p>作者：{{blog.author}}</p>
      </div>
    </div>
</template>

<script>
    export default {
        name: "Header",
        data : function(){
          return {
            blog:{
              title : "",
              content : "",
              arr :[],
              author : "",
              authors : ["😙😙😙😙😙","Jack😙","😙Rosr"],
            },
            flag : false
          }
        },
      methods :{
          post : function () {
            this.$http.post("https://jsonplaceholder.typicode.com/posts",{
              title: this.blog.title,
              body : this.blog.content,
              userId : 1
            })
              .then(function (data) {
               console.log(data);
               this.flag = true;
            })
          }
      }

    }
</script>

<style scoped>
  *{margin: 0;
    padding: 0;}
  ul li {
    list-style: none;
  }
  #app *{
    box-sizing :border-box;
  }
  #app {
    margin: 20px auto;
    max-width: 600px;
    padding: 20px;
  }
  label{
    display: block;
    margin: 20px 0 10px;
  }
  input[type="text"],textarea,select{
    display: block;
    width: 100%;
  }
  textarea{
    height: 200px;
  }
  #checkboxes label{
    display: inline-block;
    margin-top:0;
  }
  #checkboxes input{
    display: inline-block;
    margin-right: 10px;
  }
  button{
    display: block;
    margin: 20px 0;
    background: crimson;
    color: #fff;
    border: 0;
    border-radius: 4px;
    padding: 14px;
    font-size: 18px;
    cursor: pointer;
  }
  #add{
    padding: 10px 20px;
    border: 1px dotted #ccc;
    margin: 30px 0;
  }
  h3{
    margin-top: 10px;
  }
</style>
