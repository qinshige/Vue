import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
const store = new Vuex.Store({
  //状态
  state:{
    count : 1,
    list :[1,7,15,123,12,5,7,8,455]
  },
  //获取
  getters:{
      getCounter : function (state) {
        return state.count;
      }
  },
  //改变 同步
  mutations :{
    increment (state){
      state.count++;
    },
    subtract (state){
      state.count--;
    }
  },
  //提交 //异步
  actions: {
    att : function ({commit}) {
      commit('increment');
    }
  }
});

export default store;
