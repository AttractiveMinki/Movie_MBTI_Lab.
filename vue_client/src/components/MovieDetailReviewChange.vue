<template>
  <div>
    <h1>MovieDetailReviewChange</h1>
    <!-- <img :src="youtubeImageSrc" alt="youtube-thumbnail-image"> -->
    <div>
      <hr>
      내 점수:
      <div class="star-rating space-x-4 mx-auto">
        <input type="radio" id="5-stars" name="rank" value="5" v-model="values.rank"/>
        <label for="5-stars" class="star pr-4">★</label>
        <input type="radio" id="4-stars" name="rank" value="4" v-model="values.rank"/>
        <label for="4-stars" class="star">★</label>
        <input type="radio" id="3-stars" name="rank" value="3" v-model="values.rank"/>
        <label for="3-stars" class="star">★</label>
        <input type="radio" id="2-stars" name="rank" value="2" v-model="values.rank"/>
        <label for="2-stars" class="star">★</label>
        <input type="radio" id="1-star" name="rank" value="1" v-model="values.rank"/>
        <label for="1-star" class="star">★</label>
      </div>
      <input type="text" required placeholder="제목을 입력해주세요" v-model="values.title">
      <br>
      <div>
        <input 
        type="text" id="values.content" v-model="values.content" required placeholder="감상평을 남겨주세요"
        @keypress.enter="updateMovieComment(values)"
        >
      </div>
      
      <br>
      <button @click="updateMovieComment(values)">감상평 입력</button>
      <hr>

    </div>
    <br>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'


export default {
  name: 'MovieDetailReviewChange',
  data: function () {
    return {
      // 모든 데이터를 Vuex로 관리 할 필요는 없음
      // https://vuex.vuejs.org/guide/state.html#the-mapstate-helper
      values: {
        id: this.$store.state.selectedMovieReview.id,
        title: this.$store.state.selectedMovieReview.title,
        content: this.$store.state.selectedMovieReview.content,
        username: this.$store.state.selectedMovieReview.username,
        rank: this.$store.state.selectedMovieReview.rank,
        }
      }
    },
  methods: {
    ...mapActions([
      'getMovieDetail',
      'createMovieComment',
      'updateMovieComment',
    ]),
  },
  computed: {
    ...mapState([
      'selectedMovieReview',
    ])
  },
}
</script>

<style>
.star-rating {
  display: flex;
  flex-direction: row-reverse;
  font-size: 2.25rem;
  line-height: 2.5rem;
  justify-content: space-around;
  padding: 0 0.2em;
  text-align: center;
  width: 5em;
}
 
.star-rating input {
  display: none;
}
 
.star-rating label {
  -webkit-text-fill-color: transparent; /* Will override color (regardless of order) */
  -webkit-text-stroke-width: 2.3px;
  -webkit-text-stroke-color: #2b2a29;
  cursor: pointer;
}
 
.star-rating :checked ~ label {
  -webkit-text-fill-color: gold;
}
 
.star-rating label:hover,
.star-rating label:hover ~ label {
  -webkit-text-fill-color: #fff58c;
}
</style>