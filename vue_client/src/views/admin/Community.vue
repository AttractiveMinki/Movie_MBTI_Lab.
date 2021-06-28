<template>
  <div>
    <h1>User Log</h1>
    <router-link :to="{ name: 'AdminUser' }">User</router-link> |
    <router-link :to="{ name: 'AdminMovie' }">Movie</router-link> |
    <router-link :to="{ name: 'AdminCommunity' }">Community</router-link>
    <hr>
    <tr v-for="(review, idx) in reviews" :key="idx">
      {{ review }}
      {{ review.id }}
      <button type="button" class="btn btn-outline-danger mt-3" @click="getAdminReviewInformation(review.id)">글 상세정보</button>
    </tr>
    반가워
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'


export default {
  name: 'Community',
  computed: {
    ...mapState([
      'reviews',
    ]),
  },  
  methods: {
    ...mapActions([
      'getReviews',
      'getAdminReviewInformation',
    ]),
  },
  mounted: function () {
    this.getReviews()
  },
}
</script>

<style>

</style>