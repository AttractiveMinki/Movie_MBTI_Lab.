<template>
  <div>
    <h1 class="pt-5 py-3">Select MBTI</h1>
    <section class="d-grid gap-2 d-md-block col-8 mt-5" style="margin-left: auto; margin-right: auto;">
      <router-link :to="{ name: 'MBTIMovie', params: { mbtiResult: 0 } }" type="img"><img src="../../../img/image-0.jpg" alt="ISTJ" class="col-3"></router-link> 
      <router-link :to="{ name: 'MBTIMovie', params: { mbtiResult: 1 } }" type="img"><img src="../../../img/image-1.jpg" alt="ISFJ" class="col-3"></router-link> 
      <router-link :to="{ name: 'MBTIMovie', params: { mbtiResult: 2 } }" type="img"><img src="../../../img/image-2.jpg" alt="INFJ" class="col-3"></router-link> 
      <router-link :to="{ name: 'MBTIMovie', params: { mbtiResult: 3 } }" type="img"><img src="../../../img/image-3.jpg" alt="INTJ" class="col-3"></router-link> 
      <router-link :to="{ name: 'MBTIMovie', params: { mbtiResult: 4 } }" type="img"><img src="../../../img/image-4.jpg" alt="ISTP" class="col-3"></router-link> 
      <router-link :to="{ name: 'MBTIMovie', params: { mbtiResult: 5 } }" type="img"><img src="../../../img/image-5.jpg" alt="ISFP" class="col-3"></router-link> 
      <router-link :to="{ name: 'MBTIMovie', params: { mbtiResult: 6 } }" type="img"><img src="../../../img/image-6.jpg" alt="INFP" class="col-3"></router-link> 
      <router-link :to="{ name: 'MBTIMovie', params: { mbtiResult: 7 } }" type="img"><img src="../../../img/image-7.jpg" alt="INTP" class="col-3"></router-link> 
      <router-link :to="{ name: 'MBTIMovie', params: { mbtiResult: 8 } }" type="img"><img src="../../../img/image-8.jpg" alt="ESTP" class="col-3"></router-link> 
      <router-link :to="{ name: 'MBTIMovie', params: { mbtiResult: 9 } }" type="img"><img src="../../../img/image-9.jpg" alt="ESFP" class="col-3"></router-link> 
      <router-link :to="{ name: 'MBTIMovie', params: { mbtiResult: 10 } }" type="img"><img src="../../../img/image-10.jpg" alt="ENFP" class="col-3"></router-link> 
      <router-link :to="{ name: 'MBTIMovie', params: { mbtiResult: 11 } }" type="img"><img src="../../../img/image-11.jpg" alt="ENTP" class="col-3"></router-link> 
      <router-link :to="{ name: 'MBTIMovie', params: { mbtiResult: 12 } }" type="img"><img src="../../../img/image-12.jpg" alt="ESTJ" class="col-3"></router-link> 
      <router-link :to="{ name: 'MBTIMovie', params: { mbtiResult: 13 } }" type="img"><img src="../../../img/image-13.jpg" alt="ESFJ" class="col-3"></router-link> 
      <router-link :to="{ name: 'MBTIMovie', params: { mbtiResult: 14 } }" type="img"><img src="../../../img/image-14.jpg" alt="ENFJ" class="col-3"></router-link> 
      <router-link :to="{ name: 'MBTIMovie', params: { mbtiResult: 15 } }" type="img"><img src="../../../img/image-15.jpg" alt="ENTJ" class="col-3"></router-link> 
    </section>

  </div>
</template>

<script>
export default {
  name: 'SelectMBTI',
}

</script>

<style>

</style>