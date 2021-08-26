<template>
  <div id="app">

<!--     <equation :latex = "'f=\\frac{b_i}{1+x}'"> </equation>
 -->
    <router-link to="/">Home</router-link>
    <router-link to="/deepmoji">Go to DeepMoji explanation (under construction)</router-link>
    <router-view>

    </router-view>

   </div>

</template>

<script>

import DeepMoji from './components/DeepMoji.vue'
import Home from './components/Home.vue'

export default {
  name: 'App',
  computed: {
    username() {
      // We will see what `params` is shortly
      return this.$route.params.username
    }
  },
  components: {
  },
  data() {
    return {
    }
  },
  methods:{
    testFunc(){
      this.$router.addRoute(  "deepmoji",{path : '/deepmoji', component:DeepMoji})
      this.$router.addRoute(  "home",{path : '/', component:Home})
    },
    goBack() {
      console.log(this.$router)
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
    },
  },
  created: function(){
    this.testFunc();
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
