<template>
    <div class="row">
        <div class="search text-center co-6 offset-5">
            <h2>Search</h2>
            <form @submit.prevent="search">
                <div class="form-group">
                    <p>Type: </p>
                    <select class="custom-select" v-model="searchModel.type" required>
                        <option :value="i" v-for="(type, i) in types" :key="'type_'+i">{{type.title}}</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="query">Search:</label>
                    <input
                        type="text"
                        placeholder="Enter your query"
                        class="form-control" id="query"
                        v-model="searchModel.query"
                        required
                    >
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
        <hr>
        <div class="search-results row" v-if="isLoaded">
            <div class="col-4" v-for="(result, i) in searchResults" :key="`card_`+i">
                <genre-card :item="result" />
            </div>
        </div>
    </div>
</template>

<script>
import GenreCard from "../components/genre/GenreCard";
import {mapGetters} from 'vuex';

export default {
    name: "Search",
    components: {
        GenreCard
    },
    data() {
        return {
            types: {
                anime: {
                    title: 'Anime',
                    selected: true
                },
                manga: {
                    title: 'Manga',
                    selected: false
                }
            },
            searchModel: {
                type: {
                    type: String,
                    required: true,
                    default: 'anime'
                },
                query: null
            }
        };
    },
    computed: {
        ...mapGetters('search', {
            searchResults: 'searchResults',
            isLoaded: 'isLoaded'
        })
    },
    methods: {
        search() {
            this.$store.dispatch('search/isLoadedToFalse');
            this.$store.dispatch('search/getSearchResults', this.searchModel);
            this.searchResults;
        }
    }
};
</script>

<style scoped>

</style>