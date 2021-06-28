<template>
  <div>
    <h1>ReviewChange</h1>
    <div>영화 제목: <input type="text" value="selectedReview.movie_title" v-model="items.movie_title" required></div>
    <div>제목: <input type="text" value="selectedReview.title" v-model="items.title" required></div>
    <div>내용: <input type="text" value="selectedReview.content" v-model="items.content" required></div>
    <button @click="editReview(items)" class="btn btn-outline-primary mt-3">수정하기</button> 
    
    <div>생성 시간: {{ selectedReview.created_at.split('T')[0] }}     {{ selectedReview.created_at.split('T')[1].slice(0, 5) }}</div>
    <div>수정 시간: {{ selectedReview.updated_at.split('T')[0] }}     {{ selectedReview.updated_at.split('T')[1].slice(0, 5) }}</div>

  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'


export default {
  name: 'ReviewChange',
  data: function () {
    return {
      
      // 모든 데이터를 Vuex로 관리 할 필요는 없음
      // https://vuex.vuejs.org/guide/state.html#the-mapstate-helper
      items: {
        id: this.$store.state.selectedReview.id,
        title: this.$store.state.selectedReview.title,
        content: this.$store.state.selectedReview.content,
        created_at: this.$store.state.selectedReview.created_at,
        updated_at: '',
        user: this.$store.state.selectedReview.user,
        movie_title: this.$store.state.selectedReview.movie_title,
        username: this.$store.state.selectedReview.username,
      }
    }
  },
  methods: {
    ...mapActions([
      'editReview',
      'deleteReview',
    ]),
  },
  computed: {
    ...mapState([
      'selectedReview',
      'userid',
    ])
  },
}
</script>

<style>

</style>