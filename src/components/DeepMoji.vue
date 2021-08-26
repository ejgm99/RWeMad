<template>
  <div id="app">

<!--     <equation :latex = "'f=\\frac{b_i}{1+x}'"> </equation>
 -->

    <passage :title="'Introduction'" :body="Content[0]"> </passage>

    <deepmoji></deepmoji>

    <passage :title="'The DeepMoji Model'" :body="Content[1]"></passage>

    <tokenization></tokenization>

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
import Equation from './Equation.vue'
import Passage from './Passage.vue'
import Deepmoji from './nlp/DeepMoji/Deepmoji.vue'
import Tokenization from './nlp/DeepMoji/Tokenization.vue'

import c_Intro from 'raw-loader!./../assets/content/1IntroBody.html';
import c_DeepMoji from 'raw-loader!./../assets/content/2DeepMojiExplanation.html';
import c_Tokenization from 'raw-loader!./../assets/content/3Tokenization.html';
import c_Embedding from 'raw-loader!./../assets/content/4Embedding.html';
import c_LSTM from 'raw-loader!./../assets/content/5LSTMs.html';


export default {
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
    getUniqueID(base_str){
      return uniqueID(base_str+"-")
    }
  }
}
</script>