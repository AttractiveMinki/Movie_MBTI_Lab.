<template>
  <div>
    <!-- <h1>MBTI Test</h1> -->
    <section id="main" class="mx-auto my-5 pt-5 pb-5 px-3">
      <h1>MBTI Test</h1>
      <div class="col-lg-6 col-md-8 col-sm-10 col-12 mx-auto pt-5 pb-5">
        <img src="../../../img/main.png" alt="mainImage" class="img-fluid">
      </div>
      <p>
        MBTI별 나만의 영화 추천 테스트입니다!
        아래 시작하기 버튼을 눌러 시작해보세요😊
      </p>
      <button type="button" class="btn btn-outline-danger mt-3" @click="mbtiBegin()">시작하기</button>
    </section>
  </div>
</template>

<script>
import { mapActions } from 'vuex'


export default {
  name: 'MBTITest',
  methods: {
    ...mapActions([
      'mbtiBegin',
      ])
    },
  }
</script>

<style>
body{
  background-color: lightblue;
}

*{
  font-family: 'Do Hyeon', sans-serif;
}
</style>