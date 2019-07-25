import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    items:[]
  },
  mutations: {
    initItems:(state,payload)=>{
      state.items=payload
    },
  },
  getters:{
    getItems: state => {
      return state.items
    },
  },
  actions: {
    initItems({commit},payload){
      commit('initItems',payload)
    }
  }
})
