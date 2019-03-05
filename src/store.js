import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
var userinfo=JSON.parse(localStorage.getItem('userinfo')),
    car=JSON.parse(localStorage.getItem('car') || '[]');
export default new Vuex.Store({
  state: {
    userinfo:userinfo,
    car:car     //将购物车中的商品数据，用一个数组存储起来，在car数组中，存储一些商品的对象，嗅 们可以暂时将这个商品对象，设计成这个样子{id:商品的尖,count:要购买的数量,price:商品的单价,selected:true,color:颜色,size:大小}
  },
  mutations: {
    user:function(state,user){
      state.userinfo=user
    },
    addCar:function(state,goods){
      var falg=false;
      state.car.some(item=>{
        if(item.id==goods.id && item.size==goods.size && item.color==goods.color){
          item.num+=goods.num
          falg=true
          return true
        }
      })
      if(!falg){
        state.car.push(goods)
      }
      localStorage.setItem('car',JSON.stringify(state.car))
    }
  },
  actions: {

  },
  getters:{
    carNum(state){
      var c=0;
      state.car.forEach(item => {
        c+=item.num
      });
      return c
    }
  }
})
