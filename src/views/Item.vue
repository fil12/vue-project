<template>
    <div class="item-card">
        <div class="row">
            <div class="col-6">
                <img :src="item.image_url" alt="">
            </div>
            <div class="col-6">
                <h2>{{item.title}}</h2>
                <ul>
                    <li class="authors">
                        <ul v-for="(author, i) in item.authors" :key="'author_'+i">
                            <li> {{author.name}}</li>
                        </ul>
                    </li>
                    <li class="genres">
                        <ul v-for="(genre, i) in item.genres" :key="'genre_'+i">
                            <li> {{genre.name}}</li>
                        </ul>
                    </li>
                    <li class="members">
                        {{item.members}}
                    </li>
                    <li class="publishing_start">
                        {{item.publishing_start}}
                    </li>
                    <li class="score">
                        {{item.score}}
                    </li>
                    <li class="type">
                        {{item.type}}
                    </li>
                    <li class="volumes">
                        {{item.volumes}}
                    </li>
                </ul>
                <div class="synopsis">
                    {{item.synopsis}}
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "Item",
        data() {
            return {
                item: {

                }
            }
        },
        mounted() {

        }

    }
</script>

<style lang="css">


</style>