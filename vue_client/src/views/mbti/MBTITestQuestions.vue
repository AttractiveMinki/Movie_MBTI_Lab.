<template>
  <div>
    <h3 class="pt-5">MBTI Test Questions</h3>
    <section id="main" class="mx-auto">
      <div class="status mx-auto mt-5 pt-3">
        <div class="statusBar my-auto">
          <!-- 1. 데이터를 순서대로 가져온다. -->
          <!-- 2. 입력을 기다리고 받는다. -->
            <h2 class="d-grid mx-auto pt-5 pb-5 col-8">{{ qnaList[qnaIdx].q }}</h2>
            <div class="d-grid gap-2 col-8 mx-auto pt-5">
              <vs-button color="dark" type="border" @click="mbtiGoNext(qnaList[qnaIdx].a[0].type)" v-html="qnaList[qnaIdx].a[0].answer">Button</vs-button>
              <vs-button color="dark" type="border" @click="mbtiGoNext(qnaList[qnaIdx].a[1].type)" v-html="qnaList[qnaIdx].a[1].answer">Button</vs-button>
            </div>
        </div>
      </div>
    </section>
  </div>

</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'MBTITestQuestion',
  methods: {
    ...mapActions([
      'mbtiGoNext',
      'mbtiAddAnswer',
    ])
  },
  computed: {
    ...mapState([
      'qnaList',
      'select',
      'endPoint',
      'qnaIdx',
    ]),
  },
}

</script>

<style>

</style>