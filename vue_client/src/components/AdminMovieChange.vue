<template>
  <div>
    <h1>AdminMovieChange</h1>
    <router-link :to="{ name: 'AdminUser' }">User</router-link> |
    <router-link :to="{ name: 'AdminMovie' }">Movie</router-link>
    <hr>
    <div>
      <div>
        <!-- id, rank는 수정하지 않음. -->
        title: <input type="text" value="movieInformationselect.title" v-model="items.title" required>
        <br>
        release_date: <input type="date" value="movieInformationselect.release_date" v-model="items.release_date" required>
        <br>
        popularity: <input type="number" value="movieInformationselect.popularity" v-model="items.popularity" required>
        <br>
        vote_count: <input type="text" value="movieInformationselect.vote_count" v-model="items.vote_count" required>
        <br>
        vote_average: <input type="text" value="movieInformationselect.vote_average" v-model="items.vote_average" required>
        <br>
        overview: <input type="text" value="movieInformationselect.overview" v-model="items.overview" required>
        <br>
        poster_path: <input type="text" value="movieInformationselect.poster_path" v-model="items.poster_path" required>
        <br>
        <div>

          genres: 
          <br>
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="checkbox" id="adventure" value="Adventure" v-model="items.genres">
            <label class="form-check-label" for="adventure">{{ genreList[0].name }}</label>
          </div>
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="checkbox" id="fantasy" value="Fantasy" v-model="items.genres">
            <label class="form-check-label" for="fantasy">{{ genreList[1].name }}</label>
          </div>
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="checkbox" id="animation" value="Animation" v-model="items.genres">
            <label class="form-check-label" for="animation">{{ genreList[2].name }}</label>
          </div>
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="checkbox" id="drama" value="Drama" v-model="items.genres">
            <label class="form-check-label" for="drama">{{ genreList[3].name }}</label>
          </div>
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="checkbox" id="horror" value="Horror" v-model="items.genres">
            <label class="form-check-label" for="horror">{{ genreList[4].name }}</label>
          </div>
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="checkbox" id="action" value="Action" v-model="items.genres">
            <label class="form-check-label" for="action">{{ genreList[5].name }}</label>
          </div>
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="checkbox" id="comedy" value="Comedy" v-model="items.genres">
            <label class="form-check-label" for="comedy">{{ genreList[6].name }}</label>
          </div>
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="checkbox" id="history" value="History" v-model="items.genres">
            <label class="form-check-label" for="history">{{ genreList[7].name }}</label>
          </div>
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="checkbox" id="western" value="Western" v-model="items.genres">
            <label class="form-check-label" for="western">{{ genreList[8].name }}</label>
          </div>
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="checkbox" id="thriller" value="Thriller" v-model="items.genres">
            <label class="form-check-label" for="thriller">{{ genreList[9].name }}</label>
          </div>
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="checkbox" id="crime" value="Crime" v-model="items.genres">
            <label class="form-check-label" for="crime">{{ genreList[10].name }}</label>
          </div>
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="checkbox" id="documentary" value="Documentary" v-model="items.genres">
            <label class="form-check-label" for="documentary">{{ genreList[11].name }}</label>
          </div>
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="checkbox" id="scienceFiction" value="ScienceFiction" v-model="items.genres">
            <label class="form-check-label" for="scienceFiction">{{ genreList[12].name }}</label>
          </div>
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="checkbox" id="mystery" value="Mystery" v-model="items.genres">
            <label class="form-check-label" for="mystery">{{ genreList[13].name }}</label>
          </div>
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="checkbox" id="music" value="Music" v-model="items.genres">
            <label class="form-check-label" for="music">{{ genreList[14].name }}</label>
          </div>
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="checkbox" id="romance" value="Romance" v-model="items.genres">
            <label class="form-check-label" for="romance">{{ genreList[15].name }}</label>
          </div>
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="checkbox" id="family" value="Family" v-model="items.genres">
            <label class="form-check-label" for="family">{{ genreList[16].name }}</label>
          </div>
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="checkbox" id="war" value="War" v-model="items.genres">
            <label class="form-check-label" for="war">{{ genreList[17].name }}</label>
          </div>
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="checkbox" id="tVMovie" value="TVMovie" v-model="items.genres">
            <label class="form-check-label" for="tVMovie">{{ genreList[18].name }}</label>
          </div>
        </div>
        <br>
        youtube_link: <input type="text" value="movieInformationselect.youtube_link" v-model="items.youtube_link" required>
      </div>
      <button type="button" class="btn btn-outline-primary mt-3" @click="updateAdminMovieInformation(items)">영화 정보 수정</button>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'


export default {
  name: 'AdminMovieChange',
  data: function () {
    return {
      // 모든 데이터를 Vuex로 관리 할 필요는 없음
      // https://vuex.vuejs.org/guide/state.html#the-mapstate-helper
      items: {
        title: this.$store.state.movieInformationselect.title,
        release_date: this.$store.state.movieInformationselect.release_date,
        popularity: this.$store.state.movieInformationselect.popularity,
        vote_count: this.$store.state.movieInformationselect.vote_count,
        vote_average: this.$store.state.movieInformationselect.vote_average,
        overview: this.$store.state.movieInformationselect.overview,
        poster_path: this.$store.state.movieInformationselect.poster_path,
        // genres: this.$store.state.movieInformationselect.genres,
        genres: [],
        youtube_link: this.$store.state.movieInformationselect.youtube_link,
        id: this.$store.state.movieInformationselect.id,
        rank: this.$store.state.movieInformationselect.rank,
      }
    }
  },
  computed: {
    ...mapState([
      'movieInformationselect',
      'genreList',
    ]),
  },
  methods: {
    ...mapActions([
      'updateAdminMovieInformation',
    ]),
  },
}
</script>

<style>

</style>