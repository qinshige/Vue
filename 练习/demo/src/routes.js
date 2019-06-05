import ShowBlogs from "./components/ShowBlogs";
import Header from "./components/Header";
import SingleBlog from "./components/SingleBlog";

export default [
  {path:"/",component:ShowBlogs},
  {path:"/add",component:Header},
  {path:"/blog/:id",component:SingleBlog}
]
