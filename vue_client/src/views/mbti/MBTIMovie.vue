<template>
  <div class="mt-5 mx-auto" id="main">
    <h1 class="pt-5 py-3">{{ infoList[$route.params.mbtiResult].recommend_name }}</h1>
    <div class="resultDesc mt-5 col-10 mx-auto">
      <ul v-for="(desc, idx) in infoList[$route.params.mbtiResult].recommend_desc" :key="idx">
        <li>{{ desc }}</li>
      </ul>
    </div>

    <!-- 추천 영화 중 1번 유튜브 링크, 전체 영화 -->
    <div v-for="(movie3, idx3) in movies" :key="idx3" class="px-0">
      <div v-if="movie3.title == infoList[$route.params.mbtiResult].movie[0]">
        <!-- MBTI 유형 내 영화 3개 -->
        <div class="video-detail" style="height: 750px">
          <div class="video-container" style="height: 750px">
            <iframe :src="`https://www.youtube.com/embed/${movie3.youtube_link.split('=')[1]}`" frameborder="0" class="w-75 h-75"></iframe>
          </div>

        </div>

      </div>
    </div>

    <section id="" class="mx-auto my-5 py-5 px-3">
      <h2>나만의 추천영화</h2>
      <div v-for="(movie2, idx2) in infoList[$route.params.mbtiResult].movie" :key="idx2" class="px-0">
        <!-- 전체 영화 -->
        <div v-for="(movie3, idx3) in movies" :key="idx3" class="px-0">
          <div v-if="movie3.title == movie2">
            <!-- MBTI 유형 내 영화 3개 -->
            <vs-button type="line" color="success" @click="getMovieDetail(movie3.id)">{{ movie3.title }}</vs-button>
          </div>
        </div>
      </div>

      <button @click="goBack" type="button" class="btn btn-outline-danger mt-3">BACK</button>
    </section>

  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'MBTIMovie',
  computed: {
    ...mapState([
      'infoList',
      'movies',
    ]),
  },
  methods:{
    ...mapActions([
      'getMovieDetail',
      'getMovies',
    ]),
    goBack(){
      this.$router.go(-1); [2]
      },
  },
  mounted: function () {
    this.getMovies()
  },
}

</script>

<style >
ul{
   list-style:none;
   }
</style>