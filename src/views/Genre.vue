<template>
    <div class="genres">
<!--        <div class="row">-->
<!--                <div class="col-6" v-for="(anime, i) in animeGenreItem" :key="'anime_'+i">-->
<!--                    <genre-card :item="anime"/>-->
<!--                </div>-->

<!--        </div>-->
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    import GenreCard from "../components/genre/GenreCard";

    export default {
        name: "Genre",
        components: {
            GenreCard
        },
        data() {
            return {
                genreId: this.$route.params.id
            }
        },
        created() {
            this.$store.dispatch('genre/getAnimeGenreItem', this.genreId)
        },

    }
</script>

<style scoped>

</style>