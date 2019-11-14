import axios from "axios";

export default {
    namespaced: true,
    state: {
        animeList: null,
        mangaList: null,
    },
    mutations: {
        setAnimeList(state, data) {
            state.animeList = data
        },

        setMangeList(state, data) {
            state.mangaList = data
        },
    },
    getters: {
        animeList: (state) => {
            return state.animeList;
        },
        mangaList: (state) => {
            return state.mangaList;
        },
    },
    actions: {
        getAnimeList({commit}) {
            axios.get('https://api.jikan.moe/v3/anime/1/episodes')
                .then(function (response) {
                    let resp = response.data.episodes;
                    commit('setAnimeList', resp);
                })
        },
        getMangaList({commit}) {
            axios.get('https://api.jikan.moe/v3/manga/1/characters')
                .then(function (response) {
                    let resp = response.data.episodes;
                    commit('setMangeList', resp);
                })
        }
    },
}
