import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  // global states of application
  state: {
    token: null,
    user: null,
    isUserLoggedIn: false
  },
  // basically a method that will change state, actually committed
  // by the actions object below, each mutation has two parameters
  // a string type for first and handler for second
  mutations: {
    setToken (state, token) {
      state.token = token
      if (token) {
        state.isUserLoggedIn = true
      } else {
        state.isUserLoggedIn = false
      }
    },
    setUser (state, user) {
      state.user = user
    }
  },
  actions: {
    setToken ({commit}, token) {
      // call mutation setToken and pass it token from state object
      commit('setToken', token)
    },
    setUser ({commit}, user) {
      // call mutation setUser and pass it user from state object
      commit('setUser', user)
    }
  }
})
