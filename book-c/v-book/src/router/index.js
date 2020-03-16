import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import BookcatDetail from '../components/Book/BookcatDetail'
import RanklistDetail from '../components/Ranklist/RanklistDetail'
import RankLie from '../components/Ranklist/RankLie'
// import ReadBook from '../components/Book/RandBook'
const ReadBook = resolve => require(['../components/Book/RandBook'], resolve)
import ChangeSource from '../components/Book/ChangeSource'
import Book from '../components/common/Book'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/readbook/:bookId',
      name: 'readbook',
      component: ReadBook
    },
    {
      path: '/changeSource/:bookId',
      name: 'changeSource',
      component: ChangeSource
    },
    {
      path: '/book/:bookId',
      name: 'book',
      component: Book
    },
    {
      path: '/rankLie',
      name: 'rankLie',
      component: RankLie,
      redirect: '/ranklist/weekRank',
      children: [{
        path: '/ranklist/*',
        name: 'RanklistDetail',
        component: RanklistDetail
      }]
    },
    {
      path: '/bookcatdetail/detail',
      name: 'bookcatdetail',
      component: BookcatDetail
    }
  ]
})
