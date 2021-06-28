<template>
  <div>
    <h1 class="pt-5 pb-5">Review</h1>
    <div id="main" class="mx-auto pt-5 pb-5 mb-5">
      <section class="col-10 mx-auto">
        <!-- <div>{{ selectedReview }}</div> -->
        <ul class="list-group">
          <li class="list-group-item p-4">
            <h2 class="d-flex">{{ selectedReview.title }}</h2>
            <hr>
            <div class="d-flex">MOVIE: {{ selectedReview.movie_title }}</div>
            <div class="d-flex pt-5 pb-5">{{ selectedReview.content }}</div>
            <hr>
            <div class="d-flex pull-right">{{ selectedReview.created_at.split('T')[0] }}</div>
            <div class="d-flex">작성자: {{ selectedReview.username }}</div>
            <hr>
            <div class="d-flex pb-3">{{ selectedReview.comment_count }}개의 댓글이 있습니다.</div>
            <ul class="list-group" v-for="(comment, idx) in selectedReview.comments" :key="idx">
              <li class="list-group-item">
                <div class="d-flex pull-right"><vs-avatar class="d-flex" badge /> {{ comment.username }}</div>
                <div class="d-flex">{{ comment.content }}</div>
                <br>
                <div class="d-flex">등록: {{ comment.created_at.split('T')[0] }} {{ comment.created_at.split('T')[1].slice(0, 5) }}</div>
                <div v-if="comment.created_at != comment.updated_at">
                  <div class="d-flex">최종수정: {{ comment.updated_at.split('T')[0] }} {{ comment.updated_at.split('T')[1].slice(0, 5) }}</div>
                </div>
                <br>
                <div v-if="comment.user == userid" class="d-flex">
                  <vs-button type="line" @click="setReviewComment(comment)">수정</vs-button>
                  <vs-button color="danger" type="line" data-bs-toggle="modal" data-bs-target="#exampleModalcomment" @click="SET_REVIEW_COMMENT(comment)">
                    삭제
                  </vs-button>

                  <!-- Modal -->
                  <div class="modal fade" id="exampleModalcomment" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                          정말 댓글을 삭제하시겠습니까?
                        </div>
                        <div class="modal-footer">
                          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">취소</button>
                          <button type="button" class="btn btn-primary" data-bs-dismiss="modal" aria-label="Close" @click="deleteComment(selectedReviewComment)">댓글 삭제</button>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </li>
            </ul>
            
            <div class="card mb-2 mt-5">
              <div class="card-header bg-light">
                <i class="fa fa-comment fa"></i> REPLY
              </div>
              <div class="card-body">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">
                      <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" type="text" v-model="commentContent" @keypress.enter="createComment"></textarea>
                      <button type="button" class="btn btn-dark mt-3" @click="createComment">post reply</button>
                    </li>
                </ul>
              </div>
            </div>
            <div v-if="selectedReview.user == userid">
              <button type="button" class="btn btn-outline-primary mt-3">
                <router-link :to="{ name: 'ReviewChange' }">수정하기</router-link>
              </button>
              <button  type="button" class="btn btn-outline-danger mt-3" data-bs-toggle="modal" data-bs-target="#exampleModalreview" @click="SET_REVIEW_COMMENT(comment)">
                게시글 삭제
              </button>

              <!-- Modal -->
              <div class="modal fade" id="exampleModalreview" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                      정말 게시글을 삭제하시겠습니까?
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">취소</button>
                      <button type="button" class="btn btn-primary" data-bs-dismiss="modal" aria-label="Close" @click="deleteReview(selectedReview)">게시글 삭제</button>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </li>
        </ul>
        <button @click="goBack" type="button" class="btn btn-outline-danger mt-5">BACK</button>
      </section>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState, mapMutations } from 'vuex'


export default {
  name: 'Review',
  data: function () {
    return {
      commentContent: '',
      items: {
        tempReviewCommentId: 0,
      }
    }
  },
  methods: {
    ...mapActions([
      'editReview',
      'deleteReview',
      'setReviewComment',
      'deleteComment',
    ]),
    ...mapMutations([
      'CHANGE_REVIEW_COMMENT_GET_COMMENT',
      'SET_REVIEW_COMMENT',
    ]),
    createComment: function () {
      let today = new Date()
      const Comment = {
        content: this.commentContent,
        username: this.username,
        user: this.userid,
        created_at: today,
        updated_at: today,
        reviewId: this.selectedReview.id,
      }
      if (Comment.content.trim()) {
        this.$store.dispatch('createComment', Comment)
      }
      this.commentContent = ''
    },
    goBack(){
      this.$router.go(-1); [2]
    },
  },
  computed: {
    ...mapState([
      'selectedReview',
      'username',
      'userid',
      'selectedReviewComment',
    ])
  },
}
</script>

<style>

</style>