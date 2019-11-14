<template>
    <div  class="anime-list" >
        <div v-for="(listItem, i) in animeList" :key="'listItem_'+i">
            <router-link :to="{
                name: 'item',
                params: {
                    id: i,
                    title: listItem.name
                }
            }">
                {{listItem.title}}
            </router-link>
        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';
    export default {
        name: "AnimeList",
        computed: {
            ...mapGetters('listStore', {
                animeList: 'animeList'
            })
        },
        mounted() {
            this.$store.dispatch("listStore/getAnimeList")
        }

    }
</script>

<style scoped>

</style>