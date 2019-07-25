import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    items:[],
    itemsStatus:''
  },
  mutations: {
    initItems:(state,payload)=>{
      state.items=payload
    },
    setItemsStatus:(state,payload)=>{
      state.items.find(it=>it.orderNumber===payload.orderNumber).status=payload.status
    }
  },
  getters:{
    getItems: state => {
      return state.items
    },
  },
  actions: {
    initItems({commit},payload){
      commit('initItems',payload)
    },
    setItemsStatus({commit},payload){
      commit('setItemsStatus',payload)
    }
  }
})
