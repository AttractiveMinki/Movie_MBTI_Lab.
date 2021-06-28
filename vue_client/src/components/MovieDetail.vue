<template>
  <div>
    <h1 class="pt-5 pb-5">Movie Detail</h1>
    <div id="main" class="mx-auto pt-5 pb-5 mb-5">
      <h1 class="pt-3">{{ selectedMovie.title }}</h1>
      <h5 class="pb-5">({{ selectedMovie.release_date }})</h5>
      <div class="video-detail" style="height: auto" v-if="$store.state.selectedMovie">
        <div class="video-container" style="height: 750px">
          <iframe :src="`https://www.youtube.com/embed/${selectedMovie.youtube_link.split('=')[1]}`" frameborder="0" class="w-75 h-75"></iframe>
        </div>
      </div>

      <form class="d-flex col-11 mx-auto">
        <img v-bind:src="'https://image.tmdb.org/t/p/w500/' + selectedMovie.poster_path" class="img-fluid d-flex px-5 mx-5" style="height: 100%">
        <form class="mx-auto">
          <h5 class="mt-3 mb-5">평점: {{ selectedMovie.vote_average}} / {{selectedMovie.vote_count}}명 참여</h5>
          <div class="mx-auto">
            평점 등록하기
            <div class="star-rating space-x-4 mx-auto mt-1 mb-3">
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
            <br>
            <div class="col-8 mx-auto">
              <input type="text" required placeholder="제목을 입력해주세요" v-model="values.title">
              <input 
              class="form-control col-4" type="text" id="username" v-model="values.content" required placeholder="감상평을 남겨주세요"
              @keypress.enter="createMovieComment(values)"
              >
            </div>
            <br>
            <button class="btn btn-outline-success mb-3" type="flat" icon="done" @click="createMovieComment(values)"> 감상평 입력</button>
            <hr>
            <div style="line-height:15px">
              <h6 class="video-container d-inline-block mt-3 mb-3" style="width:75%">{{ selectedMovie.overview }}</h6>
            </div>
            <hr>
            <div>
              {{ selectedMovie.review_count }}개의 평가가 있습니다.
              <hr>
              <div style="overflow:auto; height: 300px">
                <ul v-for="(review, idx) in selectedMovie.reviews" :key="idx">
                  {{ review.rank }}점 
                  <div class="star-gold space-x-4 mx-auto mb-3">
                    <div v-if="review.rank == 5">
                      <label>★★★★★</label>
                    </div>
                    <div v-if="review.rank == 4">
                      <label>★★★★</label>
                    </div>
                    <div v-if="review.rank == 3">
                      <label>★★★</label>
                    </div>
                    <div v-if="review.rank == 2">
                      <label>★★</label>
                    </div>
                    <div v-if="review.rank == 1">
                      <label>★</label>
                    </div>
                  </div>

                  {{ review.content }}
                  <div v-if="review.username == username">
                    <button type="button" class="btn btn-outline-primary mt-3" data-bs-toggle="modal" data-bs-target="#exampleModalchange" @click="SET_SELECTED_MOVIE_TO_CHANGE_REVIEW(review)">
                      댓글 수정
                    </button>

                    <button type="button" class="btn btn-outline-danger mt-3" data-bs-toggle="modal" data-bs-target="#exampleModaldelete" @click="SET_SELECTED_MOVIE(review)">
                      댓글 삭제
                    </button>

                    <!-- Modal -->
                    <div class="modal fade" id="exampleModaldelete" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                      <div class="modal-dialog">
                        <div class="modal-content">
                          <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                          </div>
                          <div class="modal-body">
                            정말 댓글을 삭제하시겠습니까?
                          </div>
                          <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">취소</button>
                            <button type="button" class="btn btn-primary" data-bs-dismiss="modal" aria-label="Close" @click="deleteMovieComment(selectedMovieReview)">댓글 삭제</button>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                  <br>
                  <br>
                </ul>
              </div>
            </div>
          </div>
        </form>
      </form>
      <br>
      <button @click="goBack" type="button" class="btn btn-outline-danger mt-3">BACK</button>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex'

export default {
  name: 'MovieDetail',
  data: function () {
    return {
      // 모든 데이터를 Vuex로 관리 할 필요는 없음
      // https://vuex.vuejs.org/guide/state.html#the-mapstate-helper
      values: {
        username: this.$store.state.username,
        title: '',
        content: '',
        rank: '',
        }
      }
    },
  methods: {
    ...mapActions([
      'createMovieComment',
      'deleteMovieComment',
      'setSelectedMovie',
    ]),
    ...mapMutations([
      'SET_SELECTED_MOVIE_TO_CHANGE_REVIEW',
      'SET_SELECTED_MOVIE',
    ]),
    goBack(){
      this.$router.go(-1); [2]
    },
  },
  computed: {
    ...mapState([
      'selectedMovie',
      'username',
      'selectedMovieReview',
    ])
  },
  mounted: function () {
    this.getMovieDetail
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

.star-gold {
  display: flex;
  flex-direction: row-reverse;
  font-size: 2.25rem;
  line-height: 2.5rem;
  justify-content: space-around;
  padding: 0 0.2em;
  text-align: center;
  width: 5em;
  -webkit-text-fill-color: gold;
}
</style>