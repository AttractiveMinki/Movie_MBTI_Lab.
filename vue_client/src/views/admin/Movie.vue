<template>
  <div>
    <h1>MovieSetting</h1>
    <router-link :to="{ name: 'AdminUser' }">User</router-link> |
    <router-link :to="{ name: 'AdminMovie' }">Movie</router-link> |
    <hr>
    <button type="button" class="btn btn-outline-danger mt-3" data-bs-toggle="modal" data-bs-target="#exampleModaldelete">
      gist정보 DB에 저장하기 [주의: db가 비어있을 때 1회만 클릭하시기 바랍니다.]
    </button>

    <!-- Modal -->
    <div class="modal fade" id="exampleModaldelete" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">요청 확인</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            정말 영화 정보를 DB에 저장하시겠습니까?
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">취소</button>
            <button type="button" class="btn btn-primary" data-bs-dismiss="modal" aria-label="Close" @click="getMoviesFromGist()">불러오기</button>
          </div>
        </div>
      </div>
    </div>
    <br>
    <router-link :to="{ name: 'AdminMovieCreate' }">영화 생성하기</router-link>
    <br>
    <br> 
    <AdminMovieCard 
      v-for="(movieInformation, idx) in movieInformations" 
      :key="idx"
      :movieInformation="movieInformation"
    />
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import AdminMovieCard from '@/components/AdminMovieCard.vue'


export default {
  name: 'Movie',
  components: {
    AdminMovieCard
  },
  computed: {
    ...mapState([
      'movieInformations',
    ]),
  },  
  methods: {
    ...mapActions([
      'getAdminMovieInformations',
      'getMoviesFromGist',
    ]),
  },
  created: function () {
    this.getAdminMovieInformations()
  },
}
</script>

<style>

</style>