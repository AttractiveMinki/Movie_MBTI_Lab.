<template>
  <div>
    <h1>Admin</h1>
    <router-link :to="{ name: 'AdminUser' }">User</router-link> |
    <router-link :to="{ name: 'AdminMovie' }">Movie</router-link>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Admin',
  methods: {
    ...mapActions([
      'goAdmin',
    ]),
  },
  mounted: function () {
    this.goAdmin()
  },
}
</script>

<style>

</style>