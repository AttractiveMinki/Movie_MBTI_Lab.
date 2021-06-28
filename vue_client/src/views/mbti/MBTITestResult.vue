<template>
  <div>
    <section id="main" class="mx-auto my-5 py-5 px-3">
      <h3>나의 MBTI</h3>
      <div class="status mx-auto mt-5 pt-3">
        <div class="resultname mt-5">
          <h2>{{ infoList[mbtiResult].name }}</h2> 
        </div>
        
        <div id="resultImg" class="col-lg-6 col-md-8 col-sm-10 col-12 mx-auto pt-5 pb-5 my-3">
          <img :src="require(`../../../img/image-${mbtiResult}.jpg`)" alt="MBTI_Image">
        </div>
        <div class="resultDesc">
          <ul v-for="(description, idx) in infoList[mbtiResult].desc" :key="idx">
            <li>{{ description }}</li>
          </ul>
        </div>
        <router-link 
          :to="{ name: 'MBTIMovie', params: { mbtiResult } }" type="button" class="btn btn-outline-danger mt-3">추천 영화보기</router-link>
      </div>
    </section>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'MBTITestResult',
  methods: {
    ...mapActions([
      'mbtiGoResult',
      'mbtiSetResult',
      'mbtiCalResult',
    ])
  },
  computed: {
    ...mapState([
      'infoList',
      'mbtiResult',
    ]),
  },
}
</script>

<style>

</style>