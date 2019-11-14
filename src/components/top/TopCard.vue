<template>
    <div class="row text-center">
        <div class="col-5 text-center">
            <router-link :to="{
               name: 'item',
               params: {
                   id: id,
                   title: topItem.title.replace(' ', '_')
               },
            }">
                <img :src="topItem.image_url" alt="" class="img-thumbnail"/>
            </router-link>
        </div>
        <div class="col-5">
            <ul class="text-sm-left">
                <router-link :to="{
                   name: 'item',
                   params: {
                       id: id,
                       title: topItem.title.replace(' ', '_')
                   },
                }">
                    title: {{topItem.title}}
                </router-link>
                <li>author_name: {{topItem.author_name}}</li>
                <li>author_url: {{topItem.author_url}}</li>
                <li>comments: {{topItem.comments}}</li>
                <li>forum_url: {{topItem.forum_url}}</li>
                <li>intro: {{topItem.intro}}</li>
                <li>url: {{topItem.url}}</li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "TopCard",
        props: {
            topItem: {
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