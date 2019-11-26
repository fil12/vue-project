import axios from "axios";

export default {
    namespaced: true,
    state: {
        searchResults: null,
        isLoaded: false
    },
    mutations: {
        setSearchResults(state, data) {
            state.searchResults = data
        },

        setIsLoaded(state, flag) {
            state.isLoaded = flag
        }
    },
    getters: {
        searchResults: (state) => {
            return state.searchResults;
        },
        isLoaded: (state) => {
            return state.isLoaded;
        }
    },
    actions: {
        getSearchResults({commit}, data) {
            axios.get(`https://api.jikan.moe/v3/search/` + data.type + `?q=` + data.query)
                .then(function (response) {
                    let resp = response.data.results;
                    commit('setSearchResults', resp);
                    commit('setIsLoaded', true);
                })
        },
        isLoadedToFalse({commit}) {
            commit('setIsLoaded', false);
        }
    },
}
