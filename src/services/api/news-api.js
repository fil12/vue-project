import axios from "axios";

export default {
        getAnimeNews() {
            axios.get('https://api.jikan.moe/v3/top/anime/1')
                .then(function (response) {
                    return response.data;
                })
        },

        getMangaMews() {
            axios.get('https://api.jikan.moe/v3/schedule/monday')
                .then(function (response) {

                    return response.data;
                })
        }
}