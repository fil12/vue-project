<template>
    <div class="row">
        <div class="item" v-for="(newsItem,i) in getThreeItems(mangaNews)" :key="'mangaNews_$'+i">
            <news-card :news-item="newsItem" :id="i"/>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    import NewsCard from "./NewsCard";
    import ItemMixin from '../../mixins/item-mixin'

    export default {
        name: "MangaNews",
        components: {
            NewsCard
        },
        mixins: [ItemMixin],
        beforeCreate() {
            this.$store.dispatch('newsStore/getMangaNews');
        },
        computed: {
            ...mapGetters('newsStore', [
                'mangaNews',
            ]),
        }
    }
</script>

<style scoped>

</style>