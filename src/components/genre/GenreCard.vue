<template>
    <div>
        <h3>
            <router-link :to="{
                    name: 'item',
                    params: {
                        title: item.title.replace(' ', '_'),
                        id: item.mal_id
                    }
                    }">
                {{item.title}}
            </router-link>
        </h3>
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