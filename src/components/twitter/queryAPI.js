
var base_url = 'http://ec2-3-136-18-160.us-east-2.compute.amazonaws.com/nlp/';

console.log(base_url)

export function getQuery(api_url){
    var url = base_url+api_url
    console.log('Querying url:',url)
    fetch( url, {method:'GET'})
        .then(response => {
        console.log(response)
        return response.json()
    }).then( json => {
        return json
    }
        
    )
}