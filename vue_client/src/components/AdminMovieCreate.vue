<template>
  <div>
    <h1>MovieCreate</h1>
    <router-link :to="{ name: 'AdminUser' }">User</router-link> |
    <router-link :to="{ name: 'AdminMovie' }">Movie</router-link>
    <hr>
    <div>
      <div>
        <label for="title">Title: </label>
        <input type="text" id="title" v-model="fields.title" required>
      </div>
      <div>
        <label for="release_date">Release date: </label>
        <input type="date" id="release_date" v-model="fields.release_date" required>
      </div>
      <div>
        <label for="popularity">Popularity: </label>
        <input type="number" id="popularity" v-model="fields.popularity" required>
      </div>
      <div>
        <label for="rank">Rank: </label>
        <input type="number" id="rank" v-model="fields.rank" required>
      </div>
      <div>
        <label for="vote_count">Vote count: </label>
        <input type="number" id="vote_count" v-model="fields.vote_count" required>
      </div>
      <div>
        <label for="vote_average">Vote average: </label>
        <input type="number" id="vote_average" v-model="fields.vote_average" required>
      </div>
      <div>
        <label for="overview">Overview: </label>
        <input type="text" id="overview" v-model="fields.overview" required>
      </div>
      <div>
        <label for="poster_path">Poster path: </label>
        <input type="text" id="poster_path" v-model="fields.poster_path" required>
      </div>
      <div>
        genres: 
        <br>
        <div class="form-check form-check-inline">
          <input class="form-check-input" type="checkbox" id="adventure" value="Adventure" v-model="fields.genres">
          <label class="form-check-label" for="adventure">{{ genreList[0].name }}</label>
        </div>
        <div class="form-check form-check-inline">
          <input class="form-check-input" type="checkbox" id="fantasy" value="Fantasy" v-model="fields.genres">
          <label class="form-check-label" for="fantasy">{{ genreList[1].name }}</label>
        </div>
        <div class="form-check form-check-inline">
          <input class="form-check-input" type="checkbox" id="animation" value="Animation" v-model="fields.genres">
          <label class="form-check-label" for="animation">{{ genreList[2].name }}</label>
        </div>
        <div class="form-check form-check-inline">
          <input class="form-check-input" type="checkbox" id="drama" value="Drama" v-model="fields.genres">
          <label class="form-check-label" for="drama">{{ genreList[3].name }}</label>
        </div>
        <div class="form-check form-check-inline">
          <input class="form-check-input" type="checkbox" id="horror" value="Horror" v-model="fields.genres">
          <label class="form-check-label" for="horror">{{ genreList[4].name }}</label>
        </div>
        <div class="form-check form-check-inline">
          <input class="form-check-input" type="checkbox" id="action" value="Action" v-model="fields.genres">
          <label class="form-check-label" for="action">{{ genreList[5].name }}</label>
        </div>
        <div class="form-check form-check-inline">
          <input class="form-check-input" type="checkbox" id="comedy" value="Comedy" v-model="fields.genres">
          <label class="form-check-label" for="comedy">{{ genreList[6].name }}</label>
        </div>
        <div class="form-check form-check-inline">
          <input class="form-check-input" type="checkbox" id="history" value="History" v-model="fields.genres">
          <label class="form-check-label" for="history">{{ genreList[7].name }}</label>
        </div>
        <div class="form-check form-check-inline">
          <input class="form-check-input" type="checkbox" id="western" value="Western" v-model="fields.genres">
          <label class="form-check-label" for="western">{{ genreList[8].name }}</label>
        </div>
        <div class="form-check form-check-inline">
          <input class="form-check-input" type="checkbox" id="thriller" value="Thriller" v-model="fields.genres">
          <label class="form-check-label" for="thriller">{{ genreList[9].name }}</label>
        </div>
        <div class="form-check form-check-inline">
          <input class="form-check-input" type="checkbox" id="crime" value="Crime" v-model="fields.genres">
          <label class="form-check-label" for="crime">{{ genreList[10].name }}</label>
        </div>
        <div class="form-check form-check-inline">
          <input class="form-check-input" type="checkbox" id="documentary" value="Documentary" v-model="fields.genres">
          <label class="form-check-label" for="documentary">{{ genreList[11].name }}</label>
        </div>
        <div class="form-check form-check-inline">
          <input class="form-check-input" type="checkbox" id="scienceFiction" value="ScienceFiction" v-model="fields.genres">
          <label class="form-check-label" for="scienceFiction">{{ genreList[12].name }}</label>
        </div>
        <div class="form-check form-check-inline">
          <input class="form-check-input" type="checkbox" id="mystery" value="Mystery" v-model="fields.genres">
          <label class="form-check-label" for="mystery">{{ genreList[13].name }}</label>
        </div>
        <div class="form-check form-check-inline">
          <input class="form-check-input" type="checkbox" id="music" value="Music" v-model="fields.genres">
          <label class="form-check-label" for="music">{{ genreList[14].name }}</label>
        </div>
        <div class="form-check form-check-inline">
          <input class="form-check-input" type="checkbox" id="romance" value="Romance" v-model="fields.genres">
          <label class="form-check-label" for="romance">{{ genreList[15].name }}</label>
        </div>
        <div class="form-check form-check-inline">
          <input class="form-check-input" type="checkbox" id="family" value="Family" v-model="fields.genres">
          <label class="form-check-label" for="family">{{ genreList[16].name }}</label>
        </div>
        <div class="form-check form-check-inline">
          <input class="form-check-input" type="checkbox" id="war" value="War" v-model="fields.genres">
          <label class="form-check-label" for="war">{{ genreList[17].name }}</label>
        </div>
        <div class="form-check form-check-inline">
          <input class="form-check-input" type="checkbox" id="tVMovie" value="TVMovie" v-model="fields.genres">
          <label class="form-check-label" for="tVMovie">{{ genreList[18].name }}</label>
        </div>
      </div>
      <div>
        <label for="youtube_link">Youtube link: </label>
        <input type="text" id="youtube_link" v-model="fields.youtube_link" required>
      </div>  
      <button @click="createAdminMovieInformation(fields)">영화 생성</button>
    </div>
  
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'


export default {
  name: 'MovieCreate',
  data: function () {
    return {
      // 모든 데이터를 Vuex로 관리 할 필요는 없음
      // https://vuex.vuejs.org/guide/state.html#the-mapstate-helper
      fields: {
        title: '',
        release_date: '',
        popularity: '',
        rank: '',
        vote_count: '',
        vote_average: '',
        overview: '',
        poster_path: '',
        youtube_link: '',
        genres: [],
      }
    }
  },
  methods: {
    ...mapActions([
      'createAdminMovieInformation',
    ]),
  },
  computed: {
    ...mapState([
      'genreList',
    ])
  },
}
</script>

<style>

</style>