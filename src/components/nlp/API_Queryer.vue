<template>

  <form :id='id' @submit.prevent="onSubmit">
    <h2 class = "label-wrapper">
      <label for = "new-todo-input" class = "label__lg">
        {{title}}
      </label>
    </h2>

    <input
      type = "text"
      id = "new-todo-input"
      name="new-todo"
      autocomplete = "off"
      v-model.lazy.trim = "label"
     />

    <button type = "submit" class="btn btn__primary btn__lg">
    Add
    </button>


  </form>

</template>

<script>

var base_url = 'http://ec2-3-136-18-160.us-east-2.compute.amazonaws.com/nlp/';

  export default {
    props:{
      title  : {  required:true, type:String},
      api_url: {  required:true, type:String},
      id     : {  required:true, type:String}
    },
    methods:{
      onSubmit(){

        if(this.label===""){
          return;
        }

        fetch(base_url+this.api_url+'/?strings='+this.label
          , {method:'GET'})
        .then(response => {
          return response.json();
        })
        .then(nlp => {
          console.log({labeled:nlp})
          this.searched = true
          this.$emit("todo-added",{labeled:nlp,visualizer:this.api_url});
          this.label = "";
          return {nlp}
        })


        this.$emit("todo-added",this.label);
        this.label = "";
      }
    },
    data() {
      return {
        label:"",
        searched :false,
        // title:this.title
      };
    }
  };
</script>