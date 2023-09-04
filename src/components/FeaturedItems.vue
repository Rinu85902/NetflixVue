<template>
    <div>
        <div class="posters">
            <carousel v-bind="carouselOptions" :key="owlKey">
                <img v-for="(movie, index) in movies" :key="index" class="featured-wrap"
                    :src="imgPath(movie.backdrop_path)" />
            </carousel>

        </div>
    </div>
</template>

<script>
import '../components/styles/featured-products.css';
import { mapState } from 'vuex';
import carousel from 'vue-owl-carousel';
// const imgPath = 'https://api.themoviedb.org/3';
export default {
    components: {
        carousel
    },
    data() {
        return {
            carouselOptions: {
                loop: true,
                margin: 10,
                nav: false,
                responsive: {
                    0: {
                        items: 5,
                    },
                    600: {
                        items: 10,
                    },
                    1000: {
                        items: 10,
                    }
                },
            },
            owlKey: 0
        }
    },
    mounted() {
        this.$store.dispatch('fetchProducts');

    },
    watch: {
        movies: function () {
            this.$nextTick(() => {
                this.owlKey++;
            })
        }
    },
    methods: {
        imgPath(backdroppath) {
            console.log(backdroppath, "BACKDROPPATH")
            return this.imgBase + backdroppath
        },



    },
    computed: {
        ...mapState(['movies']),
        // ...mapGetters(['allFeatured'])

        imgBase() {
            return 'https://image.tmdb.org/t/p/original'
        }
    },

}
</script>
