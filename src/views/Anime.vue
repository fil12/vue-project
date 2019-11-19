<template>
        <div class="row">
            <div class="col-2" v-for="(id, genre) in animeGenres" :key="'genre_'+id">
                <router-link :to="{
                            name: 'anime-genre',
                            params: {
                                id: id
                            }
                        }">
                {{genre}}
                </router-link>
            </div>
            <router-view/>
        </div>
</template>

<script>
    import AnimeList from "../components/anime/AnimeList";
    import animeGenres from "../data/animeGenres";
    export default {
        name: "Anime",
        components: {
            AnimeList
        },
        data() {
            return {
                animeGenres
            }
        }

    }
</script>

<style scoped>

</style>