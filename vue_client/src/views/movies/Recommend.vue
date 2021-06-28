<template>
  <div>
    <h1>Recommend</h1>  
    <router-link :to="{ name: 'MBTITestStart' }">MBTITest</router-link> |
    <router-link :to="{ name: 'SelectMBTI' }">SelectMBTI</router-link>
    <hr>
  </div>

</template>

<script>


export default {
  name: 'Recommend',
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