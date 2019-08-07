import _ from 'lodash'
const localStorage = window.localStorage;
export default{
  //设置的图片的公共接口
  staticPath:'http://statics.zhuishushenqi.com',

  getLocalStroageData(item){

      //   isEmpty:判断是否是空字符串  这块是用来判断
    return _.isEmpty(JSON.parse(localStorage.getItem(item))) ? null : JSON.parse(localStorage.getItem(item))
  },
  setLocalStroageData (item, obj) {
    localStorage.setItem(item, JSON.stringify(obj))
  }
}
