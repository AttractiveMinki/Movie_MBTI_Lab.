<template>
  <div>
    <div class="card mb-2 mt-5 col-8 mx-auto">
      <div class="card-header bg-light">
        <i class="fa fa-pencil" aria-hidden="true"></i> REVIEW
      </div>
      <div class="card-body">
        <ul class="list-group list-group-flush">
            <li class="list-group-item">
              <div class="form-inline mb-2">
                <input type="text" class="form-control ml-2 mb-2" placeholder="게시글 제목" v-model="reviewTitle">
                <input type="test" class="form-control ml-2 mb-2" placeholder="영화 제목" v-model="reviewMovie">
              </div>
              <textarea class="form-control" placeholder="내용" id="exampleFormControlTextarea1" rows="3" type="text" v-model="reviewContent" @keypress.enter="createComment"></textarea>
              <button type="button" class="btn btn-dark mt-3" @click="createReview">post review</button>
            </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'CreateReview',
  data: function () {
    return {
      reviewTitle: '',
      reviewContent: '',
      reviewMovie: '',
    }
  },
  methods: {
    createReview: function () {
      let today = new Date()
      const Review = {
        title: this.reviewTitle,
        content: this.reviewContent,
        movie_title: this.reviewMovie,
        username: this.username,
        user: this.userid,
        rank: 1,
        created_at: today,
        updated_at: today,
        like_users: 1,
      }
      if (Review.title.trim()) {
        this.$store.dispatch('createReview', Review)
      }
      this.reviewTitle = ''
      this.reviewContent = ''
      this.reviewMovie = ''
    },
  },
  computed: {
    ...mapState([
      'username',
      'userid',
    ])
  },
}
</script>

<style>

</style>
