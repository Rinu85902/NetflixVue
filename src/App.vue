<template>
  <div id="app">
    <HeaderMain />
    <BannerMain />
    <FeaturedItems />
    <MovieFeatured />
  </div>
</template>

<script>
import HeaderMain from './components/HeaderMain.vue';
import BannerMain from './components/BannerMain.vue';
import FeaturedItems from './components/FeaturedItems.vue';
import MovieFeatured from './components/MovieFeatured.vue';
export default {
  name: 'App',
  components: {
    HeaderMain,
    BannerMain,
    FeaturedItems,
    MovieFeatured
  }
}
</script>

<style>
body {
  background-color: #111;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: 0;
  border: 0;

}
</style>
