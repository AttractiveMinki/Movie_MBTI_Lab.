<template>
  <div class="signup">
    <h1>Signup</h1>
    <div class="m-3">
      <label for="username" class="mx-3 mt-2">사용자 이름 </label>
      <input type="text" id="username" class="form-control form-control-lg" v-model="credentials.username">
    </div>
    <div class="m-3">
      <label for="password" class="mx-3 mt-2">비밀번호 입력</label>
      <input type="password" id="password" class="form-control form-control-lg" v-model="credentials.password">
    </div>
    <div class="m-3">
      <label for="passwordConfirmation" class="mx-3 mt-2">비밀번호 확인 </label>
      <input 
        type="password" 
        id="passwordConfirmation" 
        class="form-control form-control-lg"
        v-model="credentials.passwordConfirmation"
        @keypress.enter="signup(credentials)"
      >
    </div>
    <button class="btn btn-dark btn-lg btn-block mt-5" @click="signup(credentials)">회원가입</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Signup',
  data: function () {
    return {
      // 모든 데이터를 Vuex로 관리 할 필요는 없음
      // https://vuex.vuejs.org/guide/state.html#the-mapstate-helper
      credentials: {
        username: '',
        password: '',
        passwordConfirmation: '',
      }
    }
  },
  methods: {
    ...mapActions([
      'signup',
    ])
  }
}
</script>

<style scoped>
  .signup {
    border: 1px solid black;
    border-radius: 5px;
    padding: 1.5rem;
    width: 400px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 30px;
    position: relative;
    overflow: hidden;
    }
</style>