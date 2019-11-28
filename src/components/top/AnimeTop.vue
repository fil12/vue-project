<template>
    <div class="row">
        <div class="item" v-for="(topItem,i) in getThreeItems(animeTop)" :key="'animeTop_'+i">
            <top-card :item="topItem" :id="i"/>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    import TopCard from "./TopCard";
    import ItemMixin from '../../mixins/item-mixin'

    export default {
        name: "AnimeTop",
        components: {
            TopCard
        },
        mixins: [ItemMixin],
        created() {
            this.$store.dispatch('topStore/getAnimeTop');
        },
        computed: {
            ...mapGetters('topStore', [
                'animeTop',
            ]),
        },
    }
</script>

<style scoped>

</style>