<template>
  <div>
    <header>
      <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
        <ol class="carousel-indicators">
          <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active"></li>
          <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"></li>
          <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"></li>
        </ol>

        <div class="carousel-inner">
          <div class="carousel-item active">
            <img class="d-block w-100" src="../../../img/header1.png" alt="First slide">
            <div class="carousel-caption d-none d-md-block">
              <h5>La La Land</h5>
              <p>2016 American romantic musical film written and directed by Damien Chazelle</p>
            </div>
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src="../../../img/header2.png" alt="Second slide">
            <div class="carousel-caption d-none d-md-block">
              <h5>Little Women</h5>
              <p>2019 American coming-of-age period drama film written and directed by Greta Gerwig</p>
            </div>
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src="../../../img/header3.png" alt="Third slide">
            <div class="carousel-caption d-none d-md-block">
              <h5>The Great Gatsby</h5>
              <p>2013 romantic drama film based on F. Scott Fitzgerald's 1925 novel of the same name</p>
            </div>
          </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </a>      
      </div>      
    </header>
    <h1 class="pt-5 pb-5 mt-5 mb-5">Home</h1>
    <div class="col-10 mx-auto">
      <MovieCard
        v-for="(movie, idx) in movies" 
        :key="idx"
        :movie="movie"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState, mapActions } from 'vuex'
import MovieCard from '@/components/MovieCard.vue'

export default {
  name: 'Home',
  data() {
    return {
      rows: 100,
      currentPage: 1
    }
  },
  components: {
    MovieCard
  },
  methods: {
    ...mapActions([
      'getMovies',
    ]),

  },
  computed: {
    ...mapGetters([
      'isLoggedIn',
    ]),
    ...mapState([
      'username',
      'movies',
    ]),
  },
  mounted: function () {
    this.getMovies()
  },
}

</script>

<style>

</style>