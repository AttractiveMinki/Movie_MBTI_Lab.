<template>
  <div>
    <h1>ReviewCommentChange</h1>
    <br>
    comment: <input type="text" v-model="items.content" required>
    <button @click="ChangeReviewComment(items)" class="btn btn-outline-primary mt-3 mb-3 ms-1">수정하기</button>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'


export default {
  name:'ReviewCommentChange',
  data: function () {
    return {
      // 모든 데이터를 Vuex로 관리 할 필요는 없음
      // https://vuex.vuejs.org/guide/state.html#the-mapstate-helper
      items: {
        id: this.$store.state.selectedReviewComment.id,
        review: this.$store.state.selectedReviewComment.review,
        user: this.$store.state.selectedReviewComment.user,
        content: this.$store.state.selectedReviewComment.content,
        username: this.$store.state.selectedReviewComment.username,
        created_at: this.$store.state.selectedReviewComment.created_at,
        updated_at: '',
      },
    }
  },
  methods: {
    ...mapActions([
      'ChangeReviewComment',
    ]),
  },
  computed: {
  ...mapState([
    'selectedReviewComment',
    'selectedReview',
  ])
},
}
</script>

<style>

</style>