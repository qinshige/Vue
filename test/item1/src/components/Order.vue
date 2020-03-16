<template>
  <div class="fu">
    <hr>
    <div class="two1">
      <table>
        <tr>
          <th class="tu">
           <span>商品</span>
          </th>
          <th>单价</th> <th>数量</th> <th>金额</th><th>操作</th>
        </tr>
        <tr>
          <td>
           <img src="../../static/images/qixi01.jpg" alt=""> <span>七喜柠檬味碳酸饮料整箱330ml*24促销装</span>
          </td><td>￥43.90</td><td><input class="num" type="number"></td><td>￥43.9</td><td><a>退款</a></td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Order"
    }
</script>

<style scoped>
  html,body,div,h1,h2,h3,h4,ul,li,input,span{
    margin: 0;padding: 0;
  }
  .fu{width: 100%}
  .fu .two1{
    width: 1120px;
    margin: auto;
  }
  .fu .two1 table .tu{
    width: 480px;
    text-align: left;
  }
  .fu .two1 table th{
    width: 165px;
    text-align: left;
    height: 45px;
    border-bottom: 1px solid #eeeeee;
  }
  .fu .two1 table td{
    padding: 8px 0;
    border-bottom: 1px solid #eeeeee;
  }
  .fu .two1 table td img{
    width: 100px;
    height: 100px;
    vertical-align: middle;
  }
  .fu .two1 table td .num{
    width: 72px;
    height: 34px;
    text-align: center;
  }
  .fu .two1 table td a{
    color:  #409eff;
    cursor: pointer;
    font-size: 14px;
  }
  .fu .two1 table .ki{
    text-align: right;
    border-bottom:none;
  }
  .fu .two1 table .ki .btn{
    width: 120px;
    line-height: 36px;
    background: #95bf47;
    border: none;
    outline-style: none;
    color: #fff;
    display: inline-block;
    cursor: pointer;
  }
  .fu .two1 table .ki span{
    margin-right: 5px;
  }
</style>

