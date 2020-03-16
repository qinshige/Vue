import Vue from "vue"
const baseUrl = "http://localhost:3000";
export default {
  getCategory : function(){
    return Vue.http.post(baseUrl +"/signup");
  },
}
