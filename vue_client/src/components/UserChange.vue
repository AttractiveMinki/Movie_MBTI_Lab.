<template>
<!-- 넘겨줄 때 유저 id 같이 넘겨주면 끝 -->
  <div>
    <h1>UserChange</h1>
    <router-link :to="{ name: 'AdminUser' }">User</router-link> |
    <router-link :to="{ name: 'AdminMovie' }">Movie</router-link>
    <hr>
    {{ userInformationselect }}
    <router-link :to="{ name: 'AdminUser' }">뒤로 가기</router-link>
    <div class="form-group">
      <label for="username">User Name</label>
      <input type="text" id="username" class="form-control form-control-lg" v-model="information.username" />
    </div>

    <div class="form-group">
      <label for="password">Password</label>
      <input 
        type="password"
        id="password"
        class="form-control form-control-lg"
        v-model="informtaion.password"
        @keypress.enter="setAdminUserInformation(information)" 
      />
    </div>

    <button class="btn btn-dark btn-lg btn-block" @click="setAdminUserInformation(information)">Login</button>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'


export default {
  name: 'UserChange',
  data: function () {
    return {
      information: {
        username: '',
        password: '',
      }
    }
  },
  methods: {
    ...mapActions([
      'setAdminUserInformation',
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