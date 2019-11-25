<template>
    <div class="item-card">
        <div class="row">
            <div class="col-6">
                <img :src="item.image_url" alt="">
            </div>
            <div class="col-6">
                <h2>{{item.title}}</h2>
                <ul class="text-left">
                    <li class="authors"> Authors:
                        <ul v-for="(author, i) in item.authors" :key="'author_'+i">
                            <li> {{author.name}}</li>
                        </ul>
                    </li>
                    <li class="genres"> Genres:
                        <ul v-for="(genre, i) in item.genres" :key="'genre_'+i">
                            <li> {{genre.name}}</li>
                        </ul>
                    </li>
                    <li class="members">
                        members: {{item.members}}
                    </li>
                    <li class="publishing_start">
                        publishing start: {{item.publishing_start}}
                    </li>
                    <li class="score">
                        score: {{item.score}}
                    </li>
                    <li class="type">
                        type: {{item.type}}
                    </li>
                    <li class="volumes">
                        volumes: {{item.volumes}}
                    </li>
                </ul>
                <div class="synopsis text-left">
                    <h5>Synopsis:</h5>
                    {{item.synopsis}}
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "Item",
        computed: {
            item() {
                return this.$route.params.item;
            }

        },
    }
</script>

<style lang="css">


</style>