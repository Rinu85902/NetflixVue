<template>
    <div class="main-container">
        <h2>Featured Movies</h2>
        <div class="card-wrapper">
            <div v-for="(liked, index) in allLiked" :key="index" class="card">
                <img :src="imgPath(liked.backdrop_path)">
                <div class="card-title">
                    {{ liked.original_title }}
                    <div class="d-flex">
                        <span>{{ liked.release_date }}</span>
                        <a class="fav" @click="featuredMovie(liked)">
                            <span class="fav-btn">{{ favText }}</span>
                        </a>
                    </div>
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
            favTrue: false,
            favText: "Click to FAV"
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
        },
        featuredMovie(fav) {
            const options = {
                method: 'POST',
                headers: {
                    accept: 'application/json',
                    'content-type': 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YWQ4NmZhMmY2MmNkYjE2ZDY5ZTE3NjNmYjY0NDQyMCIsInN1YiI6IjYzMzc0NTFmZDM2M2U1MDA3YTMwN2JmOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nHAn9h0MxaKXiUfyjwNawN-R7T2rPDVeeJXvKJ2-qFk'
                },
                body: JSON.stringify(
                    { media_type: 'movie', media_id: fav.id, favorite: true })
            };

            fetch('https://api.themoviedb.org/3/account/15044575/favorite', options)
                .then(response => response.json())
                .then(response => {
                    console.log(response, "statts");
                    if (response.success) {
                        this.favTrue = true
                        console.log(this.favTrue);
                        this.favText = "FAV"
                    }

                }

                )
                .catch(err => console.error(err));
            console.log(options, "OPTIONS");

        }
    }




}
</script>
