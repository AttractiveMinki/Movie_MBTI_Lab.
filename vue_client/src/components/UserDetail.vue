<template>
  <div>
    <h1>UserDetail</h1>
    <router-link :to="{ name: 'AdminUser' }">User</router-link> |
    <router-link :to="{ name: 'AdminMovie' }">Movie</router-link>
    <hr>
    {{ userInformationselect.username }} [고유 번호: {{ userInformationselect.id }}]
    <button type="button" class="btn btn-outline-primary mt-3" >
      <router-link :to="{ name: 'AdminCommunity' }">글 모음 보기</router-link>
    </button>
    <button type="button" class="btn btn-outline-danger mt-3" @click="deleteAdminUserInformation(userInformationselect.id)">삭제하기</button>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'UserChange',
  methods: {
    ...mapActions([
      'setAdminUserInformation',
      'deleteAdminUserInformation',
    ])
  },
  computed: {
    ...mapState([
      'userInformationselect',
    ]),
  },
}
</script>

<style>

</style>