import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user : [],
    repos: [],
    loading: false
  },
  mutations: {
    setUser (state, payload) {
      state.user = payload.user
    },
    setRepos (state, payload) {
      state.repos = payload.repos
    },
    setLoading (state, status){
      state.loading = status
    }
  },
  actions: {
  },
  modules: {
  }
})