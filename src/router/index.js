import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Anime from "../views/Anime";
import Manga from "../views/Manga";
import Genre from "../views/Genre";
import Item from "../views/Item";

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
            addNav: import('@/views/Nav.vue')
        }
    },
    {
        path: '/anime-genre/:id',
        name: 'anime-genre',
        components: {
            default: Genre,
            addNav: import('@/views/Nav.vue')
        }
    },
    {
        path: '/:title/:id',
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
        }
    }
]


const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
