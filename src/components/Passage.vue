<template>
<div>
  <h1>{{title}}</h1>
  <span v-html="body"></span>
</div>
</template>

<script>

export default {
	props:{
		title:{ required:true , type:String },
		body:{  required:true,  type:String }
	}

}
</script>