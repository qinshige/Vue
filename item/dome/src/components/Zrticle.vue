<template>
  <div class="app">

    <div class="wai"  hide-trigger="true" :style="{margin: '88px 20px 0', background: '#fff', minHeight: 'auto'}">

              <div class="one" v-for="(item,index) in tableData.slice((currentPage-1)*pageSize,currentPage*pageSize)" :key='index'>
                  <span class="title">{{item.title}}</span>&nbsp;&nbsp;&nbsp;
                  <span class="author">{{item.name}}</span>
                  <span class="times">{{item.moment}}</span>
                  <div>{{item.md}}</div>
              </div>

      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page.sync="currentPage"
        :page-sizes="pageSizes"
        :page-size="pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="tableData.length">
      </el-pagination>
    </div>
  </div >
</template>
<script>
    export default {
        name: "Zrticle",
      data(){
          return{
            // 总数据
            tableData:[],
            // 默认每页显示的条数（可修改）
            pageSize:10,
            // 默认显示第几页
            currentPage:1,
            // 总条数，根据接口获取数据长度(注意：这里不能为空)
            totalCount:0,
            // 个数选择器（可修改）
            pageSizes:[1,2,3,4]
          }
      },
      methods:{
          getDta(){
            this.$axios.get('/posts').then(res => {
              console.log(res);
              // 将数据赋值给tableData
              this.tableData = res.data;
              // // 将数据的长度赋值给totalCount
              this.totalCount=res.data.length;
            })
          },
        // 分页
        // 每页显示的条数
        handleSizeChange(val){
          // 改变每页显示的条数
          // console.log(val)
          this.pageSize = val
          // 注意：在改变每页显示的条数时，要将页码显示到第一页
          this.currentPage = 1
          // console.log(`每页 ${val} 条`);
        },
        // 显示第几页
        handleCurrentChange(val) {
          // 改变默认的页数
          this.currentPage = val
          // console.log(`当前页: ${val}`);
        }
        },
      activated(){
        this.getDta();
      },
      created(){
        this.getDta();
      },
    }
</script>

<style scoped>
  .wai{
   border: 1px solid #d9d9d9;
    border-radius: 5px;
  }
    .one{
      width: 100%;
      border: 1px solid #8c939d;
      list-style: none;
      margin:0 auto;
      padding: 10px;
      margin-top: 20px;
      border-radius: 5px;
    }
  .my-ul .my-li .one .title{
    font-weight: bold;
    letter-spacing: 3px;
    font-size: 15px;
    padding: 10px;
  }
  .my-ul .my-li .one span{
      display: inline-block;
    }
  .my-ul .my-li .one .times{
      float: right;
    }
  .huluan{
    width:435px;
    margin:0 auto;
    padding: 50px;
  }
</style>
