<template>
    <div class="home">
        <div class="container">
            <h2>News</h2>
            <div class="row">
                <div class="col-6 anime-news news-block">
                    <anime-news/>
                </div>
                <div class="col-6 manga-news news-block">
                    <manga-news/>
                </div>
            </div>
            <h2>Top</h2>
            <div class="row">
                <div class="col-6 anime-news">
                    <anime-top/>
                </div>
                <div class="col-6 manga">
                    <manga-top/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import AnimeNews from '../components/news/AnimeNews'
    import MangaNews from '../components/news/MangaNews'
    import AnimeTop from "../components/top/AnimeTop";
    import MangaTop from "../components/top/MangaTop";

    export default {
        name: "Home",
        components: {
            AnimeNews,
            MangaNews,
            AnimeTop,
            MangaTop
        },

    }
</script>

<style lang="css">
    .anime-news {
        border-right: #000 2px solid;
    }
    .news-block {
        padding: 3vh 10vw;
    }
</style>