import axios from "axios";

export default {
    namespaced: true,
    state: {
        animeGenreItem: null,
        mangaGenreItem: null,
        animeGenreInfo: null,
        mangaGenreInfo: null,
        isLoaded: false
    },
    mutations: {
        setAnimeGenreItem(state, data) {
            state.animeGenreItem = data
        },

        setMangaGenreItem(state, data) {
            state.mangaGenreItem = data
        },
        setAnimeGenreInfo(state, data) {
            state.animeGenreInfo = data
        },

        setMangaGenreInfo(state, data) {
            state.mangaGenreInfo = data
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
        animeGenreInfo: (state) => {
            return state.animeGenreInfo;
        },
        mangaGenreInfo: (state) => {
            return state.mangaGenreInfo;
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

        getAnimeGenreInfo({commit}, id) {
            axios.get("https://api.jikan.moe/v3/genre/anime/"+id+"/1")
                .then(function (response) {
                    let resp = response.data.mal_url;
                    commit('setAnimeGenreInfo', resp);
                    commit('setIsLoaded', true);
                })
        },

        getMangaGenreInfo({commit}, id) {
                    axios.get("https://api.jikan.moe/v3/genre/manga/"+id+"/1")
                        .then(function (response) {
                            let resp = response.data.mal_url;
                            commit('setMangaGenreInfo', resp);
                            commit('setIsLoaded', true);
                        })
                },

        isLoadedToFalse({commit}) {
            commit('setIsLoaded', false);
        }
    },
}
