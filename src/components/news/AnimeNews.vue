<template>
    <div class="row">
        <div class="item" v-for="(articles,i) in getThreeItems(animeNews)" :key="'animeNews_'+i">
            <news-card :item="articles" :id="i"/>
        </div>
    </div>

</template>

<script>
    import {mapGetters} from 'vuex'
    import NewsCard from "./NewsCard";
    import ItemMixin from '../../mixins/item-mixin'

    export default {
        name: "AnimeNews",
        components: {
            NewsCard
        },
        mixins: [ItemMixin],
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