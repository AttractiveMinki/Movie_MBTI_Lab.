<template>
  <div id="app">    
    <nav class="navbar navbar-expand-lg navbar-dark sticky-top bg-dark px-5">
      <div class="container-fluid">
        <div class="px-2">
          <span style="color:white" class="py-3"><i class="fa fa-flask fa-2x" aria-hidden="true"></i></span>
        </div>
        <a class="navbar-brand" href="http://localhost:8080/movies">MBTI Lab</a>
        <button class="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <i class="bi bi-list"></i>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link :to="{ name: 'Home' }" class="nav-link active" aria-current="page">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link :to="{ name: 'Community' }" class="nav-link">Community</router-link>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Recommend
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><router-link :to="{ name: 'MBTITestStart' }" class="dropdown-item">MBTI Test</router-link></li>
                <li><router-link :to="{ name: 'SelectMBTI' }" class="dropdown-item">Select MBTI</router-link></li>
              </ul>
            </li>
            <li class="nav-item" v-if="isStaff">
              <router-link :to="{ name: 'Admin' }" class="nav-link">Admin</router-link>
            </li>
          </ul>
        </div>
        <span v-if="isLoggedIn">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <a class="navbar-brand">{{ username }}님, 환영합니다</a>
            <li class="nav-item">
              <router-link :to="{ name: 'MyPage' }" class="nav-link">MyPage</router-link>
            </li>
            <li class="nav-item">
              <vs-button  color="danger" type="line" class="nav-link" @click="logout(credentials)">Logout</vs-button>
            </li>
          </ul>
        </span>
        <span v-else>
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link :to="{ name: 'Login' }" class="nav-link">Login</router-link>
            </li>
            <li class="nav-item">
              <router-link :to="{ name: 'Signup' }" class="nav-link">Signup</router-link>
            </li>
          </ul>
        </span>
      </div>
    </nav>

    <router-view/>
    <footer class="d-flex fixed-bottom sticky-bottom mx-auto bg-dark mt-5 bt-5" id="footer"> <!--명세02-01--> <!--명세02-02-->
      <span class="mx-auto m-1 text-light">
        ©copyright SSAFY 5th, SEOUL 5, FINAL_PJT by Juyeop Yoon, Jayeon Choi [MBTI Lab.]
        <br>
        Special thanks to Prof. Jaeseok Kim
      </span>
    </footer>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapState } from 'vuex'

export default {
  name: 'App',
  methods: {
    ...mapActions([
      'logout',
      'getUsername',
      'getUserId',
    ])
  },
  computed: {
    ...mapGetters([
      'isLoggedIn',
    ]),
    ...mapState([
      'username',
      'isStaff',
    ]),
  },
  mounted: function () {
    this.getUsername()
    this.getUserId()
  },
  data:()=>({
    activeItem: 0,
  }),
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

</style>