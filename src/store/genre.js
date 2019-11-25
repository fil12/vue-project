import axios from "axios";

export default {
    namespaced: true,
    state: {
        animeGenreItem: null,
        mangaGenreItem: null,
        isLoaded: false
    },
    mutations: {
        setAnimeGenreItem(state, data) {
            state.animeGenreItem = data
        },

        setMangaGenreItem(state, data) {
            state.mangaGenreItem = data
        },
        setIsLoaded(state, flag) {
            state.isLoaded = flag
        }
    },
    getters: {
        animeGenreItem: (state) => {
            return state.animeGenreItem;
        },
        mangaGenreItem: (state) => {
            return state.mangaGenreItem;
        },
        isLoaded: (state) => {
            return state.isLoaded;
        }
    },
    actions: {
        getAnimeGenreItem({commit}, id) {
            axios.get("https://api.jikan.moe/v3/genre/anime/"+id+"/1")
                .then(function (response) {
                    let resp = response.data.anime;
                    commit('setAnimeGenreItem', resp);
                    commit('setIsLoaded', true);
                })
        },
        getMangaGenreItem({commit}, id) {
            axios.get("https://api.jikan.moe/v3/genre/manga/"+id+"/1")
                .then(function (response) {
                    let resp = response.data.manga;
                    commit('setMangaGenreItem', resp);
                    commit('setIsLoaded', true);
                })
        },

        isLoadedToFalse({commit}) {
            commit('setIsLoaded', false);
        }
    },
}
