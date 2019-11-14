<template>
        <div class="row">
            <div class="col-12">
                <anime-list/>
            </div>
        </div>
</template>

<script>
    import AnimeList from "../components/anime/AnimeList";
    export default {
        name: "Anime",
        components: {
            AnimeList
        }
    }
</script>

<style scoped>

</style>