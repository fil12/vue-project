<template>
    <div class="row text-center">
        <div class="col-5 text-center">
            <router-link :to="{
               name: 'item',
               params: {
                   id: id,
                   title: newsItem.title.replace(' ', '_')
               },
            }">
                <img :src="newsItem.image_url" alt="" class="img-thumbnail"/>
            </router-link>
        </div>
        <div class="col-5">
            <ul class="text-sm-left">
                <router-link :to="{
                   name: 'item',
                   params: {
                       id: id,
                       title: newsItem.title.replace(' ', '_')
                   },
                }">
                    title: {{newsItem.title}}
                </router-link>
                <li>author_name: {{newsItem.author_name}}</li>
                <li>author_url: {{newsItem.author_url}}</li>
                <li>comments: {{newsItem.comments}}</li>
                <li>forum_url: {{newsItem.forum_url}}</li>
                <li>intro: {{newsItem.intro}}</li>
                <li>url: {{newsItem.url}}</li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "NewsCard",
        props: {
            newsItem: {
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