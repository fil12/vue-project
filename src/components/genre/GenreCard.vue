<template>
    <div class="card" style="width: 18rem;">
        <div class="card-body">
            <img :src="item.image_url" alt="">
            <h5 class="card-title">{{item.title}}</h5>
            <h6 class="card-subtitle mb-2 text-muted">Score: {{item.score}}</h6>
            <p class="card-text">{{item.synopsis.substr(0, 50)}}...</p>
            <router-link  class="card-link alert-link" :to="{
                name: 'item',
                params: {
                    id: item.mal_id,
                    item: item
                }
            }">
                View
            </router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: "GenreCard",
        props: {
            item: {
                type: Object,
                required: true
            },
        }
    }
</script>

<style lang="css">
    .card {
        margin: 2em;
    }
</style>