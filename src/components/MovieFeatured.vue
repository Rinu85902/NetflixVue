<template>
    <div class="main-container">
        <h2>Featured Movies</h2>
        <div class="card-wrapper">
            <div v-for="(liked, index) in allLiked" :key="index" class="card">
                <img :src="imgPath(liked.backdrop_path)">
                <div class="card-title">
                    {{ liked.original_title }}
                    <span>{{ liked.release_date }}</span>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import '../components/styles/movie-featured.css';
import { mapGetters } from 'vuex';
export default {
    data() {
        return {

        }
    },
    computed: {
        ...mapGetters(['allLiked']),

        imgBase() {
            return 'https://image.tmdb.org/t/p/original'
        }
    },
    methods: {
        imgPath(backdropPath) {
            return this.imgBase + backdropPath;
        }
    }




}
</script>