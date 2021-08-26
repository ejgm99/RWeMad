<template>
<span>
  <passage :title="'Erick J Gomez\'s Machine (L)earning Log'" :body="Content[0]"></passage>
  <deepmoji></deepmoji>
</span>
</template>

<script>

import uniqueID from 'lodash.uniqueid'
import Passage from './Passage.vue'
import Deepmoji from './nlp/DeepMoji/Deepmoji.vue'
import c_Intro from 'raw-loader!./../assets/content/home/Introduction.html';

export default{
 components: {
    Passage,
    Deepmoji
  },

  data() {
    return {
      Content:[
        c_Intro
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