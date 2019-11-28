<template>
    <div class="item-card">
        <div class="row">
            <div class="col-6">
                <img :src="item.image_url" alt="">
            </div>
            <div class="col-6">
                <h2><a :href="item.url">{{item.title}}</a></h2>
                <ul class="text-left">
                    <li class="authors"> Authors:
                        <a :href="item.author_url">
                            {{item.author_name}}
                        </a>
                    </li>
                    <li class="forum">Forum:
                        <a :href="item.forum_url">
                            {{item.forum_url}}
                        </a>
                    </li>
                    <li class="comments">
                        comments: {{item.comments}}
                    </li>

                </ul>
                <div class="synopsis text-left">
                    <h5>intro:</h5>
                    {{item.intro}}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "NewsItem",
        computed: {
            item() {
                return this.$route.params.item;
            }
        },
    }
</script>

<style scoped>

</style>