<template>
<div>
    <h2>Testing Twitter Functionality</h2>
    <button @click='searchTweets' > Search Tweets </button>
</div>

</template>


<script>

import {getQuery} from './queryAPI.js'

export default {
    name: 'HelloTwitter',
    data(){
        return {
            searchResult : ''
        }
    },
    mounted(){
        // console.log('Searching for tweets:')
        // tweets  =await this.searchTweets()
        // console.log(tweets)
    },
    methods:{ 
        async searchTweets(){
            console.log('searching for tweets')
            getQuery('nlp/tweets/')
        }
    }
}

</script>