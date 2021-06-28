<template>
    <div class="col mb-4 d-inline-block">
      <div class="card" style="width: 18rem;">
        <img v-bind:src="'https://image.tmdb.org/t/p/w500/' + movieInformation.poster_path" class="img-fluid">
        <button type="button" class="btn btn-outline-danger mt-3" @click="getAdminMovieInformation(movieInformation.id)">상세정보</button>
        <div class="card-body">
          <h5 class="card-title">{{ movieInformation.title }}</h5>
          <h5 class="card-text">{{ movieInformation.overview }}</h5>
        </div>
      </div>  
    </div>
</template>

<script>
import { mapActions } from 'vuex'


export default {
  name: 'AdminMovieCard',
  props: {
    movieInformation: Object,
  },
  methods: {
    ...mapActions([
      'getAdminMovieInformation',
    ]),
  },
}
</script>

<style>

</style>