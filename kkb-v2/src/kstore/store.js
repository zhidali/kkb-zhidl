import Vue from 'vue'
import Vuex from './kvuex.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    num: 0
  },
  mutations: {
    add(state){
      state.num++;
    }
  },
  actions: {
    add({commit}){
      setTimeout(() => {
        commit('add');
      }, 1000)
    }
  },
  getters:{
    getNum(state) {
      return state.num * 2;
    }
  },
  modules: {
  }
})
