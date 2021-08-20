<template>
<span>
	<queryer :title="'DeepMoji'" :api_url="'deepmoji'" :id="getUniqueID('query')" @todo-added="addLabeledText"></queryer>
	<table v-if="showQuery" style="width:100%">
		<tr>
			<th> Query </th>
			<th> Result </th>
		</tr>

		<tr v-for="item in rowData" :key="item.phrase">
			<td>{{item.phrase}}</td>
			<td>{{item.score}}</td>
		</tr>
	</table>
</span>
</template>

<script>

import Queryer from '../API_Queryer.vue' 
import uniqueID from 'lodash.uniqueid'

	export default{

		components:{
			Queryer
		},

		props:{
		},

		methods:{

			addLabeledText(nlp){
				var labeled_data = nlp.labeled
				this.showQuery = true;
				console.log(uniqueID('a'))
				if (nlp.visualizer=='deepmoji'){
					this.rowData.push({
						phrase : labeled_data.phrases[0],
						score  : labeled_data.labels[0]
					})
				}
			},

			getUniqueID(base_str){
				return uniqueID(base_str+"-")
			}
		},
		
		data(){
			return{
				rowData:[],
				showQuery : false
			}
		}
	};

</script>
