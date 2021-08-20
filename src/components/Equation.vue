<template>
  <div>
	<div v-katex="latex"></div>
  </div>
</template>

<script>


export default {
	props:{
		latex:{ required:false , type:String }
	},
	components:{
	}
}

</script>