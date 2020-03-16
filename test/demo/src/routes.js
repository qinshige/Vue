//这个是 我要配置的路由 组件
import ShowBlogs from "./components/ShowBlogs";
//这个是 我要配置的路由 组件
import Header from "./components/Header";
//这个是 我要配置的路由 组件
import SingleBlog from "./components/SingleBlog";
// 全部导出  在 main.js 里面引入
export default [
  {path:"/",component:ShowBlogs},
  {path:"/add",component:Header},
  {path:"/blog/:id",component:SingleBlog}
]
