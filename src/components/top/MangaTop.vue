<template>
    <div class="row">
        <div class="item" v-for="(topItem,i) in getThreeItems(mangaTop)" :key="'mangaTop_$'+i">
            <top-card :item="topItem" :id="i"/>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    import TopCard from "./TopCard";
    import newsMixin from '../../mixins/news-mixin'

    export default {
        name: "MangaTop",
        components: {
            TopCard
        },
        mixins: [newsMixin],
        beforeCreate() {
            this.$store.dispatch('topStore/getMangaTop');
        },
        computed: {
            ...mapGetters('topStore', [
                'mangaTop'
            ]),
        }
    }
</script>

<style scoped>

</style>