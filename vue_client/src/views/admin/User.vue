<template>
  <div>
    <h1>UserSetting</h1>
    <router-link :to="{ name: 'AdminUser' }">User</router-link> |
    <router-link :to="{ name: 'AdminMovie' }">Movie</router-link> |
    <hr>
    <router-link :to="{ name: 'AdminUserCreate' }">유저 생성하기</router-link>
    <hr>
    <div v-for="(userInformation, idx) in userInformations" :key="idx" >
      {{ userInformation.username }} (고유번호: {{ userInformation.id }})
      <br>
      <button type="button" class="btn btn-outline-danger mt-3" @click="getAdminUserInformation(userInformation.id)">상세정보</button>
      <button type="button" class="btn btn-outline-danger mt-3" data-bs-toggle="modal" data-bs-target="#exampleModaldelete" @click="SET_SELECTED_USER(userInformation)">
        삭제하기
      </button>
      <br>
      <hr>

      <!-- Modal -->
      <div class="modal fade" id="exampleModaldelete" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              정말 회원을 삭제하시겠습니까?
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">취소</button>
              <button type="button" class="btn btn-primary" data-bs-dismiss="modal" aria-label="Close" @click="deleteAdminUserInformation(selectedUser.id)">회원 삭제</button>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex'


export default {
  name: 'User',
  methods: {
    ...mapActions([
      'getAdminUserInformations',
      'getAdminUserInformation',
      'setAdminUserInformation',
      'deleteAdminUserInformation',
    ]),
    ...mapMutations([
      'SET_SELECTED_USER',
    ]),
  },
  computed: {
    ...mapState([
      'userInformations',
      'selectedUser',
    ]),
  },
  created: function () {
    this.getAdminUserInformations()
  },
}
</script>

<style>

</style>