import Vue from 'vue'
import Vuex from 'vuex'
import NewsApi from "../services/api/news-api";
import axios from "axios";
import newsStore from './newsStore'
import topStore from './topStore'
import listStore from './listStore'
Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        newsStore,
        topStore,
        listStore
    }
})
