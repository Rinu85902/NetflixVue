import Vue from 'vue'
import VueX from 'vuex'
Vue.use(VueX)

export const store = new VueX.Store({
  state: {
    movies: []
  },

  mutations: {
    SET_MOVIES(state, payload) {
      state.movies = payload
    }
  },
  actions: {
    fetchProducts({ commit }) {
      fetch('https://api.themoviedb.org/3/discover/movie?api_key=7ad86fa2f62cdb16d69e1763fb644420&with_genres=28')
        .then(response => response.json())
        .then(data => {
          console.log(data.results, "apidata")
          commit('SET_MOVIES', data.results)
        })
    }
  },
  getters: {
    allFeatured: state => state.movies,
    allLiked: state => state.movies.filter((item) => item.adult === false)

  }
})
