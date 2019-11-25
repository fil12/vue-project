import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Anime from "../views/Anime";
import Manga from "../views/Manga";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        components: {
            default: Home,
            addNav: import('@/views/Nav.vue')
        }
    },
    {
        path: '/anime',
        name: 'anime',
        components: {
            default: Anime,
        },
        children: [{
            path: '/anime-genre/:id',
            name: 'anime-genre',
        }],
    },

    {
        path: '/item/:id',
        name: 'item',
        component() {
            return import('@/views/Item.vue')
        }
    },
    {
        path: '/manga',
        name: 'manga',
        components: {
            default: Manga,
            addNav: import('@/views/Nav.vue')
        },
        children: [{
            path: '/manga-genre/:id',
            name: 'manga-genre',
        }],
    },
    {
        path: '/search',
        name: 'search',
        component() {
            return import('@/views/Search.vue')
        }
    },
]


const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
