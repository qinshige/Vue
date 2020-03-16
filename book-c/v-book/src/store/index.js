import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'

Vue.use(Vuex);

const state = {
    previousPosition:"书架",
    weekRankId: '',
    monthRankId: '',
    totalRankId: '',
    headTitle: '', // 头部文字
    source: '', // 小说源
    backPath: {},
    bookInfo: {}
}
export default new Vuex.Store({
  state,
  mutations
})
