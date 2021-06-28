<template>
  <div class="login">
    <form>
      <h1 class="mb-3">Login</h1>

      <div class="form-group">
        <label for="username mt-5">User Name</label>
        <input type="text" id="username" class="form-control form-control-lg" v-model="credentials.username" />
      </div>

      <div class="form-group mt-2">
        <label for="password">Password</label>
        <input 
          type="password"
          id="password"
          class="form-control form-control-lg"
          v-model="credentials.password"
          @keypress.enter="login(credentials)" 
        />
      </div>

      <button class="btn btn-dark btn-lg btn-block mt-5" @click="login(credentials)">Login</button>
    </form>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: 'Login',
  data: function () {
    return {
      credentials: {
        username: '',
        password: '',
      },
      verifycredentials: {
        usernamedd: '',
        passworddd: '',
      },
    }
  },
  methods: {
    ...mapActions([
      'login',
      'verifyUser',
    ])
  },
  computed: {
    ...mapState([
      'isStaff',
    ])
  },
}


/*
import axios from 'axios'

const SERVER_URL = process.env.VUE_APP_SERVER_URL

export default {
  name: 'Login',
  data: function () {
    return {
      credentials: {
        username: '',
        password: '',
      }
    }
  },
  methods: {
    login: function (credentials) {
      axios({
        url: `${SERVER_URL}/accounts/api-token-auth/`,
        method: 'post',
        data: credentials,
      })
      .then((res) => {
        localStorage.setItem('jwt', res.data.token)
        this.$emit('user-login')
        this.$router.push({ name: 'TodoList' })
      })
      .catch((err) => {
        console.log(err)
      })
    }
  }
}
*/
</script>

<style scoped>
    .login {
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