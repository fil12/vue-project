<template>
    <div class="item-card">
        <div class="row">
            <div class="col-6">
                <img :src="item.image_url" alt="">
            </div>
            <div class="col-6">
                <h2><a :href="item.url">{{item.title}}</a></h2>
                <ul class="text-left">
                    <li class="members">
                        members: {{item.members}}
                    </li>
                    <li class="start_date">
                        start date: {{item.start_date}}
                    </li>
                    <li class="end_date">
                        end date: {{item.end_date}}
                    </li>
                    <li class="score">
                        score: {{item.score}}
                    </li>
                    <li class="episodes">
                        episodes: {{item.episodes}}
                    </li>
                    <li class="type">
                        type: {{item.type}}
                    </li>
                    <li class="rank">
                        rank: {{item.rank}}
                    </li>
                </ul>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "TopItem",
        computed: {
            item() {
                return this.$route.params.item;
            }
        },
    }
</script>

<style scoped>

</style>