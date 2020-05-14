const quote=require('./utils/quote.js')

const Twitter=require('twitter')
var quote_day=''

var client = new Twitter({
    consumer_key: 'xrV2mQOV2uIbuPe6qMO0wkqs9',  
    consumer_secret: '3HsZOkc4EwMqauPMiAfL43nuF4JdxLyYcCIq69N4DMkx9EDvMl',
    access_token_key: '1198579413266288641-bJpLdBHxDIDFAUtHrAKoyt8GHbiSNF',  
    access_token_secret: 'AaBY8W6g985toPCl3OZ4rzG3XmursK2ROZcsjxNNfCw3X'
});





const tweet=()=>{
    quote().then((response)=>{
        quote_day=response.contents.quotes[0].quote
        client.post('statuses/update', {status: '#QuoteOfTheDay \"'+quote_day+'\"'},  function(error, tweet, response) {
            if(error) throw error;
            console.log(tweet);  // Tweet body.
            console.log(response);  // Raw response object.
        });
    }).catch((e)=>{
        console.log(e)
    })
    
}

tweet()

setInterval(tweet, 86400000);

