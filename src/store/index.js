import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    data : [],
    repos: []
  },
  mutations: {
    changeData (state, data) {
      state.data = data
    },
    changeRepos (state, repos) {
      state.repos = repos
    }
  },
  actions: {
  },
  modules: {
  }
})