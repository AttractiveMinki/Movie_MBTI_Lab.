<template>
  <div>
    <h1>ReviewDetail</h1>
    <router-link :to="{ name: 'AdminUser' }">User</router-link> |
    <router-link :to="{ name: 'AdminMovie' }">Movie</router-link>
    <hr>
    <br>
    <div>
      Review Original data: {{ selectedReview }}
      <br>
    </div>
    <hr>
    <div>
      Comments: {{ selectedReview.comments }}
      <br>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'


export default {
  name: 'AdminReviewDetail',
    computed: {
    ...mapState([
      'selectedReview',
    ])
  },
}
</script>

<style>

</style>