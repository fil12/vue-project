import axios from "axios";

export default {
    namespaced: true,
    state: {
        animeTop: null,
        mangaTop: null,
    },
    mutations: {
        setAnimeTop(state, news) {
            state.animeTop = news;
        },

        setMangaTop(state, news) {
            state.mangaTop = news;
        },
    },
    getters: {
        animeTop: (state) => {
            return state.animeTop;
        },
        mangaTop: (state) => {
            return state.mangaTop;
        },
    },
    actions: {
        getAnimeTop({commit}) { /* {commit, state, dispatch} - получается с обьекта store. dispatch - наподобе commit только для actions */
            axios.get('https://api.jikan.moe/v3/top/anime/1')
                .then(function (response) {
                    let resp = response.data;
                    /* мутации вызываются при помощи commit */
                    commit('setAnimeTop', resp.top) /* в commit передается имя мутации остальные параметры это данные которые хоти записать в состояние */
                })
        },
        getMangaTop({commit}) { /* {commit, state, dispatch} - получается с обьекта store. dispatch - наподобе commit только для actions */
            axios.get('https://api.jikan.moe/v3/top/manga/1')
                .then(function (response) {
                    let resp = response.data;
                    /* мутации вызываются при помощи commit */
                    commit('setMangaTop', resp.top) /* в commit передается имя мутации остальные параметры это данные которые хоти записать в состояние */
                })
        },
    },
}