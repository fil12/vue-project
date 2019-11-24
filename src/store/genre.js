import axios from "axios";

export default {
    namespaced: true,
    state: {
        animeGenreItem: null,
        mangaGenreItem: null,
    },
    mutations: {
        setAnimeGenreItem(state, data) {
            state.animeGenreItem = data
        },

        setMangaGenreItem(state, data) {
            state.mangaGenreItem = data
        },
    },
    getters: {
        animeGenreItem: (state) => {
            return state.animeGenreItem;
        },
        mangaGenreItem: (state) => {
            return state.mangaGenreItem;
        },
    },
    actions: {
        getAnimeGenreItem({commit}, id) {
            axios.get("https://api.jikan.moe/v3/genre/anime/"+id+"/1")
                .then(function (response) {
                    let resp = response.data.anime;
                    commit('setAnimeGenreItem', resp);
                })
        },
        getMangaGenreItem({commit}, id) {
            axios.get("https://api.jikan.moe/v3/genre/manga/"+id+"/1")
                .then(function (response) {
                    let resp = response.data.manga;
                    commit('setMangaGenreItem', resp);
                })
        }
    },
}
