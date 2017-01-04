import Vue from 'vue'
import Vuex from 'vuex'
import Api from './api'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    authToken: false,
    user: false
  },

  actions: {
    getCurrentUser ({ commit }) {
      return Api.currentUser()
        .then((response) => {
          commit('setUser', response.data.data)
        })
    },

    authRedirect ({ commit }) {
      Api.authRedirect()
    },

    login ({ commit }, { code }) {
      Api.login(code)
        .then((response) => {
          commit('setUser', response.data.data)
          commit('setAuthToken', response.headers.authorization)
          $nuxt.$router.push('/dashboard')
        })
    },

    logout ({ commit }) {
      Api.logout()
        .then(() => {
          commit('setUser', null)
          $nuxt.$router.push('/')
        })
    }
  },

  mutations: {
    setAuthToken (state, token) {
      localStorage.authorization = token
      state.authToken = token
    },
    setUser (state, user) {
      state.user = user
    }
  },

  getters: {
  }
})

export default store
