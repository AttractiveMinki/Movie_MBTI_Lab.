<template>
  <div>
    <h1>MovieDetail</h1>
    <router-link :to="{ name: 'AdminUser' }">User</router-link> |
    <router-link :to="{ name: 'AdminMovie' }">Movie</router-link>
    <hr>
    <div v-for="(info, idx) in movieInformationselect" :key="idx">
      {{ info }}
    </div>

    <button type="button" class="btn btn-outline-primary mt-3">
      <router-link :to="{ name: 'AdminMovieChange' }">수정하기</router-link>
    </button>
    
    <button type="button" class="btn btn-outline-danger mt-3" data-bs-toggle="modal" data-bs-target="#exampleModaldelete">
      삭제하기
    </button>

    <!-- Modal -->
    <div class="modal fade" id="exampleModaldelete" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            정말 영화 정보를 삭제하시겠습니까?
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">취소</button>
            <button type="button" class="btn btn-primary" data-bs-dismiss="modal" aria-label="Close" @click="deleteAdminMovieInformation(movieInformationselect.id)">삭제하기</button>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name:'AdminMovieDetail',
  computed: {
    ...mapState([
      'movieInformationselect',
    ]),
  },
  methods: {
    ...mapActions([
      'deleteAdminMovieInformation',
    ]),
  },
}
</script>

<style>

</style>