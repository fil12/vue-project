<template>
    <div class="genres">
        <h2>Manga</h2>
        <div class="row">
            <div class="col-4" v-for="(id, genre) in mangaGenres" :key="'genre_'+id">
                <div class="genre">

                    <div @click="getGenreItem(id)">
                        <router-link :to="{
                            name: 'manga-genre',
                            params: {
                                id: id,
                            }
                        }">
                            {{genre}}
                        </router-link>
                    </div>
                </div>
            </div>
            <div class="col-4 " v-for="(manga, i) in getTenItems(mangaGenreItem)" :key="'manga_'+i">
                <transition name="genre-card" class="genre-card">
                    <genre-card class="genre-card" :item="manga"  v-if="isLoaded"/>
                </transition>
            </div>
        </div>
        <div class="row">

        </div>
    </div>
</template>

<script>
    import mangaGenres from "../data/MangaGenres";
    import GenreCard from "../components/genre/GenreCard";
    import NewsMixin from "../mixins/news-mixin"
    import {mapGetters} from 'vuex'

    export default {
        name: "Manga",
        components: {
            GenreCard
        },
        mixins: [
            NewsMixin
        ],
        data() {
            return {
                mangaGenres,
            }
        },
        computed: {
            ...mapGetters('genre', {
                mangaGenreItem: 'mangaGenreItem',
                isLoaded: 'isLoaded'
            }),
        },
        methods: {
            getGenreItem(id) {
                this.$store.dispatch('genre/isLoadedToFalse');
                this.$store.dispatch('genre/getMangaGenreItem', id);
            }
        }
    }
</script>

<style lang="css">
    .genre{
        margin: 2em;
        border: 1px solid #000;
    }
    .genre-card{
        text-align: center;
    }
    .genre-card-enter-active {
        transition: all 1s ease;
    }
    .genre-card-leave-active {
        transition: all 1s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }
    .genre-card-enter, .genre-card-leave-to {
        transform: translateX(10px);
        opacity: 0;
    }
</style>