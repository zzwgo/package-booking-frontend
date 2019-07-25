import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    items: [],
    chooseStatus: ''
  },
  mutations: {
    initItems: (state, payload) => {
      state.items = payload
    },
    setItemsStatus: (state, payload) => {
      state.items.find(it => it.orderNumber === payload.orderNumber).status = payload.status
    },
    setListFilter: (state, payload) => {
      state.chooseStatus = payload
    }
  },
  getters: {
    getItems: state => {
      return state.items
    },
    chooseStatusItems(state) {
      switch (state.chooseStatus) {
        case "已预约":
          return state.items.filter(item => item.status === "已预约");
        case "未预约":
          return state.items.filter(item => item.status === "未预约");
        case "已取件":
          return state.items.filter(item => item.status === "已取件");
        case "ALL":
        default:
          return state.items;
      }
    }
  },
  actions: {
    initItems({
      commit
    }, payload) {
      commit('initItems', payload)
    },
    setItemsStatus({
      commit
    }, payload) {
      commit('setItemsStatus', payload)
    },
    setListFilter({
      commit
    }, payload) {
      commit('setListFilter', payload)
    }
  }
})
