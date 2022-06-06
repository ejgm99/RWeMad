<template>
  <div id="app">

<!--     <equation :latex = "'f=\\frac{b_i}{1+x}'"> </equation>
 -->

     <h1>RWeMad.dev </h1>

    <deep-moji></deep-moji>
     <!-- <hello-twitter></hello-twitter> -->
    <!-- <router-link to="/">Home</router-link>
    <span>&#8226;</span>
    <router-link to="/deepmoji">Go to DeepMoji explanation (under construction)</router-link>
    <router-view>

    </router-view> -->

   </div>

</template>

<script>

import DeepMoji from './components/Home.vue'
// import HelloTwitter from './components/twitter/HelloTwitter.vue'

export default {
  name: 'App',
  components:{
    // HelloTwitter,
    DeepMoji
}

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
