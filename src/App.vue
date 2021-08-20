<template>
  <div id="app">

    <equation :latex = "'f=\\frac{b_i}{1+x}'"> </equation>

    <passage :title="'Introduction'" :body="Content[0]"> </passage>

    <deepmoji></deepmoji>

    <passage :title="'The DeepMoji Model'" :body="Content[1]"></passage>

    <tokenization></tokenization>
<!--     <img alt="Vue logo" src="./assets/content/img/deepmoji_summary.png"> -->
    <equation :latex= 
    "`\\begin{bmatrix} 1  \\\\ \\vdots \\\\ 10000  \\end{bmatrix}`"
    > </equation>

    <passage :title="'Tokenization'" :body="Content[2]"></passage>
    <passage :title="'Embedding'" :body="Content[3]"></passage>

    <passage :title="'Long Short Term Memory'" :body="Content[4]"></passage>

   </div>

</template>

<script>
import uniqueID from 'lodash.uniqueid'
import Equation from './components/Equation.vue'
import Passage from './components/Passage.vue'
import Deepmoji from './components/nlp/DeepMoji/Deepmoji.vue'
import Tokenization from './components/nlp/DeepMoji/Tokenization.vue'

import c_Intro from 'raw-loader!./assets/content/1IntroBody.html';
import c_DeepMoji from 'raw-loader!./assets/content/2DeepMojiExplanation.html';
import c_Tokenization from 'raw-loader!./assets/content/3Tokenization.html';
import c_Embedding from 'raw-loader!./assets/content/4Embedding.html';
import c_LSTM from 'raw-loader!./assets/content/5LSTMs.html';


export default {
  name: 'App',
  components: {
    Equation,
    Passage,
    Deepmoji,
    Tokenization
  },
  data() {
    return {
    Content : [
      c_Intro,
      c_DeepMoji,
      c_Tokenization,
      c_Embedding,
      c_LSTM
    ]
    }
  },
  methods:{
    addLabeledText(nlp){
      var labeled_data = nlp.labeled
      console.log(uniqueID('a'))
      if (nlp.visualizer=='deepmoji'){
        console.log("Bonk",labeled_data.phrases[0])
      }
    },
    getUniqueID(base_str){
      return uniqueID(base_str+"-")
    }
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
