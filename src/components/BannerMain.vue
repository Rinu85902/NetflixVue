<template>
    <div>
        <div class="banner-wrapper">
            <div class="banner">
                <img :src="bannerUrl(currentBanner.backdrop_path)" alt="testtttttttt" />
                <!-- {{ (bannerUrl(currentBanner.backdrop_path)) }} -->
                <div class="banner_over">
                    <h1 class="title">{{ currentBanner.original_title }}</h1>
                    <div class="btn-wrapper">
                        <button class="btn" @click="showPrev">View Previous</button>
                        <button class="btn" @click="showNext">View Next</button>
                    </div>
                    <p class="description">{{ currentBanner.overview }}</p>
                </div>
            </div>
            <div class="fade-bottom"></div>
        </div>

    </div>
</template>

<script>
import '../components/styles/banner.css';
import { mapState } from 'vuex';
export default {
    data() {
        return {
            currentIndex: 0
        }
    },
    computed: {
        ...mapState(['movies']),
        bannerBase() {
            return 'https://image.tmdb.org/t/p/original'
        },
        currentBanner() {
            return this.movies[this.currentIndex] || {}
        }
    },
    methods: {
        bannerUrl(imgPath) {
            return this.bannerBase + imgPath;

        },
        showNext() {
            this.currentIndex = (this.currentIndex + 1)
        },
        showPrev() {
            this.currentIndex = (this.currentIndex - 1)
        }
    }

}
</script>