<template>

            <div class="card" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">{{item.title}}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <router-link :to="{
                    name: 'item',
                    params: {
                        title: item.title.replace(' ', '_'),
                        id: item.mal_id
                    }
                    }"
                                 class="card-link">
                        {{item.title}}
                    </router-link>
                    <a href="#" >Card link</a>
                    <a href="#" class="card-link">Another link</a>
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
            }
        }
    }
</script>

<style scoped>

</style>