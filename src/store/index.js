import Vue from 'vue'
import Vuex from 'vuex'
import newsStore from './newsStore'
import topStore from './topStore'
import listStore from './listStore'
import genre from "./genre";
import search from "./search"
Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        newsStore,
        topStore,
        listStore,
        genre,
        search
    }
})
