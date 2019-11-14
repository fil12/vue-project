<template>
    <div class="row">
        <div class="item" v-for="(newsItem,i) in getThreeItems(animeNews)" :key="'animeNews_'+i">
            <news-card :news-item="newsItem" :id="i"/>
        </div>
    </div>

</template>

<script>
    import {mapGetters} from 'vuex'
    import NewsCard from "./NewsCard";
    import newsMixin from '../../mixins/news-mixin'

    export default {
        name: "AnimeNews",
        components: {
            NewsCard
        },
        mixins: [newsMixin],
        created() {
            this.$store.dispatch('newsStore/getAnimeNews');
        },
        computed: {
            ...mapGetters('newsStore', [
                'animeNews',
            ]),
        },
    }
</script>

<style scoped>

</style>