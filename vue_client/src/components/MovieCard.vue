<template>
  <div class="col mb-4 d-inline-block">
    <div class="card" style="width: 18rem; height: 30rem;">
      <img v-bind:src="'https://image.tmdb.org/t/p/w500/' + movie.poster_path" class="img-fluid" style="height: 400px;" @click="getMovieDetail(movie.id)" onClick="javascript:window.scrollTo(0,0)">
      <div class="card-body d-flex">
        <h5 class="card-title mx-auto my-auto">{{ movie.title }}</h5>
      </div>
    </div>  
  </div>
</template>

<script>
import { mapActions } from 'vuex'


export default {
  props: {
    movie: Object,
  },
  methods: {
    ...mapActions([
      'getMovieDetail',
    ]),
  },
}
</script>

<style>
</style>