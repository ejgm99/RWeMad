<template>
	<span :id='id' >{{content+" "}}</span>
</template>

<script>
	export default{
		props:{
			content: {required: true, type: String },
			id: {required: true, type: String}
		}
	};
</script>
