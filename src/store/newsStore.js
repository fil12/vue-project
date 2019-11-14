import axios from "axios";

export default {
    namespaced: true,
    state: {
        animeNews: null,
        mangaNews: null,
    },
    mutations: {
        setAnimeNews(state, news) {
            state.animeNews = news;
        },

        setMangaNews(state, news) {
            state.mangaNews = news;
        },
    },
    getters: {
        animeNews: (state) => {
            return state.animeNews;
        },
        mangaNews: (state) => {
            return state.mangaNews;
        },
    },
    actions: {
        getAnimeNews({commit}) { /* {commit, state, dispatch} - получается с обьекта store. dispatch - наподобе commit только для actions */
            axios.get('https://api.jikan.moe/v3/anime/1/news')
                .then(function (response) {
                    let resp = response.data;
                    /* мутации вызываются при помощи commit */
                    commit('setAnimeNews', resp.articles) /* в commit передается имя мутации остальные параметры это данные которые хоти записать в состояние */
                })
        },
        getMangaNews({commit}) { /* {commit, state, dispatch} - получается с обьекта store. dispatch - наподобе commit только для actions */
            axios.get('https://api.jikan.moe/v3/manga/1/news')
                .then(function (response) {
                    let resp = response.data;
                    /* мутации вызываются при помощи commit */
                    commit('setMangaNews', resp.articles) /* в commit передается имя мутации остальные параметры это данные которые хоти записать в состояние */
                })
        },
    },
}
