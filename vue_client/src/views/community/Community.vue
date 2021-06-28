<template>
  <div>
    <h1 class="pt-5">Community</h1>
    <p>{{ review }}</p>
    <!-- Table -->
    <section class="col-10 mt-5" style="margin-left: auto; margin-right: auto;">
      <table class="table table-striped table-hover ">
        <thead>
          <tr class="table-dark">
            <th scope="col">글 제목</th>
            <th scope="col">영화 제목</th>
            <th scope="col">작성자</th>
            <th scope="col">작성일</th>
            <th scope="col">수정일</th>
            <th scope="col">댓글 수</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(review, idx) in reviews" :key="idx">
            <th scope="row" @click="getReview(review.id)">{{ review.title }}</th>
            <td>{{ review.movie_title}}</td>
            <td>{{ review.username }}</td>
            <td>{{ review.created_at.split('T')[0] }}     {{ review.created_at.split('T')[1].slice(0, 5) }}</td>
            <td>{{ review.updated_at.split('T')[0] }}     {{ review.updated_at.split('T')[1].slice(0, 5) }}</td>
            <td>{{ review.comment_count }}</td>
          </tr>
        </tbody>
      </table>
      <!-- 리뷰 작성 버튼 -->
      <div class="form-row float-left">
        <router-link :to="{ name: 'CreateReview' }" type="button" class="btn btn-outline-danger mt-3 pull-right">CreateReview</router-link> 
      </div>
    </section>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'


export default {
  name: 'Community',
  methods: {
    ...mapActions([
      'getReviews',
      'deleteReview',
      'createReview',
      'editReview',
      'getReview',
      'getUserInfomation'
    ]),
  },
  computed: {
    ...mapState([
      'reviews',
      'username',
    ])
  },
  created: function () {
    if (this.$store.getters.isLoggedIn) {
      this.getReviews()
      this.getUserInfomation()
    } else {
      this.$router.push({ name: 'Login'})
    }
  },
}
</script>

<style>

</style>