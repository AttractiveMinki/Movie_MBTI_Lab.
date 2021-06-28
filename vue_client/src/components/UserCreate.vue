<template>
  <div>
    <h1>UserCreate</h1>
    <router-link :to="{ name: 'AdminUser' }">User</router-link> |
    <router-link :to="{ name: 'AdminMovie' }">Movie</router-link>
    <hr>
    <div>
      <div>
      <label for="username">사용자 이름: </label>
      <input type="text" id="username" v-model="items.username" required>
      </div>
    <div>
      <label for="password">비밀번호: </label>
      <input type="password" id="password" v-model="items.password" required>
    </div>
    <div>
      <label for="passwordConfirmation">비밀번호 확인: </label>
      <input 
        type="password" 
        id="passwordConfirmation" 
        v-model="items.passwordConfirmation"
        @keypress.enter="createAdminUserInformation(items)"
        required
      >
    </div>
    <button @click="createAdminUserInformation(items)">회원생성</button>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'


export default {
  name: 'UserCreate',
  data: function () {
    return {
      // 모든 데이터를 Vuex로 관리 할 필요는 없음
      // https://vuex.vuejs.org/guide/state.html#the-mapstate-helper
      items: {
        username: '',
        password: '',
        passwordConfirmation: '',
      }
    }
  },
  methods: {
    ...mapActions([
      'createAdminUserInformation',
    ]),
  },
}
</script>

<style>

</style>