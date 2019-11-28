<template>
    <div class="row text-center">
        <div class="col-5 text-center">
            <router-link :to="{
               name: 'news-item',
               params: {
                   id: id,
                   item: item
               },
            }">
                <img :src="item.image_url" alt="" class="img-thumbnail"/>
            </router-link>
        </div>
        <div class="col-5">
            <ul class="text-sm-left">
                <router-link :to="{
                   name: 'item',
                   params: {
                       id: id,
                      item: item
                   },
                }">
                    title: {{item.title}}
                </router-link>
                <li>author_name: {{item.author_name}}</li>
                <li>author_url: {{item.author_url}}</li>
                <li>comments: {{item.comments}}</li>
                <li>forum_url: {{item.forum_url}}</li>
                <li>intro: {{item.intro}}</li>
                <li>url: {{item.url}}</li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "NewsCard",
        props: {
            item: {
                type: Object,
                required: true
            },
            id: {
                type: [String, Number],
                required: true
            }
        }
    }
</script>

<style scoped>

</style>