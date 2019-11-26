<template>
    <div class="genres">
        <div class="row" v-if="mangaGenreInfo">
            <div class="ganre-info col-6 offset-3">
                <h2 class="type">{{mangaGenreInfo.type}}</h2>
                <p class="genre-name">{{mangaGenreInfo.name}}</p>
            </div>
        </div>
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
            <div class="col-4 " v-for="(manga, i) in getTwelveItems(mangaGenreItem)" :key="'manga_'+i">
                <transition name="genre-card" class="genre-card">
                    <genre-card class="genre-card" :item="manga"  v-if="isLoaded"/>
                </transition>
            </div>
        </div>

    </div>
</template>

<script>
    import mangaGenres from "../data/MangaGenres";
    import GenreCard from "../components/genre/GenreCard";
    import ItemMixin from "../mixins/item-mixin"
    import {mapGetters} from 'vuex'

    export default {
        name: "Manga",
        components: {
            GenreCard
        },
        mixins: [
            ItemMixin
        ],
        data() {
            return {
                mangaGenres,
            }
        },
        computed: {
            ...mapGetters('genre', {
                mangaGenreItem: 'mangaGenreItem',
                mangaGenreInfo: 'mangaGenreInfo',
                isLoaded: 'isLoaded'
            }),
        },
        methods: {
            getGenreItem(id) {
                this.$store.dispatch('genre/isLoadedToFalse');
                this.$store.dispatch('genre/getMangaGenreItem', id);
                this.$store.dispatch('genre/getMangaGenreInfo', id);
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